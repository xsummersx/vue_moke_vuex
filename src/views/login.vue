<template>
  <div class="about">
    <input type="text" placeholder="账号" />
    <input type="text" placeholder="密码" />
    <button @click="submit">登录</button>
  </div>
</template>
<script>
export default {
  name: 'login',
  mounted () {

  },
  methods: {
    submit () {
      let tk = '123';
      this.$store.commit('setToken', {
        token: tk
      })
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
