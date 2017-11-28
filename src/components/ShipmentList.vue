<template>
  <table>
    <tr>
      <th>ID</th>
      <th>Order ID</th>
      <th>Order number</th>
      <th>Warehousing</th>
    </tr>
    <tr v-for="shipment in shipments">
      <td>{{ shipment.id }}</td>
      <td>{{ shipment.order.id }}</td>
      <td>{{ shipment.order.order_number }}</td>
      <td>{{ shipment.name }}</td>
    </tr>
  </table>
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