<template>
  <div>
    <h2>雅思备考</h2>
    <ul>
      <li>点击</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.axios.get('http://172.16.41.235:20702/api/KSFX/W_GetAreaAndSectionList').then((res) => {
        console.log(res.data);
      })
    }
  }
}
</script>