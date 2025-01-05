function time() {
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours < 10 ? hours = "0" + hours : hours = hours;
    minutes < 10 ? minutes = "0" + minutes : minutes = minutes;
    seconds < 10 ? seconds = "0" + seconds : seconds = seconds;

    let currentTime = hours + ":" + minutes + ":" + seconds;

    const numbers = ['🯰', '🯱', '🯲', '🯳', '🯴', '🯵', '🯶', '🯷', '🯸', '🯹'];
    currentTime = currentTime.split('').map(char => numbers[char] || char).join('');

    document.getElementById("clock").innerHTML = currentTime;
}

time()
setInterval(time, 1000);