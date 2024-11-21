<template>
  <div class="container">
    <div class="row">
      <div class="col-1">번호</div>
      <div class="col-1">{{ boardInfo.no }}</div>
      <div class="col-2">작성일</div>
      <div class="col-3">{{ dateFormat( boardInfo.created_date, 'yyyy-MM-dd') }}</div>
      <div class="col-2">이름</div>
      <div class="col-3">{{ boardInfo.writer }}</div>
    </div>
    <div class="row">
      <div class="col-3">제목</div>
      <div class="col-9">{{ boardInfo.title }}</div>
    </div>
    <div class="row">{{ boardInfo.content }}</div>
    <br>
    <div class="text-center">
      <button class="btn btn-info" type="button" @click="goToUpdateBoard(boardInfo.no)">수정</button>
    </div>
  </div>
  <CommentList ref="child" />
</template>

<script>
import axios from 'axios';
import CommentList from '../components/CommentList.vue';

export default{
  data(){
    return{
      boardInfo : {
        no : null,
        title : null,
        writer : null,
        content : null,
        created_date : null,
        updated_date : null,
      },
      selected :''
      
    }
  },
  components : {
    CommentList
  },
  created(){
    this.selected = this.$route.query.no;
    this.getBoardInfo(this.selected);
  },
  mounted(){
    this.$refs.child.boardNo = this.selected;
  },
  methods : {
    async getBoardInfo(boardNo){
      let result = await axios.get(`/api/boards/${boardNo}`)
                              .catch(err => console.log(err));
      this.boardInfo = result.data;
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
    goToUpdateBoard(){
      this.$router.push({ name : 'boardUpdate', params : { no : this.boardInfo.no }})
    }
  },
  
}

</script>