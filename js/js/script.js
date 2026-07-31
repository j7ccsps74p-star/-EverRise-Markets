function random(min,max){
return (Math.random()*(max-min)+min).toFixed(2);
}

setInterval(function(){

document.getElementById("eurusd").innerHTML=random(1.16,1.19);

document.getElementById("btc").innerHTML="$"+Math.floor(random(117000,120000));

document.getElementById("gold").innerHTML="$"+Math.floor(random(3350,3450));

document.getElementById("nasdaq").innerHTML=Math.floor(random(24000,24500));

},3000);
