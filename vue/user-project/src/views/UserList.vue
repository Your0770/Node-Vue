<!-- views/UserList.vue -->
<template>
  <div class="container">
    <table class="table">
      <caption>Total : {{ count }}</caption>
      <thead>
        <tr>
          <th>NO</th>
          <th>아이디</th>
          <th>이름</th>
          <th>성별</th>
          <th>나이</th>
          <th>가입날짜</th>   <!-- yyyy-MM-dd -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in userList" :key="info.user_no" @click="goToUserInfo(info.user_no)">
          <td>{{ info.user_no }}</td>
          <td>{{ info.user_id }}</td>
          <td>{{ info.user_pwd }}</td>
          <td>{{ info.user_gender }}</td>
          <td>{{ info.user_age }}</td>
          <td>{{ dateFormat(info.join_date, 'yyyy-MM-dd') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return {
      userList : []
    }
  },
  computed : {
    count() {
      return this.userList.length;
    }
  },
  created(){      // 객체 생성완료 시점 => 초기화 데이터 호출
    this.getUserList();
  },
  methods : {
    async getUserList(){
      let result = await axios.get('/api/users')
                              .catch(err => console.log(err));
      this.userList = result.data;
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
    goToUserInfo(userNo){
      this.$router.push({ name : 'userInfo', query : { no : userNo } });
    }
  }

}
</script>