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
      this.axios.get('http://aitt.lancooedu.com:8089/znhTJXX/api/ZNBK/W_ZNBK_GetPaperSet?Key=zRAzMTIwMQ==&UserID=G031201&GlobalGrade=K10&CourseClassID=8B834901-9C44-47C9-9449-3A16F13B5FB2&SchoolID=S4-1875774489-4655&SubjectID=C&Layer=0&isLock=false').then((res) => {
        console.log(res.data);
      })

    }
  }
}
</script>