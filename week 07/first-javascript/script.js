console.log("My JavaScript file is connected!");

 let title = document.getElementById("title");
 let message = document.getElementById("message");

 title.style.color = "green";

 message.textContent = "Something has already changed.";



 function changePage(bgColor = "lightblue") {

  title.textContent = "You Changed the Story!";

  message.textContent = "The page responded to your action.";

  document.body.style.backgroundColor = bgColor;

 }
 

 let button = document.getElementById("change-button");

 button.addEventListener("click", changePage);