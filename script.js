/*text content and also innterhtml content, text only text inner affects whole html"*/
function updateTimerDisplay(){
    const timer = document.getElementById("time-left");
    timer.textContent = '24:59';
    let startstop = document.getElementById("start-stop-btn");

    if (!isRunning){
        isRunning = True;
        setInterval(updateTimerDisplay, 1000);
        startstop.textContent= 'Pause';
    }
    else{
        isRunning=False;
        clearInterval(updateTimerDisplay);

    }
};


updateTimerDisplay()
timer.textContent = '24:59';
