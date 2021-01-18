<template>
  <div class="contact-form">
    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">
    <div class="contact-form-info">
      <div class="contact-name">
        <input type="text" name="name" id="name" required="" placeholder="Name">
      </div>
      <div class="contact-mail">
        <input type="text" name="email" id="email" required="" placeholder="Email address">
      </div>
    </div>
    <div class="contact-form-question">
      <textarea name="message" id="message" required="" placeholder="Message"></textarea>
    </div>
    <div class="contact-form-button">
      <button type="submit" class="btn-black">Submit<span>→</span></button>
    </div>
  </div>
</template>

<style lang="scss">
  .contact-form{
    display:grid;
    grid-template-rows: 10vh 25vh 10vh;
    padding: 15vh;
  
  .contact-form-info{
    display:grid;
    grid-template-columns: 50% 50%;
    .contact-name input{
      font-family: 'Quicksand', sans-serif;
      background: radial-gradient(ellipse at bottom, #1b27355e 0%, #090a0f73 100%);
      color:azure;
      text-align: center;       
      width:75%; 
      height:50%;
      margin:2.5vh 25% 2.5vh 25%;
      cursor:pointer;
      border:0;
    }
    .contact-mail input{
      font-family: 'Quicksand', sans-serif;
      background: radial-gradient(ellipse at bottom, #1b27355e 0%, #090a0f73 100%);
      color:azure;
      text-align: center;
      width:75%; 
      height:50%;
      margin:2.5vh 25% 2.5vh 0;
      cursor:pointer;
      border:0;
    }
}
  .contact-form-question textarea{
    font-family: 'Quicksand', sans-serif;
    background: radial-gradient(ellipse at bottom, #1b27355e 0%, #090a0f73 100%);
    color:azure;
    text-align: center; 
    width:75%; 
    height:100%;
    margin:0 12.5% 0 12.5%;
    cursor:pointer;
    border:0;
    }
  .contact-form-button .btn-black{
    margin:2.5vh 12.5% 0 12.5%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    color: azure;
    border:0;
    padding: 20px;
  }
  }
</style>