setInterval (function ()
{
var currenttime = new Date ();
var hours = currenttime.getHours();
var mintues = currenttime.getMinutes();
var seconds = currenttime.getSeconds();
var period="am";
 if (hours >=12)
 {
    period="pm";
 }
 if (hours >=12){
    hours=hours-12
 }
 if (seconds<10){
    seconds='0'+seconds;
 }
 if (mintues <10)
 {
    mintues="0"+ mintues;
 }

 var clocktime = hours +":"+mintues + ":" + seconds + " " + period;

 var clock = document.getElementById('clock');
     clock.innerText=clocktime;
},1000);

