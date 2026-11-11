/*

fetch("http://api.open-notify.org/astros.json")
  .then(response => response.json())
  .then(json => {
    console.log(json);
    displayPeopleInSpace(json.number);
  });


function displayPeopleInSpace(number) {
  const displayElement = document.getElementById("peopleInSpace");
    displayElement.innerHTML = `There are currently ${number} people in space.`;
}

*/


const displayElement = document.getElementById("peopleInSpace");

async function getPeopleInSpace() {

  const data = await fetch("http://api.open-notify.org/astros.json");

alert("hello", "title");
  const json = await data.json();

  displayElement.innerHTML = `There are currently ${json.number} people in space.`;
}

displayElement.innerHTML = "Loading...";

getPeopleInSpace();

document.body.style.backgroundColor = "lightblue";