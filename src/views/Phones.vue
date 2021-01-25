<template>

<div class="phones-grid">
  <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="phones-content">
    <div class="phones-logo-grid">
      <img src="../assets/logo.png" width="64" height="64">
      <h1>pHonest</h1>
      <p>Pronađi uređaj pomoću specifikacija u samo par klikova</p>
    </div>
    <div class="phones-links-grid">
      <router-link to="/">Početna</router-link> 
      <router-link to="/phones">Uređaji</router-link>
      <router-link to="/about">O nama</router-link>  
      <router-link to="/help">Pomoć</router-link>
    </div>
    <div class="phones-intro-grid-top">
      <div class="phones"></div>
      <div class="phones"></div>
      <div class="phones"></div>
      <div class="phones"></div>
      <div class="phones"></div>
      <div class="phones"></div>
      <div class="phones"></div>
      <div class="phones"></div>
      <div class="phones"></div>
      <div class="phones"></div>
      <div class="phones"></div>
      <div class="phones"></div>
      <div class="phones"></div>
      <div class="phones"></div>
      <div class="phones"></div>
    </div>
  </div>
  <div class="phones-footer"></div>
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

.phones-grid{
  	background-color: #9c7597;
		background-image: url("../assets/overlay.png"), -moz-linear-gradient(45deg, #2c3e50 15%, #3498db 85%);
		background-image: url("../assets/overlay.png"), -webkit-linear-gradient(45deg, #2c3e50 15%, #3498db 85%);
		background-image: url("../assets/overlay.png"), -ms-linear-gradient(45deg, #2c3e50 15%, #3498db 85%);
		background-image: url("../assets/overlay.png"), linear-gradient(45deg, #2c3e50 15%, #3498db 85%);
    display: grid;
    grid-template-rows: 200vh;
    font-family: 'Quicksand', sans-serif;
  .phones-content{
    display: grid;
    grid-template-rows: 50vh 10vh 150vh;
    margin: 10vh 20vh 10vh 20vh;
    .phones-logo-grid{
      margin: auto;
      width: 100%;
      text-align: center;
      h1{
        color:#ffffff;
        font-size: 50px;
      }
      p{
        color:#ffffff;
        font-size: 25px;
      }
    }
    .phones-links-grid{
        border-radius: 10px;
        background:#ffffff;
        background-repeat: repeat;
        padding: 1px 1px 1px 1px;
        font-family: 'Quicksand', sans-serif;
        margin:auto;
        width: 100%;
        text-align: center;
      a{
        display: inline-block;
        text-align: center;
        text-decoration: none;
        color: #272343;
        padding: 20px;
        font-size: 100%;
        font-weight: 500;
      }
      a:hover{
        color: #bae8e8;
        border-radius: 10px;
      }
    }
    .phones-intro-grid-top{
      display: grid;
      grid-template-columns: 20% 20% 20% 20% 20%;
      grid-template-rows: 33.33% 33.33% 33.33%;
      border-radius: 10px;
      background: #ffffff;
      .phones{
        margin:5px;
        background:#e3f6f5;
      }
    }
  }
  .phones-footer{
    display: grid;
    grid-template-rows: 50vh;
    grid-template-columns: 50% 50%;
    margin: 30vh 20vh 0 20vh;
    background: #272343;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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
    margin: 5vh 10vh 50vh 10vh;
  }
  .footer{
    margin: 30vh 10vh 0 10vh;
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
    margin: 0.5vh 0.5vh 0.5vh 0.5vh;
    .links-grid{
      a{
        padding:10px;
      }
    }
  }
  .footer{
    margin: 30vh 0.5vh 0 0.5vh;
  }
}
}





</style>
