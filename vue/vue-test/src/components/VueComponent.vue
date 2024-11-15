<!-- VueComponent.vue -->

<!-- html -->
<template>
  <!-- 주의! 하나의 최상위 태그만 등록 -->
  <div>
    <label><input type="text" v-model="msg"></label>
    <p>{{ msg }}</p>
  </div>

</template>

<!-- js -->
<script>
  export default {    //(= module.export )내보내기
    name : 'VueComponent',
    data(){           // (= data : function(){   } ) method
      return {
        msg : '2024-11-15'
      }
    }
  }

</script>

<!-- css -->
<style>
p {
  background-color: blanchedalmond;
}

</style>