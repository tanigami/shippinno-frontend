<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link :to="{ name: 'index' }">Index</router-link></li>
        <li><router-link :to="{ name: 'orders-index' }">Orders</router-link></li>
        <li><router-link :to="{ name: 'shipments-index' }">Shipments</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
