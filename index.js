var ranomNumber1 = Math.floor(Math.random()*6) + 1;

var diceImage = "dice"+ranomNumber1+".png";

var srcImage = "images/"+diceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",srcImage)

var ranomNumber2 = Math.floor(Math.random()*6) + 1;
var diceImage2 = "dice"+ranomNumber2+".png";
var srcImage2 ="images/"+diceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",srcImage2);

if(ranomNumber1 > ranomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
if(ranomNumber1 < ranomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
if(ranomNumber1 === ranomNumber2)
{
    document.querySelector("h1").innerHTML = "It's a Draw!";
}

