<!-- views/UserInfo.vue -->
<template>
  <div class="container">
    <table class="table">
      <tr>
        <th class="text-right">No</th>
        <td class="text-center">{{ userInfo.user_no }}</td>
      </tr>
      <tr>
        <th class="text-right">아이디</th>
        <td class="text-center">{{ userInfo.user_id }}</td>
      </tr>
      <tr>
        <th class="text-right">비밀번호</th>
        <td class="text-center">{{ userInfo.user_pwd }}</td>
      </tr>
      <tr>
        <th class="text-right">이름</th>
        <td class="text-center">{{ userInfo.user_name }}</td>
      </tr>
      <tr>
        <th class="text-right">성별</th>
        <td class="text-center">{{ userInfo.user_gender == null ? null : userGender }}</td>
      </tr>
      <tr>
        <th class="text-right">나이</th>
        <td class="text-center">{{ userInfo.user_age }}</td>
      </tr>
      <tr>
        <th class="text-right">가입일자</th>
        <td class="text-center">{{ joinDate }}</td>
      </tr>
    </table>
    <div>
      <button class="btn btn-info" type="button" @click="goToUpdateUser">수정</button>
      <router-link to="/" class="btn btn-light">목록</router-link>
      <button class="btn btn-warning" type="button" v-on:click="delUser(userInfo.user_no)">삭제</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return{
      userInfo : {}
    }
  },
  computed : {
    userGender(){
      return this.userInfo.user_gender == 'M' ? '남' : '여';
    },
    joinDate(){
      return this.dateFormat(this.userInfo.join_date, 'yyyy-MM-dd');
    }
  },
  created(){
    // 1) 사용자가 선택한 대상을 확인
    let selected = this.$route.query.no;
    // 2) 실제 데이터를 서버에서 가져옴
    this.getUserInfo(selected);
  },
  methods : {
    async getUserInfo(userNo){
    let result = await axios.get(`/api/users/${userNo}`)
                            .catch(err => console.log(err));
    this.userInfo = result.data;
    },
    async delUser(userNo){
      let result = await axios.delete(`/api/users/${userNo}`)
                              .catch(err => console.log(err));
      if(result.data.result == 'success'){
        alert(result.data.user_no + '번 삭제 완료');
        this.$router.push({ path : '/' });
      } else {
        alert('삭제 실패');
      }
    },
    goToUpdateUser(){
      this.$router.push({ name : 'userUpdate', params : { user_no : this.userInfo.user_no}})
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
    }
  }
}
</script>