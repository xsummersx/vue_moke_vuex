<template>
  <div>
    <div>{{memberInfo}}</div>
    <ul>
      <li @click="buy('1')">
        开通会员
      </li>
      <li @click="buy('2')">
        开通VIP超级会员
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: "userInfo",
  data () {
    return {
      vip: {
        userStatus: 1,
        vipLevel: 0
      },
      vip1: {
        userStatus: 2,
        vipLevel: 0
      }
    }
  },
  computed: {
    ...mapState(['userName', 'userStatus']),
    ...mapGetters(['memberInfo'])
  },
  methods: {
    buy (e) {
      let vobj = {};
      if (e == 1) {
        vobj = this.vip;
      } else {
        vobj = this.vip1
      }
      this.$store.dispatch('buyVip', vobj).then((res) => {
        alert(res)
      })
    }
  }
}
</script>