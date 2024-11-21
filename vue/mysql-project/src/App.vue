<template>
  <div>
    <!-- header component -->
    <DefaultHeader/>
    <!-- content component -->
    <router-view/>
    <!-- footer component -->
    <DefaultFooter />
  </div>
</template>

<script>
import DefaultHeader from './layouts/DefaultHeader.vue';
import DefaultFooter from './layouts/DefaultFooter.vue';

export default{
  components: {
    DefaultHeader,
    DefaultFooter
  }
}

</script>