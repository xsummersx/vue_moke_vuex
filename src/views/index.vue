<template>
  <div>
    <div>您当前账户权限：{{vipNameShow}}</div>
    <el-button>进入课程1学习</el-button>
    <el-button>进入会员课程2学习</el-button>
    <el-button>进入超级VIP会员课程3学习</el-button>
    <el-button type="success" @click="buyVipPage">开通VIP账户</el-button>
  </div>
</template>
<script>
import { getters } from 'vuex'
export default {
  name: 'about',
  mounted () {
    this.init()
  },
  computed: {
    ...getters(['vipName'])
  },
  methods: {
    init () {
      this.$store.commit('setVip', {
        vipState: 0,
        vipLevel: 0
      })
    },
    buyVipPage () {

    }
  }
}
</script>
