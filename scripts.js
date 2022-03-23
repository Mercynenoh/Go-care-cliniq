$(document).ready(function() {
    $("button").click(function() {
        //$("#d").trigger("reset");
        //$("#d").get(0).reset();
        $("#d")[0].reset()
    });
   
});


let options =[
    "Thankyou for booking an appointment with us. We will get back to you shortly",
   
];
  function help (){
      let randOptionNum = Math.floor(Math.random()* 
      options.length);
      document.getElementById("output").innerHTML =options[randOptionNum];
  }


    


