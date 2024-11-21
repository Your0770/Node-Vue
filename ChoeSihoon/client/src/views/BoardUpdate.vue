<template>
  <div class="container">
    <div class="row">
      <label class="text-left">No.</label>
      <br>
      <input type="text" v-model="info.no" class="row" readonly>
    </div>
    <div class="row">
      <label class="text-left">제목</label>
      <br>
      <input type="text" v-model="info.title" class="row">
    </div>
    <div class="row">
      <label class="text-left">작성자</label>
      <br>
      <input type="text" v-model="info.writer" class="row">
    </div>
    <div class="row">
      <label class="text-left">내용</label>
      <br>
      <textarea class="row" v-model="info.content"></textarea>
    </div>
    <div class="row">
      <label class="text-left">작성일자</label>
      <br>
      <input type="date" v-model="info.created_date" class="row">
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-warning" v-on:click="goToBoardInfo()">저장</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  data(){
    return{
      info : {
        no : null,
        title : null,
        writer : null,
        content : null,
        created_date : null
      }
    }
  },
  created(){
    let selected = this.$route.params.no;
    this.getBoardInfo(selected);
  },
  methods : {
    async goToBoardInfo(boardNo){
      let newInfo = {
        title : this.info.title,
        writer : this.info.writer,
        content : this.info.content,
        created_date : this.info.created_date
      }
      let result = await axios.put(`/api/boards/${this.info.no}`, newInfo)
                              .catch(err => console.log(err));
      if(result.data.result){
        alert('등록 성공');
        this.$router.push({ name : 'boardInfo', query : { no : boardNo } });
      } else {
        alert('등록 실패');
      }
    },
    async getBoardInfo(boardNo){
      let result = await axios.get(`/api/boards/${boardNo}`)
                              .catch(err => console.log(err));
      this.info = result.data;
    }
  }

}
</script>