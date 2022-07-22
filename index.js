var randomNumber1=Math.floor(Math.random()*6)+1;

    switch(randomNumber1){
        case 1:
            document.querySelectorAll("img")[0].setAttribute("src","dice1.png");
            break;
        case 2:
            document.querySelectorAll("img")[0].setAttribute("src","dice2.png");
            break;
        case 3:
            document.querySelectorAll("img")[0].setAttribute("src","dice3.png");
            break;
        case 4:
            document.querySelectorAll("img")[0].setAttribute("src","dice4.png");
            break;
        case 5:
            document.querySelectorAll("img")[0].setAttribute("src","dice5.png");
            break;  
        case 6:
            document.querySelectorAll("img")[0].setAttribute("src","dice6.png");  
    }
var randomNumber2=Math.floor(Math.random()*6)+1;
switch(randomNumber2){
        case 1:
            document.querySelectorAll("img")[1].setAttribute("src","dice1.png");
            break;
        case 2:
            document.querySelectorAll("img")[1].setAttribute("src","dice2.png");
            break;
        case 3:
            document.querySelectorAll("img")[1].setAttribute("src","dice3.png");
            break;
        case 4:
            document.querySelectorAll("img")[1].setAttribute("src","dice4.png");
            break;
        case 5:
            document.querySelectorAll("img")[1].setAttribute("src","dice5.png");
            brak;  
        case 6:
            document.querySelectorAll("img")[1].setAttribute("src","dice6.png");  
}

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}


