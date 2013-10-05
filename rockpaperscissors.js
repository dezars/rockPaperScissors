var player1=prompt("What is your name?","player 1");
var player2=prompt("What is your name?","player 2");
var stuff1=prompt(player1+", write a rock or paper or scissors","");
var stuff2=prompt(player2+", write a rock or paper or scissors","");
function rockPaperScissors(stuff1,stuff2,player1,player2){
    if(stuff1=="rock"){
        if(stuff2=="rock"){
            confirm("Match Drawn!");
        }else if(stuff2=="paper"){
            confirm(player2+" win!");
        }else{
            confirm(player1+" win!");
        }
    }
    if(stuff1=="paper"){
        if(stuff2=="paper"){
            confirm("Match Drawn!");
        }else if(stuff2=="rock"){
            confirm(player1+" win!");
        }else{
            confirm(player2+" win!");
        }
    }
    if(stuff1=="scissors"){
        if(stuff2=="scissors"){
            confirm("Match Drawn!");
        }else if(stuff2=="rock"){
            confirm(player2+" win!");
        }else{
           confirm(player1+" win!");
        }
    }
}
rockPaperScissors(stuff1,stuff2,player1,player2);