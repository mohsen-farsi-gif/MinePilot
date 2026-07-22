let lastBTC = 118000;
let lastHash = 58.60;

updateClock();
setInterval(updateClock,1000);

function updateClock(){

const now=new Date();

document.getElementById("clock").innerHTML=
"Last Update : "+now.toLocaleTimeString();

}

function refreshData(){

let btc=Math.floor(Math.random()*6000)+115000;
let hash=(Math.random()*3+57).toFixed(2);

let btcPercent=((btc-lastBTC)/lastBTC*100).toFixed(2);
let hashPercent=((hash-lastHash)/lastHash*100).toFixed(2);

const btcPrice=document.getElementById("btcPrice");
const btcChange=document.getElementById("btcChange");

const hashPrice=document.getElementById("hashPrice");
const hashChange=document.getElementById("hashChange");

btcPrice.innerHTML=btc+" $";
hashPrice.innerHTML=hash+" $";

if(btc>=lastBTC){

btcChange.innerHTML="▲ +"+btcPercent+"%";
btcChange.className="change positive";

}else{

btcChange.innerHTML="▼ "+btcPercent+"%";
btcChange.className="change negative";

}

if(hash>=lastHash){

hashChange.innerHTML="▲ +"+hashPercent+"%";
hashChange.className="change positive";

}else{

hashChange.innerHTML="▼ "+hashPercent+"%";
hashChange.className="change negative";

}

lastBTC=btc;
lastHash=parseFloat(hash);

updateClock();

}

function changeTheme(){

document.body.classList.toggle("light");

}
