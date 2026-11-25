import { randomItem, colors } from "./lib/utilities.js";
import Character from "./classes/Character.js";
import Explorer from "./classes/Explorer.js";

console.log("Script loaded successfully!");

document.body.style.backgroundColor = randomItem(colors);

const characters = [
  new Explorer("Terra", "There is much to discover."),
  new Character("Luna", 8, "Look at the sky."),
  new Character("Sol", 3, "I have a secret."),
];

for(var i = 0; i < 5; i++) {
  const character = randomItem(characters);
  console.log(character.greet());
  if(Math.random() > 0.5) {
    console.log(character.respond());
  }
}

const charSection = document.getElementById("character-section");

characters.forEach(character => {
  
  const section = document.createElement('section');
  section.classList.add('character-card');
  if(character.explore !== undefined){
    section.classList.add('explorer');
  }

  const title = document.createElement('h2');
  title.innerText =  character.name;
  section.append(title);

  const despcription = document.createElement('p');
  despcription.innerText = `${character.visit} visits`;
  section.append(despcription);

  charSection.append(section)

});
