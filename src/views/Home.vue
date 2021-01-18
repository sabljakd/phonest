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
        <div class="one">
        <a>ODLIČNA USLUGA</a><br>
        </div>
        <div class="two">
        <h2>Ne znaš koji mobitel odabrati? Mi smo tu da ti pomognemo.</h2>
        </div>
        <div class="three">
        <a>Jednostavno je, u par klikova odaberi željene specifikacije, klikni potvrdi i <b>Voilà</b> pronašao si željene uređaje!</a>
        </div>
        <div class="four">
        
        </div>
  </div>
  </div>

  <div class="middle">
    <div class="left"><a>ZNAČAJKE</a></div>
  </div>

  <div class="bottom">
    <div class="one">
      <div class="left">
        <h3>PRAĆENJE TRENDOVA</h3>
        <a>Proces kupovanja može se podijeliti u više faza, 
        od planiranja kupnje preko odabira trgovine, odabira proizvoda, plaćanja, 
        do korištenja proizvoda i evaluacije iskustva i zadovoljstva proizvodom, 
        a počinje puno prije odlaska u trgovinu.</a>

      </div>
      <div class="right">
      </div>
      </div>
    <div class="two">      
      <div class="left"></div>
      <div class="right"><a>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Rem placeat vitae repellendus vero dolorem, modi laborum quae explicabo 
      architecto dicta necessitatibus in sit quos accusamus,
       quia vel, dolor consequuntur? Velit!</a></div>
      </div>
    <div class="three">
      <div class="left"><a>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Rem placeat vitae repellendus vero dolorem, modi laborum quae explicabo 
      architecto dicta necessitatibus in sit quos accusamus,
       quia vel, dolor consequuntur? Velit!</a></div>
      <div class="right"></div>
      </div>
    <div class="four">
      <div class="left"></div>
      <div class="right"><a>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
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
.left{
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
      background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxMzUpICI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0iIzJhNDM2NSI+PC9yZWN0PiA8cGF0aCBmaWxsPSIjMWEyMDJjIiBkPSJNLTEgMjAgaDIgdjEgaC0yIHpNMzkgMjAgaDIgdjEgaC0yIHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZWNjOTRiIiBkPSJNMTkuNSAyMCBoMSB2MSBoLTEgek01OS41IDIwIGgxIHYxIGgtMSB6Ij48L3BhdGg+PC9wYXR0ZXJuPiAgPC9kZWZzPiA8cmVjdCBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIj48L3JlY3Q+PC9zdmc+");

  
    .one{
      background-color:#fbfbfbad;
      border-radius: 25px;
      margin: 20px 500px 20px 500px;
      display: grid;
      grid-template-columns: 50% 50%;
      .right{
      background-image: url("../assets/info.png");
      background-repeat: no-repeat;
      background-position: center;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      background-size: cover;
      }
      .left{
      padding: 20px;
      text-align: center;
      h3{
        margin-bottom: 20px;
        color:#232A34;
      }
      }
      
    }

    .two{
      background-color:#fbfbfbad;
      border-radius: 25px;
      margin: 20px 500px 20px 500px;
      display: grid;
      grid-template-columns: 50% 50%;
      .left{
      background-image: url("../assets/love.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      }
      .right{
      padding: 20px;
      text-align: center;
      }
    }

    .three {
      background-color:#fbfbfbad;
      border-radius: 25px;
      margin: 20px 500px 20px 500px;
      display: grid;
      grid-template-columns: 50% 50%;
      .right{
      background-image: url("../assets/help.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      }
      .left{
      padding: 20px;
      }
    }

    .four {
      background-color:#fbfbfbad;
      border-radius: 25px;
      margin: 20px 500px 20px 500px;
      display: grid;
      grid-template-columns: 50% 50%;
      .left{
      background-image: url("../assets/chat.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      }
      .right{
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
