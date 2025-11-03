let randomNumber1 = Math.floor(Math.random()*6)+1;
//console.log(randomNumber1);
let randomImageSource1="images/dice"+randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);
