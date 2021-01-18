
<template>

  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">
    <div id="nav">
      <div class="logo">
        <img src="./assets/logo.png" width="64" height="64">
      </div>
      <div class="links">
      <router-link to="/">Početna</router-link>
      <router-link to="/phones">Uređaji</router-link>
      <router-link to="/about">O nama</router-link>  
      <router-link to="/help">Pomoć</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#nav{
  font-family: 'Quicksand', sans-serif;
  overflow: hidden;
  height: 8vh;
  display:flex;
  justify-content: space-between;
  align-items: center;

  a{
  display: inline-block;
  color: #131315;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background: linear-gradient(to right, midnightblue, midnightblue 50%, royalblue 50%);
  color: royalblue;
  overflow: hidden;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  }
  a:hover {
  background-position: 0 100%;
}
}




.logo{
  padding-left: 15px;
  padding-top: 5px;
}




</style>
