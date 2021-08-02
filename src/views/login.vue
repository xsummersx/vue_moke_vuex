<template>
  <div>
    <el-input v-model="user" placeholder="请输入账号" />
    <el-input v-model="pwd" placeholder="请输入密码" />
    <el-button type="success" @click='login'>登录</el-button>
    {{global}}
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      user: '',
      pwd: '',
    }
  },
  methods: {
    login () {
      this.$store.commit('login', {
        user: this.user,
      });
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>