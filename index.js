/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeStr){
  let nowTime = timeStr.split(':');
  let nowHour = parseInt(nowTime[0]); //ParseInt() can then convert the strings into integers 
  if (nowHour<12){
    return "Good Morning";
  } else if (nowHour>17){
    return "Good Evening";
  }
  return "Good Afternoon";
}

function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}