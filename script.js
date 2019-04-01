var boxElement = document.getElementById("login-form");
var boxElementTwo = document.getElementById("register-form")

function firstAnimation() {
    var animation = boxElement.animate([
        {opacity: 1},
        {opacity: 0}
        ], 1000);
        animation.addEventListener('finish', function() {
          boxElement.style.opacity = 0;
          boxElement.style.display = "none";
          boxElementTwo.style.display = "block";
        });
        
    var animationTwo = boxElementTwo.animate([
        {opacity: 0},
        {opacity: 1}
        ], 3000);
        animationTwo.addEventListener('finish', function() {
           boxElementTwo.style.opacity = 1;
        })
}

function secondAnimation(){
      var animationThree = boxElementTwo.animate([
        {opacity: 1},
        {opacity: 0}
      ], 1000);
      animationThree.addEventListener('finish', function() {
        boxElementTwo.style.opacity = 0;
        boxElementTwo.style.display = "none";
        boxElement.style.display = "block";
      });
      
      var anitionFour = boxElement.animate([
          {opacity: 0},
          {opacity: 1}
        ], 3000)
        anitionFour.addEventListener('finish', function() {
          boxElement.style.opacity = 1;
        })      
} 
