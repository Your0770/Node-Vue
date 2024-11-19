<!-- views/ComputedWatch.vue -->

<template>
<div>
  <input type="number" v-model="price"> 원
  <br>
  <input type="number" v-model="count"> 개
  <p>과세 금액  : {{ amount }}</p>
  <p>부가세 10% : {{ tax }}</p>
  <p>결제 금액  : {{ total }}</p>
</div>

</template>

<script>
/*
const computed = {
  data(){
    return {
      price : 0,
      count : 0
    }
  },
  computed : {    //리턴값을 가짐
    amount(){
      return this.price * this.count;
    },
    tax(){
      return this.amount * 0.1;
    },
    total(){
      return this.amount + this.tax;
    }
  }
};
*/

const watch = {
  data(){
    return {
      price : 0,
      count : 0,
      amount : '',
      tax : '',
      total : ''
    }
  },
  watch : {   //리턴값을 가지지 않는 동작 함수
    price(){
      this.amount = this.price * this.count;
    },
    count(){
      this.amount = this.price * this.count;
    },
    amount(){
      this.tax = this.amount * 0.1;
      this.total = this.amount + this.tax;
    }
  }
};

// export default computed;
export default watch;

</script>

<style>

</style>