<template>
  <div class="container">
    <div class="row">댓글목록</div>
    <hr>
    <div class="row">
      <div class="row" v-for="info in commentList" :key="info.no">
        <div class="row">{{ info.content }}</div>
        <div class="col-6">{{ info.writer }}</div>
        <div class="col-6">{{ dateFormat(info.created_date, 'yyyy-MM-dd') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return{
      commentList : [],
      boardNo : ''
    }
  },
watch :{
  boardNo(){
    this.getCommentList(this.boardNo);
  }
},
  methods : {
    async getCommentList(commentNo){
      let result = await axios.get(`/api/comments/${commentNo}`)
                              .catch(err => console.log(err));
      this.commentList = result.data;
    },
    dateFormat(value, format){
      let newDate = value == null ? new Date() : new Date(value);
      let years = newDate.getFullYear();
      let month = ("0" + (newDate.getMonth()+1)).slice(-2);
      let day = ("0" + newDate.getDate()).slice(-2);
      
      let result = format.replace('yyyy', years)
      .replace('MM', month)
      .replace('dd', day);
      return result;
    },
  }
}
</script>