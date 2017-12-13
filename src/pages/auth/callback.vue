<template>
    <div class="spinner">
        <!--<img src="../assets/loading.svg" alt="loading"/>-->
    </div>
</template>

<script>
  import auth from '@/auth/AuthService'
  export default {
    name: 'callback',
    props: ['auth'],
    data () {
      this.auth.handleAuthentication()
      return {}
    }
  }
</script>