<!-- views/UserUpdate.vue -->
<template>
  <div class="container">
    <table class="table">
      <tr>
        <th class="text-right">NO</th>
        <td class="text-center">{{ userInfo.user_no }}</td>
      </tr>
      <tr>
        <th class="text-right">아이디</th>
        <td class="text-center"><input type="text" v-model="userInfo.user_id"></td>
      </tr>
      <tr>
        <th class="text-right">비밀번호</th>
        <td class="text-center"><input type="password" v-model="userInfo.user_pwd"></td>
      </tr>
      <tr>
        <th class="text-right">이름</th>
        <td class="text-center"><input type="text" v-model="userInfo.user_name"></td>
      </tr>
      <tr>
        <th class="text-right">성별</th>
        <td class="text-center">
          <input type="radio" value="M" v-model="userInfo.user_gender">남
          <input type="radio" value="F" v-model="userInfo.user_gender">여</td>
      </tr>
      <tr>
        <th class="text-right">나이</th>
        <td class="text-center"><input type="number" v-model="userInfo.user_age"></td>
      </tr>
      <tr>
        <th class="text-right">가입일자</th>
        <td class="text-center"><input type="date" v-model="userInfo.join_date"></td>
      </tr>
    </table>
    <div>
      <button class="btn btn-info" type="button" v-on:click="updateUserInfo">수정</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default{
    data(){
      return{
        userInfo : {
          user_no : null,
          user_id : "",
          user_pwd : "",
          user_name : null,
          user_gender : null,
          user_age : 0,
          join_date : null,
        }
      }
    },
    created(){
      let selected = this.$route.params.user_no;
      this.getUserInfo(selected); 
    },
    computed : {
      dateString(){
        return this.dateFormat( this.userInfo.join_date, 'yyyy-MM-dd' );
      }
    },
    methods : {
      async getUserInfo(userNo){
        let result = await axios.get(`/api/users/${userNo}`)
                                .catch(err => console.log(err));
        this.userInfo = result.data;
        this.userInfo.join_date = this.dateFormat( this.userInfo.join_date, 'yyyy-MM-dd' );
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
      async updateUserInfo(){
        // 전제조건 : 모든 데이터가 존재
        // 1) 보낼 데이터 정리
        let updateInfo = {
                          user_id : this.userInfo.user_id,
                          user_name : this.userInfo.user_name,
                          user_pwd : this.userInfo.user_pwd,
                          user_gender : this.userInfo.user_gender,
                          user_age : this.userInfo.user_age,
                          join_date : this.userInfo.join_date
        };
        // 2) 서버에 통신
        let result = await axios.put(`/api/users/${this.userInfo.user_no}`, updateInfo)
                                .catch(err => console.log(err));
        if(result.data.result){
          alert(result.data.target.user_no + '번이 정상적으로 수정되었습니다.');
          this.$router.push({ name : 'userInfo', query : { no : this.userInfo.user_no } });
        } else {
          alert('수정사항이 없거나 수정되지 않았습니다.');
        }
        
      }
    }
  }
</script>