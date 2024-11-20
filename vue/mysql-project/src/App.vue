<template>
  <div>
    <!-- header component -->
    <DefaultHeader/>
    <!-- content component -->
    <router-view/>
    <!-- footer component -->

  </div>
</template>

<script>
import DefaultHeader from './layouts/DefaultHeader.vue';
export default{
  components: {
    DefaultHeader
  }
}

</script>