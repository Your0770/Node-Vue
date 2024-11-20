<!-- views/CustomerInfo.vue -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-6">
            아이디
          </div>
          <div class="col-6">
            {{ customer.id }}
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            이름
          </div>
          <div class="col-6">
            {{ customer.name }}
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            이메일
          </div>
          <div class="col-6">
            {{ customer.email }}
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            연락처
          </div>
          <div class="col-6">
            {{ customer.phone }}
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            주소
          </div>
          <div class="col-6">
            {{ customer.address }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <button type="button" @click="goToUpdateForm">수정</button>
      </div>
      <div class="col-4">
        <button type="button" v-on:click="goToCustomerList">목록</button>
      </div>
      <div class="col-4">
        <button type="button" @click="delInfo">삭제</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';



export default{
  data(){
    return{
      customer : {}
    }
  },
  created(){
    let selected = this.$route.query.customerId;
    this.getCustomerInfo(selected);
  },
  methods : {
    async getCustomerInfo(id){
      let result = await axios.get(`/api/customers/${id}`)
                        .catch(err => console.log(err));
      this.customer = result.data;
    },
    goToCustomerList(){
      // 리다이렉트와 같은 효과
      this.$router.push({ path : '/customerList'});
    },
    async delInfo(){
      let result = await axios.delete(`/api/customers/${this.customer.id}`)
                              .catch(err => console.log(err));
      let sqlRes = result.data;
      if(sqlRes.affectedRows >= 1 && sqlRes.changedRows == 0){
        alert('정상적으로 삭제되었습니다.')
        this.goToCustomerList();
      } else {
        alert('삭제되지 않았습니다.')
      }
    },
    goToUpdateForm(){
      this.$router.push({ name : 'customerUpdate', params : { customerId : this.customer.id } })
    },
  }
}

</script>