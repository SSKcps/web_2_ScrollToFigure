var hint = document.getElementsByClassName("hint")[0];
var setTime;

window.onload = function(){
    setTime = setInterval(function(){
        if(getStyle(hint,"left") == "-335px"){

            hint.style["left"] = "950px";
        
        }
        else{

            hint.style["left"] = parseInt(getStyle(hint,"left")) - 1 + "px";
        
        }
    },30)
}
window.close = function(){
    clearInterval(setTime);
}

var warehouse = document.getElementsByClassName("warehouse")[0];
var tag = false;
var indexPicture = 1;

function rightPicture(){
    if(tag == false){
        tag = true;
        indexPicture++;
        changeStyle();
        animate(warehouse,{left: -1200 * indexPicture},
            function(){
                if(indexPicture == 6){
                    warehouse.style["left"] = "-1200px";
                    indexPicture = 1;
                }
                tag = false;
            }
        )
    }
}

function leftPicture(){
    if(tag == false){
        tag = true;
        indexPicture--;
        changeStyle();
        animate(warehouse,{left: -1200 * indexPicture},
            function(){
                if(indexPicture == 0){
                    warehouse.style["left"] = "-6000px";
                    indexPicture = 5;
                }
                tag = false;
            }
        )
    }
}

var setTimeRightPicture = setInterval(rightPicture,3000);


var wicket = document.getElementsByClassName("wicket")[0];
var left = document.getElementsByClassName("left")[0];
var right = document.getElementsByClassName("right")[0];

wicket.onmouseover = function(){
    animate(left,{opacity: 100})
    animate(right,{opacity: 100})
    clearInterval(setTimeRightPicture);
}

wicket.onmouseout = function(){
    animate(left,{opacity: 0})
    animate(right,{opacity: 0})
    setTimeRightPicture = setInterval(rightPicture,3000);
}

right.onclick = rightPicture;
left.onclick = leftPicture;


var pointArr = document.getElementsByClassName("point");

for(var i = 0;i < pointArr.length;i++){
    pointArr[i].onclick = function(){
        indexPicture = this.firstChild.innerHTML;
        changeStyle();
        animate(warehouse,{left: -1200 * indexPicture})
    }
}

function changeStyle(){
    for(var i = 0;i < pointArr.length;i++){
        pointArr[i].setAttribute("class","point");
    }
    if(indexPicture == 6){
        pointArr[0].setAttribute("class","point , change");
    }
    else if(indexPicture == 0){
        pointArr[4].setAttribute("class","point , change");
    }
    else{
        pointArr[indexPicture - 1].setAttribute("class","point , change");
    }
}