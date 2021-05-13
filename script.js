const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');


const newYears ="22 Sep 2021";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const totoalSeconds = (newYearsDate-currentDate) / 1000;

    const days = Math.floor(totoalSeconds/ 3600 /24);
    const hours = Math.floor(totoalSeconds / 3600) % 24;
    const mins  = Math.floor(totoalSeconds/60) % 60;
    const seconds = Math.floor(totoalSeconds )%60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML =hours;
    minsE1.innerHTML = mins;
    secondsE1.innerHTML = seconds;
 
   

}


//initial call
countdown();

setInterval(countdown, 1000);