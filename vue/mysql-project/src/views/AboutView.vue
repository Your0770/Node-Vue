<template>
  <div class="about">
    <template v-for="(info, idx) in list" :key="info.id">
      <p v-if="idx % 2 == 0">{{ info }}</p>
    </template>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      list : []
    }
  },
  created(){
    axios.get('/api/customers')
        .then(result => {
          this.list = result.data;
        })
        .catch(err => console.log(err));
  }
}
</script>