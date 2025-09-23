
function setTime() {

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const ampm = hours >= 12 ? "PM" : "AM";
    let displayHours = hours % 12;
    displayHours = displayHours ? displayHours : 12;

    let greetings = "";
    if (hours >= 5 && hours < 12) {
        greetings = "Good Morning ❤";
    } 
    else if (hours >= 12 && hours < 17){
        greetings = "Good AfterNoon 🥰";
    }
    else if(hours >= 17 && hours < 21){
    greetings = "Good Evening 💖";
    }
    else{
        greetings = "Good Night😴";
    }

    document.querySelector(".hrs").textContent = displayHours;
    document.querySelector(".mins").textContent = minutes;
    document.querySelector(".secs").textContent = seconds;
    document.querySelector(".am").textContent = ampm;
    document.querySelector(".greeting").textContent = greetings; 

    setInterval(setTime, 1000)
};

setTime();