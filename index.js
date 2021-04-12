/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet (time){ 
  const message = parseInt(time);
  if (message < 12) return "Good Morning"
  if (message > 17) return "Good Evening"
  return "Good Afternoon"