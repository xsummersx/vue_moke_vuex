<template>
  <div>
    <a>{{this.$store.state.count}}</a>
    <a>{{counted}}</a>
    <button @click="add">增加</button>
  </div>

</template>
<script>
export default {
  name: 'testVuex',
  data () {
    return {

    }
  },
  computed: {
    counted () {
      return this.$store.state.count
    }
  },
  methods: {
    add () {
      this.$store.commit('add');
    }
  }
}
</script>