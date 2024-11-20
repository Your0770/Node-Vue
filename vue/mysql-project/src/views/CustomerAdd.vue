<!-- views/CustomerAdd.vue -->

<template>
  <div class="container">
    <div class="row">
      <label>이름</label>
      <input type="text" v-model.trim="info.name">
      <div class="form-text" :class="{'warning' : nameOK}">이름이 입력되지 않았습니다.</div>
      <div class="form-text" :class="{'warning' : !nameOK}">이름이 입력되었습니다.</div>
    </div>
    <div class="row">
      <label>이메일</label>
      <input type="email" v-model="info.email">      
    </div>
    <div class="row">
      <label>연락처</label>
      <input type="tel" v-model.trim="info.phone">      
      <div class="form-text" :class="{'warning' : phoneOK}">연락처가 입력되지 않았습니다.</div>
      <div class="form-text" :class="{'warning' : !phoneOK}">연락처가 입력되었습니다.</div>
    </div>
    <div class="row">
      <label>주소</label>
      <input type="text" v-model="info.address">      
    </div>
    <br>
    <div class="row">
      <button type="button" class="btn btn-secondary" v-on:click="addCustomer" :disabled="!(nameOK&&phoneOK)">등록</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return{
      info : {
        name : null,
        email : null,
        phone : null,
        address : null
      }
    }
  },
  computed : {
    nameOK(){
      return this.info.name != null && this.info.name != ''; 
    },
    phoneOK(){
      return this.info.phone != null && this.info.phone != '';
    }
  },
  methods : {
    async addCustomer(){
      if(!this.info.name || !this.info.phone){
        alert('마! 필수값 확씨 마!!!!');
      } else {
        let result = await axios.post('/api/customers', this.info)
        .catch(err => console.log(err));
        let sqlRes = result.data;
        let customerId = sqlRes.insertId;   //Mysql의 AUTO_INCREMENT 사용시
        if(customerId > 0){
          alert('정상적으로 등록되었습니다.');
          this.$router.push({ path : '/customerInfo', query : { customerId : customerId } });
        } else {
          alert('정상적으로 등록되지 않았습니다.');
        }
      }
    },
    async fetchVer(){
      let result = await fetch('api/customers', {
                                method : 'post',
                                headers : {
                                  'content-type' : 'application/json'
                                },
                                body : JSON.stringify(this.info)
                                })
                                .then(res => res.json())      // parse 작업 필수
                                .catch(err => console.log(err));
      console.log(result);
    }
  }
}
</script>

<style>
.warning {
  display : none;
}
</style>