<template>
    <div>
        <Search/>
        <div class="logic">
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

        <p>"Какая-то логика"</p>
        </div>
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
.logic {
  margin: 50px 0 0 300px;
  font-size: 1.5rem;
}
</style>