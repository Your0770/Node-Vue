<!-- views/BoardList.vue -->

<template>
<div class="container">
  <table class="table">
    <caption>Total : {{ count }}</caption>
    <thead>
      <tr>
        <th>No.</th>
        <th>제목</th>
        <th>작성자</th>
        <th>작성일자</th>
        <th>댓글 수</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="info in boardList" :key="info.no" v-on:click="goToBoardInfo(info.no)">
        <td>{{ info.no }}</td>
        <td>{{ info.title }}</td>
        <td>{{ info.writer }}</td>
        <td>{{ dateFormat(info.created_date, 'yyyy-MM-dd') }}</td>
        <td>{{ commentSu }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return{
      boardList : [],
      commentList : [],
      
    }
  },
  computed : {
    count() {
      return this.boardList.length;
    },
    commentSu(){
      return this.commentList.length;
    }
  },
  created(){
    this.getBoardList();
  },
  methods :{
    async getBoardList(){
      let result = await axios.get('/api/boards')
                              .catch(err => console.log(err));
      this.boardList = result.data;
    },
    async getCommentList(boardNo){
      let result = await axios.get(`/api/boards/${boardNo}`)
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
    goToBoardInfo(boardNo){
      this.$router.push({ name : 'boardInfo', query : { no : boardNo } });
    }
  }
}
</script>