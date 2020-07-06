<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: 'about',
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.axios.get('/data.json').then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
