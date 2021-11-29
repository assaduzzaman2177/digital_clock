function realtimeClock(){
    var rclock=new Date();

    var hours=rclock.getHours();
    var minutes=rclock.getMinutes();
    var seconds=rclock.getSeconds();

    //// add AM and PM system
    var amPm=(hours<24) ? "Am" : "PM";

    //// convert the hours to 24 hour format
    hours=(hours >24) ? hours -24 : hours;

    ////padding hours,minutes,second
    hours =("0"+hours).slice(-2);
    minutes =("0"+minutes).slice(-2);
    seconds =("0"+seconds).slice(-2);

    ////// display the clock
    document.getElementById('clock').innerHTML =
    hours+" : " + minutes+" : "+seconds+" "+amPm;
    var t=setTimeout(realtimeClock,500);


}