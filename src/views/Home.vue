<template>
  <div class="home">
    <Search/>
  <div class="questions">
    <p>Опрос</p>
      <ul>
          <li>Вопрос</li>
          <li>Вопрос</li>
          <li>Вопрос</li>
          <li>Вопрос</li>
          <li>Вопрос</li>
      </ul>
    </div>
  </div>
</template>

<script>




import Search from '@/components/Search.vue'

export default {
  name: 'Home',
    components:{
    Search
  
}}

</script>



<style scoped>
.questions {
  margin: 50px 0 0 300px;
  font-size: 1.5rem;
}
</style>
