const canvaColor=document.getElementById("text-color");
const backColor=document.getElementById("back-color");
const fontSize=document.getElementById("font-size");
const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");
canvaColor.addEventListener('change',(e)=>{
    ctx.strokeStyle=e.target.value;
    ctx.fillStyle=e.target.value;
});
canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true;
     lastX=e.offsetX;
    lastY=e.offsetY;
});
canvas.addEventListener('mousemove',(e)=>{
    if(isDrawing){
        ctx.beginPath();
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.stroke();
        lastX=e.offsetX;
        lastY=e.offsetY;
    }
})
