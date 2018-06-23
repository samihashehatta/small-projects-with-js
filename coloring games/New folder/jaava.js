var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var p1display = document.getElementById("p1dis");
var p2display = document.getElementById("p2dis");
var res= document.getElementById("res");
var numIn= document.getElementById("in");
var winScores=document.getElementById("winScores");
var p1score=0;
var p2score=0;
var gameOver=false;
var winScore=5;

p1.addEventListener("click",function(){
    if(!gameOver)
        {
 p1score++;
            if(p1score==winScore)
                {
                    gameOver=true;
                    p1display.classList.add("winner");
                    
                }
            p1display.textContent=p1score;
        }
    
});
p2.addEventListener("click",function(){
        if(!gameOver)
        {
 p2score++;
            if(p2score==winScore)
                {
               gameOver=true;
                p2display.classList.add("winner");
                }
    p2display.textContent=p2score;
        }
});
res.addEventListener("click",function(){
    if(p1score==5)
        {
            p1display.classList.remove("winner");
        }
    else 
        {
            p2display.classList.remove("winner");
        }
   p1score=0;
   p2score=0;
    p1display.textContent=p1score;
    p2display.textContent=p2score;
    gameOver=false;
    
});
numIn.addEventListener("change",function(){
   winScores.textContent=numIn.value ;
    winScore=numIn.value;
});