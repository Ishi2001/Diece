//////////*for first diec*///////////////

var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage1="dice" + randomNumber1 + ".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage1);

////////////*for second dice *////////////

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice" + randomNumber2 + ".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage2);
/*h1 code*/
if(randomNumber1>randomNumber2)
{
  document.querySelector('h1').innerHTML='🚩 Player 1 wins!';
}
else if (randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML='Player 2 wins!🚩';
}
else{document.querySelector("h1").innerHTML='Draw!'};
/*Adding button*/
function myFresher() {
  window.location.reload();
}
