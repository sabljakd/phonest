<template>

<div class="grid">
  <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="content">
    <div class="logo-grid">
      <img src="../assets/logo.png" width="64" height="64">
    </div>
    <div class="links-grid">
      <router-link to="/">Početna</router-link>
      <router-link to="/phones">Uređaji</router-link>
      <router-link to="/about">O nama</router-link>  
      <router-link to="/help">Pomoć</router-link>
    </div>
    <div class="intro-grid">
      <div class="intro-grid-left"></div>
      <div class="intro-grid-right"></div>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper{
  width: 100%;
}

.grid{
  	background-color: #9c7597;
		background-image: url("../assets/overlay.png"), -moz-linear-gradient(45deg, #2c3e50 15%, #3498db 85%);
		background-image: url("../assets/overlay.png"), -webkit-linear-gradient(45deg, #2c3e50 15%, #3498db 85%);
		background-image: url("../assets/overlay.png"), -ms-linear-gradient(45deg, #2c3e50 15%, #3498db 85%);
		background-image: url("../assets/overlay.png"), linear-gradient(45deg, #2c3e50 15%, #3498db 85%);
    display: grid;
    grid-template-rows: 100%;
    font-family: 'Quicksand', sans-serif;
  .content{
    display: grid;
    grid-template-rows: 20vh 10vh 50vh;
    margin: 10vh 20vh 10vh 20vh;
    .logo-grid{
      margin: auto;
    }
    .links-grid{
        border-radius: 25px;
        background:#005C90;
        background-repeat: repeat;
        padding: 1px 1px 1px 1px;
        font-family: 'Quicksand', sans-serif;
        margin:auto;
      a{
        display: inline-block;
        text-align: center;
        text-decoration: none;
        color: rgb(255, 255, 255);
        padding: 20px;
        font-size: 100%;
      }
    }
    .intro-grid{
      display: grid;
      grid-template-columns: 50% 50%;
      border-radius: 25px;
      background: #005C90;
    }
  }
}

// Uređaji 992px ili manji //
@media only screen and (max-width:992px){
  .wrapper{
    width:892px;
  }
  .grid{
  display: grid;
  font-family: 'Quicksand', sans-serif;
  .content{
    display: grid;
    grid-template-rows: 10vh 10vh;
    margin: 5vh 10vh 50vh 10vh;
  }
}
}

// Uređaji 400px ili manji //
@media only screen and (max-width: 600px){
  .wrapper{
    width:600px;
  }
  .grid{
  display: grid;
  font-family: 'Quicksand', sans-serif;
  .content{
    display: grid;
    grid-template-rows: 10vh 10vh;
    margin: 0.5vh 0.5vh 0.5vh 0.5vh;
    .links-grid{
      a{
        padding:10px;
      }
    }
  }
}
}





</style>
