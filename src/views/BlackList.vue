<template>
  <div>
<Search/>
<div class="black-list">
  <p>Заблокированные пользователи: </p>
  <ul>
    <li v-for="user in blackList" :key="user.name">
      {{ user.name}} {{ user.secondname}}
    </li>
  </ul>

</div>
  </div>
</template>

<script>
  import Search from '@/components/Search.vue'

export default {
  name: 'BlackList',
    components:{
    Search
    },
    data() {
      return {
        blackList: [
          { 
            id: 1,
            name:  'Andrew',
            secondname: 'Petrov'
          },
          {
            id: 2,
            name:  'Petr',
            secondname: 'Ivanov'

          }

        ]
      }
    }
}
</script>

<style scoped>
.black-list {
  margin: 50px 0 0 300px;
  font-size: 1.5rem;
}
</style>