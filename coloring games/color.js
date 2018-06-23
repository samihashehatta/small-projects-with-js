var numsSq=6;
var color =[];
var picked ;
var squar = document.querySelectorAll(".sq");
var colorDis= document.querySelector("#colordis")
var msg = document.querySelector("#msg");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var h1Pick = document.querySelector("h1");
var butt= document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");
init();
function init(){
    
  for(var i=0;i<mode.length;i++){
    mode[i].addEventListener("click",function(){
        mode[0].classList.remove("selected"); 
        mode[1].classList.remove("selected"); 
        this.classList.add("selected");
        this.textContent === "easy" ? numsSq=3: numsSq=6;
        
        reset();
    });
}
  for ( var i=0;i<squar.length;i++)
    {
        //coloring squars
        
        //decidign which is wining and which is losing 
        squar[i].addEventListener("click",function(){
       
            var clicked= this.style.backgroundColor;
            
        if (clicked === picked)
            {
              
                msg.textContent="correct";
                change(clicked);
                h1Pick.style.backgroundColor=picked;
                butt.textContent="play again?";
            }
        else
            {
                    this.style.backgroundColor="inherit"
                    msg.textContent= "wronge";
                }
        });
    }
    reset();
}

butt.addEventListener("click", function(){
   reset();
});
function change(x){
    for ( var i=0;i<squar.length;i++)
        {
            squar[i].style.backgroundColor=x;
        }
}
function pickColor(){
    var random = Math.floor(Math.random()*color.length);
    return color[random];
}
function genRandom(num){
    var arr=[];
    for(var i=0;i<num;i++)
        {
            arr.push(randomColor());
        }
    return arr;
}
function randomColor()
{
var r =Math.floor(Math.random()*256);
var g =Math.floor(Math.random()*256);
var b =Math.floor(Math.random()*256);
    "rgb(r, g, b)"
return "rgb"+"("+r+", "+g+", "+b+")";
}
function reset()
{
  butt.textContent="new colors";
    color =genRandom(numsSq);
    picked = pickColor();
    colorDis.textContent=picked;
    for ( var i=0;i<squar.length;i++)
    {
        if(color[i])
        {
            squar[i].style.display= "block";
         squar[i].style.backgroundColor=color[i];
        }
        else
        {
            squar[i].style.display= "none";
        }
        
        
    }
    msg.textContent="";
    h1Pick.style.backgroundColor="darkgrey";  
    
}