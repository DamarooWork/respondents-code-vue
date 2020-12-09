<template>
  <div id="app">
    <div id="nav-side" class="sidebar">
      <p class="red-dot"></p>
     <p class="nav-page"> <router-link to="/">Опросы</router-link> </p>
     <p class="nav-page"> <router-link to="/users/parametres">Пользователи</router-link></p>
      <p class="nav-page"><router-link to="/black-list">Черные списки</router-link></p>
      <p class="nav-page"><router-link to="/call-center">Колл-центр</router-link></p>
    </div>
    <router-view/>
    
   
  </div>
</template>

<script>


export default {
    components:{
    
  
}}
</script>

<style>
body{
  margin: 0;
}
.sidebar {
 
  width: 170px;
  box-shadow: 1px 0 0 0 rgba(0,0,0,0.5); 
  position: fixed;
  height: 100%;
  overflow: auto;
}
.nav-page{
  
  margin: 20px;
  height: 100px;
  width: 100px;
  box-shadow: 0   0  3px  3px rgba(0, 0, 0, 0.3);
}
.sidebar .nav-page{
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
.red-dot{
  border-radius: 50px;
  background-color: red;
  width: 50px;
  height: 50px;
  margin: 30px 0 60px 60px;

}

</style>
