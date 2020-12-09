<template>
  <div>
      <Search/>
      <nav class="nav">
        <div class="options">
         <router-link to="/users/parametres">
          Параметры
        </router-link> |
        <router-link to="/users/questions">
          Вопросы
        </router-link> |
        <router-link to="/users/logic">
          Логика
        </router-link> |
        <router-link to="/users/terms">
          Условия
        </router-link> |
        <router-link to="/users/respondents">
          Респоденты
        </router-link>
        </div>
      </nav> 
  </div>
</template>

<script>
 import Search from '@/components/Search.vue'

export default {
    components:{
    Search,
  
}}
</script>

<style scoped>
.nav {
  margin: 50px 0 0 300px;
  font-size: 1.5rem;
}
</style>

