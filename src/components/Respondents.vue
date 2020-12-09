<template>
    <div>
        <Search/>
        <div class="respondents">
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

        <div class="poll">
          
            <p class="add-poll">Добавить опрос</p>
            <section> 
               <Condition/>
            </section>
        </div>
        </div>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Condition from '@/components/Condition.vue';

export default {
    components:{
    Search,
  Condition,

  
}}
</script>

<style scoped>
.respondents {
  margin: 50px 0 0 300px;
  font-size: 1.5rem;
}
.poll{

  width: 70%;
box-shadow: 0 0 5px 5px rgba(0, 0,0, 0.2);
margin: 30px 0 0 0px;

}
.add-poll{
  padding: 1% 0 3% 5%;
}

</style>