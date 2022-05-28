//window.onload = function startTimer() {
    var hours = 00;
    var seconds = 00;
    var tens = 00;
    var appendhours =document.getElementById("hours");
    var appendTens =document.getElementById("tens");
    var appendSeconds =document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonRestart = document.getElementById("button-reset");
    var interval; 
     
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      //console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }      
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    } 
    if (seconds > 59) {
        //console.log("seconds");
        hours++;
        appendhours.innerHTML = "0" + hours;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
      }      
      if (hours > 9){
        appendhours.innerHTML = hours;
    } 
    if (hours > 24) {
      //console.log("seconds");
      hours++;
      appendhours.innerHTML = "0" + hours;
      hours = 0;
      appendhours.innerHTML = "0" + 0;
    }          
  }  
  
  buttonStart.onclick = function() {
    interval = setInterval(startTimer);
  };
  
  buttonStop.onclick = function() {
      clearInterval(interval);
  }
  
  buttonRestart.onclick = function() {
   clearInterval(interval);
   tens = "00";
   seconds = "00";
   hours = "00";
   appendhours.innerHTML = hours;
   appendTens.innerHTML = tens;
   appendSeconds.innerHTML = seconds;
  }
    
      
      