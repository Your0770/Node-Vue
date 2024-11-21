<!-- layouts/DefaultHeader.vue -->
<template>
  <div class="header">
    <nav class="nav">
      <router-link to="/" class="nav-link">전체조회</router-link>
      <router-link to="/customerAdd" class="nav-link">등록</router-link>
    </nav>
  </div>
</template>

<style scoped>
.header {
  background-color: black;
  color : white;
  padding: 10px;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;

}
.nav-link {
  color: white;
}
</style>