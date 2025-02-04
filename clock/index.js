function clocking(){
    let timeNow = new Date();
    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    
    let ampm = hours >= 12 ? 'PM' : 'AM';

    if (hours >= 6 && hours < 18) {
        document.body.style.backgroundColor = "#A3D9FF"; // Day (light blue)
    } else {
        document.body.style.backgroundColor = "#2C3E50"; // Night (dark blue)
    }

    hours = hours % 12;
    hours = hours ? hours  : 12;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;



    document.getElementsByClassName('hour-box')[0].innerHTML = hours ;
    document.getElementsByClassName('minute-box')[0].innerHTML = minutes ;
    document.getElementsByClassName('second-box')[0].innerHTML = seconds ;
    document.getElementsByClassName('ampm-box')[0].innerHTML = ampm ;

}
function digitalClocking() {
    let timeNow = new Date();
    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Set digital time
    document.getElementById('digital-time').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(clocking, 1000);
setInterval(digitalClocking, 1000);