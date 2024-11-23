function generateRandomColour()
{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;
}
let b= generateRandomColour(); 
console.log(b);

function setBackgroundColor()
{
   // document.body.style.backgroundColor= generateRandomColour();

}
setInterval(setBackgroundColor,1000);

