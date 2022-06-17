isMouseDown = false;
var prevX;
var prevY;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function mouseDOWN(ev){
    isMouseDown = true;
    prevX = ev.offsetX;
    prevY = ev.offsetY;
}

function mouseUP(ev){
    console.log("Mouse Up")
    console.log(ev)
}

function mouseMOVE(ev){
    if(isMouseDown==true){
        ctx.beginPath();
        ctx.moveTo(prevX,prevY);
        ctx.lineTo(ev.offsetX,ev.offsetY);
        ctx.stroke();
        prevX = ev.offsetX;
        prevY = ev.offsetY; 
    }
}