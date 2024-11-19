<template>
  <div>
    <input type="text" v-model.lazy="selected">
    <p>▽ 컴포넌트</p>
    <component v-bind:is="selected"></component>
  </div>
</template>
<script>
import PropsCom from './components/PropsComponent.vue';

export default{
  name: 'app',
  data() {
    return {
      selected : 'PropsCom'
    }
  },
  components : {
    PropsCom,
  },
  created(){
    console.log('App.vue Create');
  },
  mounted(){
    console.log('App.vue Mounted');
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
