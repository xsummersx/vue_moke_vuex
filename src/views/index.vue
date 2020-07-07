<template>
  <div>
    <div>您当前是{{this.$store.getters.memberInfo}}会员</div>
    <div>{{memberInfo}}</div>
    <ul>
      <li @click="cors">
        免费课程
      </li>
      <li @click="cors">
        vip课程
      </li>
      <li @click="cors">
        高级VIP课程
      </li>
    </ul>
    <button>分享课程</button>
    <button @click="vip">开通会员</button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DemoIndex',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['memberInfo'])
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {

    },
    vip () {
      this.$router.push({
        path: '/userInfo'
      })
    },
    cors () {
      this.$router.push({
        path: 'cors'
      })
    }
  }
}
</script>