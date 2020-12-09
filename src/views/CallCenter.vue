<template>
  <div>
    <Search/>
      <div class="call-center">
        <p>Наши контакты:</p>
        <p>> Телефон: 8 9** *** ** **</p>
        <p>> Почта: mail@mail.com</p>
      </div>
  </div>
</template>

<script>
 import Search from '@/components/Search.vue'

export default {
    components:{
    Search
  
}}
</script>

<style scoped>
.call-center {
  margin: 50px 0 0 300px;
  font-size: 1.5rem;
}
</style>