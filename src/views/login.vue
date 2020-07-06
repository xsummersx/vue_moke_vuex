<template>
  <div>
    <div>
      <label>账号</label>
      <input type="text" v-model="formInfo.userName" />
    </div>
    <div>
      <label>密码</label>
      <input type="password" v-model="formInfo.password" />
    </div>
    <div>
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "DemoLogin",
  data () {
    return {
      formInfo: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.commit("login", {
        user: this.formInfo.userName
      });
      this.$store.commit("setMemberInfo", {
        userStatus: 1,
        vipLevel: 0
      })
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>