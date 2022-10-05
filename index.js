let pos=document.getElementById("mybox");
window.addEventListener("keydown",move);


let x=0;
let y=0;
function move(event){

     switch(event.key){
        
        case "ArrowDown":

            if(y<240){
            y=y+5;
            mybox.style.top=y+"px";
            }
            break; 

        case "ArrowUp" :
            
            if(y>-240){
            y-=5;
            mybox.style.top=y +"px";
            }
            break;
        
        case  "ArrowLeft" :

            if(x<240){
            mybox.style.right=x +"px";
            x+=5;
            }
            break;
        case "ArrowRight" :
            if(x>-240){
                x-=5;
                mybox.style.right=x+"px";
            }
            
            break;
        default:
            break;
        
        
     }


}

document.getElementById("up").onclick=function(){
    if(y>-240){
        y-=5;
        mybox.style.top=y +"px";
        }

}
document.getElementById("down").onclick=function(){
    if(y<240){
        y+=5;
        mybox.style.top=y +"px";
        }

}
document.getElementById("left").onclick=function(){
    if(x<240){
        x+=5;
        mybox.style.right=x +"px";
        }

}
document.getElementById("right").onclick=function(){
    if(x>-240){
        x-=5;
        mybox.style.right=x +"px";
        }

}
