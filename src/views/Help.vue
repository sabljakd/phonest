<template>
<div class="help">
  <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="help-content">

    <div class="help-links">
      <router-link to="/">Početna</router-link> 
      <router-link to="/phones">Uređaji</router-link>
      <router-link to="/help">Pomoć</router-link>
    </div>

    <div class="help-form">
      <form id="contact-form" method="post" action="">
        <input name="name" type="text" class="form-control" placeholder="Vaše Ime" required>
        <br>
        <input name="email" type="email" class="form-control" placeholder="Vaš Email" required>
        <br>
        <textarea name="message" class="form-control" placeholder="Poruka" row="4" required></textarea>
        <br>
        <input type="submit" class="form-control-submit" value="POŠALJI PORUKU">
      </form>
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

.help{
  background-color: #9c7597;
	background-image: url("../assets/overlay.png"), -moz-linear-gradient(45deg, #2c3e50 15%, #3498db 85%);
	background-image: url("../assets/overlay.png"), -webkit-linear-gradient(45deg, #2c3e50 15%, #3498db 85%);
	background-image: url("../assets/overlay.png"), -ms-linear-gradient(45deg, #2c3e50 15%, #3498db 85%);
	background-image: url("../assets/overlay.png"), linear-gradient(45deg, #2c3e50 15%, #3498db 85%);
  display: grid;
  grid-template-rows:1fr;
  grid-template-columns: 1fr;
  font-family: 'Quicksand', sans-serif;
  .help-content{
    display: grid;
    grid-template-rows: 1fr 95vh;
    .help-links{
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
      }
    }
    #contact-form{
      text-align: center;
      background-color: white;
      margin:20vh 10vh 0 10vh;
      padding-bottom: 2vh;
      padding-top: 2vh;
      border-radius: 20px;
      .form-control{
        font-family: 'Quicksand', sans-serif;
        margin: 10px;
        background: transparent;
        border: none;
        width: 90%;
      }
      textarea[name=message]{
        resize: vertical;
      }
      input[type=submit]{
        border: none;
        width:40%;
        padding:20px;
        background-color:#3498db;
        border-radius: 20px;
        font-family: 'Quicksand', sans-serif;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
      }
      input[type=submit]:hover{
        background-color: rgb(37, 41, 41);
        transition-duration: 1s;
      }
      input[value]{
        color:#272343;
      }
      input[value]:hover{
        color: white;
      }
    }
  }
}


// Uređaji 992px ili manji //
@media only screen and (max-width:992px){
  .wrapper{
    width:992px;
  }
  .help{
    display: grid;
    width: 100%;
  }
}

// Uređaji 600px ili manji //
@media only screen and (max-width: 600px){
  .wrapper{
    width:600px;
  }
  .help{
    display: grid;
    .help-content{
      #contact-form{
        margin-left: 1vh;
        margin-right: 1vh;
      }
    }
  }
}





</style>
