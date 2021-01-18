<template>

<div class="column">
  <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="top" style="background-color:#FFF;">
    <div class="img">
     <!-- <img src="../assets/phone.png" alt="Home Photo"> -->
    </div>
      <div class="first">
        <div class="one-first">
        <a>ODLIČNA USLUGA</a><br>
        </div>
        <div class="two-first">
        <h2>Ne znaš koji mobitel odabrati? Mi smo tu da ti pomognemo.</h2>
        </div>
        <div class="three-first">
        <a>Jednostavno je, u par klikova odaberi željene specifikacije, klikni potvrdi i <b>Voilà</b> pronašao si željene uređaje!</a>
        </div>
        
  </div>
  </div>

  <div class="middle">
    <div class="left-middle"><a>ZNAČAJKE</a></div>
  </div>

  <div class="bottom">
    <div class="one-bottom">
      <div class="left-one">
        <h3>PRAĆENJE TRENDOVA</h3>
        <a>Proces kupovanja može se podijeliti u više faza, 
        od planiranja kupnje preko odabira trgovine, odabira proizvoda, plaćanja, 
        do korištenja proizvoda i evaluacije iskustva i zadovoljstva proizvodom, 
        a počinje puno prije odlaska u trgovinu.</a>

      </div>
      <div class="right-one">
      </div>
      </div>
    <div class="two-bottom">      
      <div class="left-two"></div>
      <div class="right-two"><a>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Rem placeat vitae repellendus vero dolorem, modi laborum quae explicabo 
      architecto dicta necessitatibus in sit quos accusamus,
       quia vel, dolor consequuntur? Velit!</a></div>
      </div>
    <div class="three-bottom">
      <div class="left-three"><a>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Rem placeat vitae repellendus vero dolorem, modi laborum quae explicabo 
      architecto dicta necessitatibus in sit quos accusamus,
       quia vel, dolor consequuntur? Velit!</a></div>
      <div class="right-three"></div>
      </div>
    <div class="four-bottom">
      <div class="left-four"></div>
      <div class="right-four"><a>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Rem placeat vitae repellendus vero dolorem, modi laborum quae explicabo 
      architecto dicta necessitatibus in sit quos accusamus,
       quia vel, dolor consequuntur? Velit!</a></div>
      </div>
</div>
</div>


</template>

<script>

</script>

<style lang="scss">

.column{
  
  display: grid;
  grid-template-rows: 72vh 5vh 170vh;
  font-family: 'Quicksand', sans-serif;

.first{
  
  margin: 100px;
  padding-right: 90vh;
  a{
    color:#232A34;
  }
  h2{
    font-size: 50px;
  }
  
}

.middle{
  display: grid;
  grid-template-columns: 50% 50%;
.left-middle{
    margin-left: 100px;
  a{
    color:#232A34;
  }
}
}

.bottom{
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 42vh 40vh 40vh 40vh;
      background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  
    .one-bottom{
      background-color:#fbfbfbad;
      margin: 20px 500px 20px 500px;
      display: grid;
      grid-template-columns: 50% 50%;
      .right-one{
      background-image: url("../assets/info.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      }
      .left-one{
      padding: 20px;
      text-align: center;
      h3{
        margin-bottom: 20px;
        color:#232A34;
      }
      }
      
    }

    .two-bottom{
      background-color:#fbfbfbad;
      margin: 20px 500px 20px 500px;
      display: grid;
      grid-template-columns: 50% 50%;
      .left-two{
      background-image: url("../assets/love.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      }
      .right-two{
      padding: 20px;
      text-align: center;
      }
    }

    .three-bottom{
      background-color:#fbfbfbad;
      margin: 20px 500px 20px 500px;
      display: grid;
      grid-template-columns: 50% 50%;
      .right-three{
      background-image: url("../assets/help.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      }
      .left-three{
      padding: 20px;
      }
    }

    .four-bottom{
      background-color:#fbfbfbad;
      margin: 20px 500px 20px 500px;
      display: grid;
      grid-template-columns: 50% 50%;
      .left-four{
      background-image: url("../assets/chat.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      }
      .right-four{
      padding: 20px;
      }
    }

}
}
body::-webkit-scrollbar {
  width: 0.5em;
}
 
body::-webkit-scrollbar-thumb {
  
  background-color: #00B0FF;
  outline: 1px solid slategrey;
}

@media screen and (max-width: 959px) {
      
      .column{
        width: 100%;
      }
      .first{
        width: 100%;
      }
      .middle{
        width: 50%;
      }
      .bottom{
        width: 100%;
      }
    
      
      
      
     
     

}






  





</style>
