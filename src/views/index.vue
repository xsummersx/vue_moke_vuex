<template>
  <div>
    <ul>
      <li>
        免费课程
      </li>
      <li>
        vip课程
      </li>
      <li>
        高级VIP课程
      </li>
    </ul>
    <button>分享课程</button>
    {{this.$store.state.userInfo}}
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {

    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {

    }
  }
}
</script>