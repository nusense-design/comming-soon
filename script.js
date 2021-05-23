const countdown = () => {
    const countDate = new Date('June 1, 2021 00:00:00').getTime();
    const currentTime = new Date().getTime();
    const difference = countDate - currentTime;
    
    // time calculation how does it works ? 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // how many time left
    const displayDay = Math.floor(difference / day);
    const displayHour = Math.floor((difference % day)/hour);
    const displayMinute = Math.floor((difference % hour)/minute);
    const displaySecond = Math.floor((difference % minute)/second);
   
    document.querySelector(".day").innerText = displayDay;
    document.querySelector(".hour").innerText = displayHour;
    document.querySelector(".minute").innerText = displayMinute;
    document.querySelector(".second").innerText = displaySecond;
}


setInterval(() => {
    
    countdown()
},1000)