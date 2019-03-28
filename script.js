document.getElementById("register-form").style.display = "none";
var boxElement = document.getElementById("login-form");
var boxElementTwo = document.getElementById("register-form")

function a() {
    var animation = boxElement.animate([
        {opacity: 1},
        {opacity: 0}
        ], 1000);
        animation.addEventListener('finish', function() {
        boxElement.style.opacity = 0;
        });
        if(boxElement.style.opacity == 0){
          boxElementTwo.style.display = "";
          boxElement.style.display = "none";
        }

  var animationTwo = boxElementTwo.animate([
    {opacity: 0},
    {opacity: 1}
    ], 1000);
    animationTwo.addEventListener('finish', function() {
      boxElementTwo.style.opacity = 1;
    });
}

function b(){
      var an = boxElementTwo.animation([
        {opacity: 1},
        {opacity: 0}
      ], 1000);
      an.addEventListener('finish', function() {
        boxElementTwo.style.opacity = 0;
      });
      if(boxElementTwo.style.opacity == 0){
        boxElementTwo.style.display = "none";
        boxElement.style.display = "";
      }

    var anT = boxElement.animation([
      {opacity: 0},
      {opacity: 1}
      ], 1000);
      anT.addEventListener("finish", function(){
        boxElement.style.opacity = 1;
      }); 
} 
