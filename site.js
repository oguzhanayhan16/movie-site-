/* movie wrapper section*/
const arrows = document.querySelectorAll(".arrow");
const list= document.querySelectorAll(".movie-list");
 let tiklamaSayisi =0;
  let width = screen.width;
arrows.forEach((arrow, i) => {
    const uzunluk = list[i].querySelectorAll("img").length;
   
  
    arrow.addEventListener("click", () => {
        tiklamaSayisi++;
        window.onresize = function() {
          list[i].style.transform = `translateX(0)`;
          tiklamaSayisi = 0;
      }
        const ratio = Math.floor(window.innerWidth/280);
        if(uzunluk-(6+tiklamaSayisi)+(6-ratio)>=0){ 
      const currentTransform = getComputedStyle(list[i]).transform;
      const currentTranslateX = parseInt(currentTransform.split(",")[4]);
      list[i].style.transform = `translateX(${currentTranslateX  -300}px)`;
        
        }
      
  
        else{
            list[i].style.transform = `translateX(0)`;
            tiklamaSayisi=0;
        }
    });
  
  });
 
  const arrow1 = document.querySelectorAll(".arrow1");
  
  arrow1.forEach((arrow, i) => {
      const uzunluk = list[i].querySelectorAll("img").length;
     

      arrow.addEventListener("click", () => {
         
          const ratio = Math.floor(window.innerWidth/280);
         console.log(tiklamaSayisi);
          if(tiklamaSayisi>0){ 
             tiklamaSayisi--;
        const currentTransform = getComputedStyle(list[i]).transform;
        const currentTranslateX = parseInt(currentTransform.split(",")[4]);
        list[i].style.transform = `translateX(${currentTranslateX  +300}px)`;
         console.log(tiklamaSayisi);
           
          }
         
      });
    
    });
   
  /* Movie up-side section */
    $(document).ready(function(){
      $("#2001").on({
        mouseenter: function(){
            $("#up-side-2").fadeIn(200).css("display", "block");
            $("#up-side-1").css("display", "none");   
        },  
        mouseleave: function(){
            $("#up-side-2").css("display", "none");
            $("#up-side-1").fadeIn(200).css("display", "block");
        }, 
    }); 
      $("#godFather").on({
          mouseenter: function(){
            $("#up-side-3").fadeIn(200).css("display", "block");
            $("#up-side-1").css("display", "none");   
             
        },  
          mouseleave: function(){
            $("#up-side-3").css("display", "none");
            $("#up-side-1").fadeIn(200).css("display", "block");
        }, 
         
      });
       $("#BatmanDark").on({
          mouseenter: function(){
            $("#up-side-4").fadeIn(200).css("display", "block");
            $("#up-side-1").css("display", "none");   
             
        },  
          mouseleave: function(){
            $("#up-side-4").css("display", "none");
            $("#up-side-1").fadeIn(200).css("display", "block");
        }, 
         
      }); 
       $("#joker").on({
          mouseenter: function(){
            $("#up-side-5").fadeIn(200).css("display", "block");
            $("#up-side-1").css("display", "none");   
             
        },  
          mouseleave: function(){
            $("#up-side-5").css("display", "none");
            $("#up-side-1").fadeIn(200).css("display", "block");
        }, 
         
      });
       $("#lordOfTheRings2").on({
        mouseenter: function(){
            $("#up-side-6").fadeIn(200).css("display", "block");
            $("#up-side-1").css("display", "none");   
           
        },  
        mouseleave: function(){
            $("#up-side-6").css("display", "none");
            $("#up-side-1").fadeIn(200).css("display", "block");
        }, 
       
      });
       $("#zodiac").on({
        mouseenter: function(){
            $("#up-side-7").fadeIn(200).css("display", "block");
            $("#up-side-1").css("display", "none");   
         
        },  
        mouseleave: function(){
            $("#up-side-7").css("display", "none");
            $("#up-side-1").fadeIn(200).css("display", "block");
        }, 
     
      });
       $("#idiots").on({
        mouseenter: function(){
            $("#up-side-8").fadeIn(200).css("display", "block");
            $("#up-side-1").css("display", "none");   
       
        },  
        mouseleave: function(){
            $("#up-side-8").css("display", "none");
            $("#up-side-1").fadeIn(200).css("display", "block");
        }, 
   
      });
       $("#bladeRunner").on({
       mouseenter: function(){
            $("#up-side-9").fadeIn(200).css("display", "block");
            $("#up-side-1").css("display", "none");   
     
       },  
       mouseleave: function(){
            $("#up-side-9").css("display", "none");
            $("#up-side-1").fadeIn(200).css("display", "block");
       }, 
 
      });
       $("#avengers").on({
         mouseenter: function(){
            $("#up-side-10").fadeIn(200).css("display", "block");
            $("#up-side-1").css("display", "none");   
     
         },  
         mouseleave: function(){
            $("#up-side-10").css("display", "none");
            $("#up-side-1").fadeIn(200).css("display", "block");
         }, 
 
      });
       $("#spider").on({
        mouseenter: function(){
            $("#up-side-12").fadeIn(200).css("display", "block");
            $("#up-side-11").css("display", "none");   
         
        },  
      mouseleave: function(){
            $("#up-side-12").css("display", "none");
            $("#up-side-11").fadeIn(200).css("display", "block");
        }, 
     
      });
      $("#extraction").on({
        mouseenter: function(){
             $("#up-side-13").fadeIn(200).css("display", "block");
             $("#up-side-11").css("display", "none");   
             
        },  
          mouseleave: function(){
            $("#up-side-13").css("display", "none");
            $("#up-side-11").fadeIn(200).css("display", "block");
        }, 
         
      });
       $("#6underGround").on({
         mouseenter: function(){
            $("#up-side-14").fadeIn(200).css("display", "block");
            $("#up-side-11").css("display", "none");   
                 
        },  
        mouseleave: function(){
            $("#up-side-14").css("display", "none");
            $("#up-side-11").fadeIn(200).css("display", "block");
        }, 
             
      });
      $("#tenet").on({
          mouseenter: function(){
            $("#up-side-15").fadeIn(200).css("display", "block");
            $("#up-side-11").css("display", "none");   
                     
        },  
           mouseleave: function(){
            $("#up-side-15").css("display", "none");
            $("#up-side-11").fadeIn(200).css("display", "block");
         }, 
                 
      });
    
      $("#wanted").on({
        mouseenter: function(){
          $("#up-side-17").fadeIn(200).css("display", "block");
          $("#up-side-11").css("display", "none");   
                  
      },  
        mouseleave: function(){
          $("#up-side-17").css("display", "none");
          $("#up-side-11").fadeIn(200).css("display", "block");
      }, 
              
    });
      $("#tripleFrontier").on({
        mouseenter: function(){
          $("#up-side-18").fadeIn(200).css("display", "block");
          $("#up-side-11").css("display", "none");   
                  
      },  
        mouseleave: function(){
          $("#up-side-18").css("display", "none");
          $("#up-side-11").fadeIn(200).css("display", "block");
      }, 
              
    });
      $("#shrek").on({
        mouseenter: function(){
          $("#up-side-20").fadeIn(200).css("display", "block");
          $("#up-side-19").css("display", "none");   
                  
      },  
        mouseleave: function(){
          $("#up-side-20").css("display", "none");
          $("#up-side-19").fadeIn(200).css("display", "block");
      }, 
              
    });
    
      $("#bossBaby").on({
        mouseenter: function(){
          $("#up-side-22").fadeIn(200).css("display", "block");
          $("#up-side-19").css("display", "none");   
                  
      },  
        mouseleave: function(){
          $("#up-side-22").css("display", "none");
          $("#up-side-19").fadeIn(200).css("display", "block");
      }, 
              
    });
      $("#cizmeli").on({
        mouseenter: function(){
          $("#up-side-23").fadeIn(200).css("display", "block");
          $("#up-side-19").css("display", "none");   
                  
      },  
        mouseleave: function(){
          $("#up-side-23").css("display", "none");
          $("#up-side-19").fadeIn(200).css("display", "block");
      }, 
              
      });
      $("#toys").on({
        mouseenter: function(){
          $("#up-side-24").fadeIn(200).css("display", "block");
          $("#up-side-19").css("display", "none");   
                  
      },  
        mouseleave: function(){
          $("#up-side-24").css("display", "none");
          $("#up-side-19").fadeIn(200).css("display", "block");
      }, 
              
      });
      $("#sonic").on({
        mouseenter: function(){
          $("#up-side-25").fadeIn(200).css("display", "block");
          $("#up-side-19").css("display", "none");   
                  
      },  
        mouseleave: function(){
          $("#up-side-25").css("display", "none");
          $("#up-side-19").fadeIn(200).css("display", "block");
      }, 
              
    });
      $("#madagaskar").on({
        mouseenter: function(){
          $("#up-side-26").fadeIn(200).css("display", "block");
          $("#up-side-19").css("display", "none");   
                  
      },  
        mouseleave: function(){
          $("#up-side-26").css("display", "none");
          $("#up-side-19").fadeIn(200).css("display", "block");
      }, 
              
    });
      $("#lego").on({
        mouseenter: function(){
          $("#up-side-27").fadeIn(200).css("display", "block");
          $("#up-side-19").css("display", "none");   
                  
      },  
        mouseleave: function(){
          $("#up-side-27").css("display", "none");
          $("#up-side-19").fadeIn(200).css("display", "block");
      }, 
              
    });
      $("#dragon").on({
        mouseenter: function(){
          $("#up-side-28").fadeIn(200).css("display", "block");
          $("#up-side-19").css("display", "none");   
                  
      },  
        mouseleave: function(){
          $("#up-side-28").css("display", "none");
          $("#up-side-19").fadeIn(200).css("display", "block");
      }, 
              
    });
      $("#shrek2").on({
        mouseenter: function(){
          $("#up-side-29").fadeIn(200).css("display", "block");
          $("#up-side-19").css("display", "none");   
                  
      },  
        mouseleave: function(){
          $("#up-side-29").css("display", "none");
          $("#up-side-19").fadeIn(200).css("display", "block");
      }, 
              
    });
    $("#hangover2").on({
      mouseenter: function(){
        $("#up-side-31").fadeIn(200).css("display", "block");
        $("#up-side-30").css("display", "none");   
                
    },  
      mouseleave: function(){
        $("#up-side-31").css("display", "none");
        $("#up-side-30").fadeIn(200).css("display", "block");
    }, 
            
  }); 
    $("#ivedik").on({
      mouseenter: function(){
        $("#up-side-32").fadeIn(200).css("display", "block");
        $("#up-side-30").css("display", "none");   
                
    },  
      mouseleave: function(){
        $("#up-side-32").css("display", "none");
        $("#up-side-30").fadeIn(200).css("display", "block");
    }, 
            
  });
    $("#eniste").on({
      mouseenter: function(){
        $("#up-side-33").fadeIn(200).css("display", "block");
        $("#up-side-30").css("display", "none");   
                
    },  
      mouseleave: function(){
        $("#up-side-33").css("display", "none");
        $("#up-side-30").fadeIn(200).css("display", "block");
    }, 
            
  }); 
    $("#hangover").on({
      mouseenter: function(){
        $("#up-side-34").fadeIn(200).css("display", "block");
        $("#up-side-30").css("display", "none");   
                
    },  
      mouseleave: function(){
        $("#up-side-34").css("display", "none");
        $("#up-side-30").fadeIn(200).css("display", "block");
    }, 
            
  });
    $("#red").on({
      mouseenter: function(){
        $("#up-side-35").fadeIn(200).css("display", "block");
        $("#up-side-30").css("display", "none");   
                
    },  
      mouseleave: function(){
        $("#up-side-35").css("display", "none");
        $("#up-side-30").fadeIn(200).css("display", "block");
    }, 
            
  });
    $("#minions").on({
      mouseenter: function(){
        $("#up-side-36").fadeIn(200).css("display", "block");
        $("#up-side-30").css("display", "none");   
                
    },  
      mouseleave: function(){
        $("#up-side-36").css("display", "none");
        $("#up-side-30").fadeIn(200).css("display", "block");
    }, 
            
  });
    
    $("#hero").on({
      mouseenter: function(){
        $("#up-side-38").fadeIn(200).css("display", "block");
        $("#up-side-30").css("display", "none");   
                
    },  
      mouseleave: function(){
        $("#up-side-38").css("display", "none");
        $("#up-side-30").fadeIn(200).css("display", "block");
    }, 
            
  });
  });

  /* Payment section*/
  var x=0;

  function tikla1(){
    x++;
 
    
  }
 function tikla(){
  if(myform.ad.value==""){
    var y=document.getElementById("name");
      y.style.border="1px solid red";
    var z=document.getElementById("demo");
    z.innerHTML="Lütfen adınızı giriniz."
  }
  else{
    var y=document.getElementById("name");
      y.style.border="1px solid black";
    var z=document.getElementById("demo");
    z.innerHTML=""
  }


  if(myform.soyad.value==""){
    var y=document.getElementById("lastName");
      y.style.border="1px solid red";
    var z=document.getElementById("demo2");
    z.innerHTML="Lütfen soyadınızı giriniz."
  }
  else{
    var y=document.getElementById("lastName");
      y.style.border="1px solid black";
    var z=document.getElementById("demo2");
    z.innerHTML=""
  }

  if (myform.kartNo.value.length != 16 ||isNaN(myform.kartNo.value)) {
    var y = document.getElementById("cardNo");
    y.style.border = "1px solid red";
    var z = document.getElementById("demo3"); 
    z.innerHTML = "Kart numarasınzı yanlış girdiniz.";
  }
  else {
    var y = document.getElementById("cardNo");
    y.style.border = "1px solid black";
    var z = document.getElementById("demo3"); 
    z.innerHTML = "";
  }


  if (myform.tarih.value.length != 4 ||isNaN(myform.tarih.value)) {
    var y = document.getElementById("Date");
    y.style.border = "1px solid red";
    var z = document.getElementById("demo4");
       z.innerHTML = "Tarihi yanlış girdiniz";
  }
  else  {
    var y = document.getElementById("Date");
    y.style.border = "1px solid black";
    var z = document.getElementById("demo4"); 
    z.innerHTML = "";
  }

  if (myform.güvenlikKod.value.length !=3 ||isNaN(myform.güvenlikKod.value)) {
    var y = document.getElementById("cod");
    y.style.border = "1px solid red";
    var z = document.getElementById("demo5");
    z.innerHTML = "Güvenlik kodunuz yanlış girdiniz.";
  }
  else  {
    var y = document.getElementById("cod");
    y.style.border = "1px solid black";
    var z = document.getElementById("demo5"); 
    z.innerHTML = "";
  }  
  
  if(x%2==0){
    var y=document.getElementById("checkbox");
    y.style.border = "1px solid red";
    var z = document.getElementById("demo6"); 
    z.innerHTML = "Kullanım koşullarını kabul etmeniz gerekmektedir.";
  }
  else  {
    var y = document.getElementById("checkbox");
    y.style.border = "1px solid black";
    var z = document.getElementById("demo6"); 
    z.innerHTML = "";
  } 
  }
  