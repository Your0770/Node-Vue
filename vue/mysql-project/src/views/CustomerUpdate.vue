<!-- views/CustomerUpdate.vue -->
<template>
  <div class="container">
    <div class="row">
      <label>아이디</label>
      <input type="text" v-model="info.id" readonly>
    </div>
    <div class="row">
      <label>이름</label>
      <input type="text" v-model="info.name">
    </div>
    <div class="row">
      <label>이메일</label>
      <input type="email" v-model="info.email">      
    </div>
    <div class="row">
      <label>연락처</label>
      <input type="tel" v-model="info.phone">      
    </div>
    <div class="row">
      <label>주소</label>
      <input type="text" v-model="info.address">      
    </div>
    <br>
    <div class="row">
      <button type="button" class="btn btn-secondary" v-on:click="updateCustomer">수정</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return{
      info : {
        id : null,
        name : null,
        email : null,
        phone : null,
        address : null
      }
    }
  },
  created(){
    // 1) 사용자가 선택한 대상의 원래 데이터 조회 => 단건조회
    let selected = this.$route.params.customerId;
    this.getCustomerInfo(selected);
  },
  methods : {
    async getCustomerInfo(id){
      let result = await axios.get(`/api/customers/${id}`)
                        .catch(err => console.log(err));
      this.info = result.data;
    },
    // 2) 사용자가 버튼을 클릭했을 때 서버에 전송 => like 등록
    async updateCustomer(){
      let upInfo = {
        name : this.info.name,
        email : this.info.email,
        phone : this.info.phone,
        address : this.info.address
      };
      console.log(upInfo);
      // ▽서버 내부에서 배열로 처리하기 때문에 파람이랑 객체만 보내면 됨
      let result = await axios.put(`/api/customers/${this.info.id}`, upInfo)  
                              .catch(err => console.log(err));
            let sqlRes = result.data;
      if(sqlRes.affectedRows == 1 && sqlRes.changedRows == 1){
        alert('수정이 완료되었습니다.');
        this.$router.push({ path : '/customerInfo', query : { customerId : this.info.id } });
      } else {
        alert('수정되지 않았습니다.');
      }
    }
  },

}
</script>