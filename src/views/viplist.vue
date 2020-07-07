<template>
  <div>
    <div>您当前账户权限为：{{vipNameShow}}</div>
    <el-button @click="buy('1')">开通普通会员</el-button>
    <el-button @click="buy('2')">开通超级VIP会员</el-button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'viplist',
  mounted () {

  },
  computed: {
    ...mapGetters({
      vipNameShow: 'vipName'
    })
  },
  methods: {
    buy (n) {
      let obj = {}
      if (n == 1) {
        obj.vipState = 1
      } else {
        obj.vipState = 2
      }
      this.$store.dispatch('buyVip', obj).then((res) => {
        alert(res)
      })
    }
  }
}
</script>
