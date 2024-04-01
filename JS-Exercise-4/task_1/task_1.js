document.addEventListener('DOMContentLoaded', function() {
    const realTimeDisplay = document.getElementById('realTime');
    const currentDateDisplay = document.getElementById('currentDate');
    const stopwatchDisplay = document.getElementById('stopwatchDisplay');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resumeBtn = document.getElementById('resumeBtn');
    const resetBtn = document.getElementById('resetBtn');

    let stopwatchInterval;
    let stopwatchTime = 0;

    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const milliseconds = now.getMilliseconds().toString.padStart(4,'0');
        realTimeDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = now.getDate().toString().padStart(2, '0');
        const month = months[now.getMonth()];
        const year = now.getFullYear();
        currentDateDisplay.textContent = `${day}-${month}-${year}`;
    }

    function updateStopwatch() {
        const hours = Math.floor(stopwatchTime / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((stopwatchTime % 3600) / 60).toString().padStart(2, '0');
        const seconds = (stopwatchTime % 60).toString().padStart(2, '0');
        const milliseconds = (stopwatchTime % 1000).toString().padStart(4, '0');
        stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    function startStopwatch() {
        stopwatchInterval = setInterval(function() {
            stopwatchTime++;
            updateStopwatch();
        }, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resumeBtn.disabled = true;
        resetBtn.disabled = false;
    }

    function stopStopwatch() {
        clearInterval(stopwatchInterval);
        startBtn.disabled = true;
        stopBtn.disabled = true;
        resumeBtn.disabled = false;
        resetBtn.disabled = false;
    }

    function resumeStopwatch() {
        startStopwatch();
    }

    function resetStopwatch() {
        clearInterval(stopwatchInterval);
        stopwatchTime = 0;
        updateStopwatch();
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resumeBtn.disabled = true;
        resetBtn.disabled = true;
    }

    updateTime();
    setInterval(updateTime, 1000);

    startBtn.addEventListener('click', startStopwatch);
    stopBtn.addEventListener('click', stopStopwatch);
    resumeBtn.addEventListener('click', resumeStopwatch);
    resetBtn.addEventListener('click', resetStopwatch);
});
