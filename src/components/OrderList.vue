<template>
  <table>
    <tr>
      <th>ID</th>
      <th>Store name</th>
      <th>Order number</th>
      <th>Ordered at</th>
      <th>Purchaser</th>
    </tr>
    <tr v-for="order in orders">
      <td>{{ order.id }}</td>
      <td>{{ order.store_name }}</td>
      <td>{{ order.order_number }}</td>
      <td>{{ order.ordered_at }}</td>
      <td>{{ order.purchaser.name }}</td>
    </tr>
  </table>
</template>

<script>
  export default {
    data () {
      return {
        orders: []
      }
    },
    mounted () {
      this.orders = [
        {
          id: '1111111',
          store_name: 'Some store',
          order_number: '7342987',
          ordered_at: '2017-11-27 12:34:56',
          purchaser: {
            name: 'John Doe'
          }
        }
      ]
    }
  }
</script>