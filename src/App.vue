<template>
  <div id="app">
    <router-link :to="'/'">Home</router-link>

    <button v-if="!authenticated" @click="login()">Login</button>
    <button v-else @click="logout">Logout</button>

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
  import AuthService from '@/auth/AuthService'
  const auth = new AuthService()
  const { login, logout, authenticated } = auth

  export default {
    name: 'app',
    data () {
      return {
        auth,
        authenticated
      }
    },
    methods: {
      login,
      logout
    }
  }
</script>
