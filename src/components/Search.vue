<template>
  <div class="search">
   
     <p> 
       <input type="text" placeholder="Поиск по системе">
      
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Search'
  }
</script>

<style scoped>
.search{
  margin: 0 0 0 300px;
  padding: 50px 0 0 0;
  
}

input[type="text"] {
   border: 1px solid black;
   border-radius: 5px;
   transition: width 0.4s ease-in-out;
   height: 30px;
}

input[type=text]:focus {
  width: 50%;
}
</style>