<template>
  <el-table :data="shipments" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-table :data="props.row.shipment_lines" style="width: 100%">
          <el-table-column label="Item Name" prop="item_name"/>
          <el-table-column label="Unit Price" prop="unit_price"/>
          <el-table-column label="Quantity" prop="quantity"/>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column label="ID" prop="id"/>
    <el-table-column label="Order Number" prop="order.order_number"/>
    <el-table-column label="Warehousing" prop="warehousing.name"/>
  </el-table>
</template>

<script>
  import shippinno from '@/api/shippinno'
  export default {
    data () {
      return {
        shipments: []
      }
    },
    mounted () {
      shippinno.getShipments(shipments => {
        this.shipments = shipments
      })
    }
  }
</script>