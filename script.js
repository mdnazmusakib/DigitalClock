window.addEventListener('load',updateClock);

function updateClock(){
    var now=new Date();
    var datename=now.getDate();
    var month=now.getMonth();
    var daynumber=now.getDay();
    var year=now.getFullYear();
    var hour=now.getHours();
    var min=now.getMinutes();
    var sec=now.getSeconds();
    var ampm= hour >=12 ? 'PM' : 'AM';


    hour=hour%12;
    hour=hour?hour : '12';
    hour=hour<10 ? '0'+hour : hour; 
    min=min<10 ? '0'+min : min; 
    sec=sec<10 ? '0'+sec : sec; 



    var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satruday"];

    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    var ids=["dayname","month","daynum","hour","min","sec","ampm"];

    var values=[week[daynumber],months[month],datename,hour,min,sec,ampm];

    for(var i=0;i<ids.length;i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];


    setTimeout(updateClock,200);
}

// function initClock(){
//     updateClock();
//     window.setInterval("updateClock", 1);
// }