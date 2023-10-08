const hoursE1 = document.querySelector("#hours");
const minutesE1 = document.querySelector("#minutes");
const secondsE1 = document.querySelector("#seconds");
const btnStart = document.querySelector(".btn-start-resume");
const btnPause = document.querySelector(".btn-pause");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");

let interval;
let pause = false;
let totalSeconds , totalSecondsBackup;
totalSeconds =  totalSecondsBackup = 0;

init();

function init(){
   btnPause.style.display = 'none'; 
   btnStop.style.display = 'none'; 
   btnReset.style.display = 'none'; 

   btnStart.addEventListener('click',()=>{
    const hours = parseInt(hoursE1.value);
    const minutes = parseInt(minutesE1.value);
    const seconds = parseInt(secondsE1.value);

    console.log(hours,minutes,seconds);

    totalSecondsBackup = totalSeconds = hours * 60 * 60+ minutes * 60 + seconds;

    if(totalSeconds < 0){
       alert(" Please Enter Valid Number...!");
       return;
    }

    startTimer();

   btnPause.style.display = 'inline-block'; 
   btnStop.style.display = 'inline-block'; 
   btnReset.style.display = 'inline-block';
   btnStart.style.display = 'none';
   
   });

   btnPause.addEventListener('click',()=>{
       pause = !pause;
       if(pause)
         btnPause.innerHTML = 'resume';
       else
         btnPause.innerHTML = 'pause';
         
   });

   btnReset.addEventListener('click',()=>{
     totalSeconds = totalSecondsBackup;
     updateInputs();
   });

   btnStop.addEventListener('click',()=>{
       stopTimer();
       totalSeconds = totalSecondsBackup;
       updateInputs();
       pause = false;

       btnPause.style.display = 'none'; 
       btnStop.style.display = 'none'; 
       btnReset.style.display = 'none'; 
       btnStart.style.display = 'inline-block';
   })

}


function stopTimer(){
    interval = clearInterval(interval);
}



function startTimer(){
    interval = setInterval(()=>{
      
        if(pause) return;

        totalSeconds--;    
        updateInputs();

        if(totalSeconds<=0){
             stopTimer();
        }

    },1000);
}

function updateInputs(){
    const hours = Math.floor(totalSeconds/60/60);
    const minutes = Math.floor(totalSeconds/60);
    const seconds = Math.floor(totalSeconds%60);
    
    hoursE1.value = hours;
    minutesE1.value = minutes;
    secondsE1.value = seconds;

}