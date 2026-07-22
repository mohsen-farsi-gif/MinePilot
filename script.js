function updateClock(){

let now=new Date();

document.getElementById("clock").innerHTML=
"🕒 "+now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

function refreshData(){

let btc=Math.floor(Math.random()*10000)+110000;

let hash=(Math.random()*3+57).toFixed(2);

document.getElementById("btcPrice").innerHTML=btc+" $";

document.getElementById("hashPrice").innerHTML=hash+" $";

}

function changeTheme(){

document.body.classList.toggle("light");

}