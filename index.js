const  startBtn = document.querySelector('#spin');
const gameBoard = document.querySelector('#gameBoard');
 let weeldeg = Math.floor(2000+Math.random()*10000);
let spins = document.querySelectorAll('.spin');
let zoneSize = 45; //360 deg divide by 8 zones
points = document.querySelector('#points');


startBtn.addEventListener('click', wheelGame);


function wheelGame () {

  gameBoard.style.transform= 'rotate(' +weeldeg + 'deg)'
  weeldeg += Math.floor(Math.random()*10000);
   ;
  
gameBoard.addEventListener('transitionend', ()=>{
    const actualDeg = weeldeg%360;
  let symbol = Math.round(actualDeg/zoneSize);
   spins.forEach(spin=>{
   
    if(spin.innerHTML ==symbol){
        points.innerHTML = symbol;
        spin.style.background='green';
    }
    
   })
})
}





