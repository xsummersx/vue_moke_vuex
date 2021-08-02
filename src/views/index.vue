<template>
  <div>
    <div>
      <div class="sec-teacher-and-student-paper">
        <div class="text-paper-name">
          {{PaperModel.PaperName}}+（听力原文）
        </div>
        <div class="dv-paper-content">
          <div v-for="(item,typeList) in RecQuesList" style="float: left; width: 100%;margin-bottom: 20px;" :key="item"
            v-show="typeList.TypeNo == 'E' || typeList.TypeNo == 'F' || typeList.TypeNo == 'G' || typeList.TypeNo == 'x' || typeList.TypeNo == 'W' || typeList.TypeNo == 'S'">
            <!-- 听力原文信息 -->
            <div
              v-html="(DelListenQuesText(typeList.QuesAudio.Article,typeList.TypeNo,typeList.GenreID,typeList.ChildList[0].ItemList[0].ItemSortIndex,typeList.ChildList.length) | to_trusted) || '暂无听力原文'"
              style="display: inline-block; margin-left: 5px; font-size: 20px; width: 95%; margin-bottom: 18px;"
              v-hide="(typeList.TypeNo == 'E' && (typeList.GenreID == '3' || typeList.GenreID == '4')) || typeList.TypeNo == 'S' || typeList.TypeNo == 'x' || (typeList.TypeNo == 'W' && typeList.GenreID == '19')">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      PaperModel: '',
      RecQuesList: '',
    }
  },
  mounted () {

    var url = 'http://172.16.41.238:10102/CNTFX/api/CNT/GetStuQuesPackDetail';
    var data = {
      "CourseClassID": this.$route.query.CourseClassID,
      "MainUniqueCode": this.$route.query.MainUniqueCode,
      "PlatForm": this.$route.query.PlatForm,
      "ImportUniqueCode": this.$route.query.ImportUniqueCode,
      "IsSerial": this.$route.query.IsSerial,
      "SpecialFeatureCodes": this.$route.query.SpecialFeatureCodes,
      "CustomizedId": this.$route.query.CustomizedId,
      "Number": this.$route.query.Number,
      "StuID": this.$route.query.StuID,
      "IsReplace": this.$route.query.IsReplace,
      "TypeNo": this.$route.query.TypeNo,
      "PrimitiveQuesID": this.$route.query.PrimitiveQuesID,
      "GenreID": this.$route.query.GenreID,
      "SchoolID": this.$route.query.SchoolID,
      "StageNo": this.$route.query.StageNo
    };
    this.axios.post(url, data).then((res) => {
      console.log(res)
      this.PaperModel = res.data.Data;
      this.RecQuesList = this.PaperModel.RecQuesList.concat(this.PaperModel.PrimitiveQues);
    })
  },
  computed: {

  },
  methods: {
    DelListenQuesText (listenText, typeId, genreId, firstIndex, itemCount) {
      var oldText = listenText;
      firstIndex = Number(firstIndex);
      try {
        if (typeId == 'E' && (genreId == '3' || genreId == '4')) {
          listenText = listenText.replace(/<P>/g, '<p>').replace(/<\/P>/g, '</p>');
          var reg = /<p[^>]*>(?:(?!<\/p>)[\s\S])*<\/p>/gi;
          var strArray = listenText.match(reg);

          for (let index = 0; index < itemCount; index++) {
            var strTemp = strArray[strArray.length - index - 1];
            strTemp = '<p>' + (firstIndex + itemCount - index - 1) + '. ' + strTemp.replace("<p>", "").replace('</p>', "").substring(2, strTemp.replace("<p>", "").replace('</p>', "").length);
            strArray[strArray.length - index - 1] = strTemp;
          }

          listenText = "";

          for (let index = 0; index < strArray.length; index++) {
            listenText += strArray[index];
          }
        }

        return listenText;
      } catch (err) {
        return oldText;
      }
    }
  }
}
</script>
