<!-- views/CustomerList.vue -->
<template>
  <div class="container">
    <table class="table">
      <caption>Total : {{ count }}</caption>
      <thead>
        <tr>
          <th>No</th>
          <th>아이디</th>
          <th>이름</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="count > 0">
          <tr v-for="(info, idx) in customerList" :key="info.id" v-on:click="goToCustomerInfo(info.id)">
            <td>{{ idx+1 }}</td>
            <td>{{ info.id }}</td>
            <td>{{ info.name }}</td>
            <td>{{ info.phone }}</td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="4">
            현재 데이터가 존재하지 않습니다.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';    //=> AJAX

export default{
  data(){
    return {
      customerList : []
    }
  },
  computed : {
    count(){
      return this.customerList.length;
    }
  },
  created(){
    // 컴포넌트가 초기화할 데이터 호출
    this.getCustomerList();
  },
  methods : {
    async getCustomerList(){
      let result = await axios.get('/api/customers')
                              .catch(err => console.log(err));
      this.customerList = result.data;  // 실제 서버가 응답한 결과값
    },
    goToCustomerInfo(id){
      // this.$router.push({ name : 'customerInfo', params : { customerId : id } });
      this.$router.push({ name : 'customerInfo', query : { customerId : id } });

      // query : { key : value } => ?key=value
      // params
      // 1) route path 속성 : '/target/:uId'
      // 2) params : { uId : value } => /target/value
    }
  }
}

</script>

