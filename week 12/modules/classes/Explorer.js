import Character from './Character.js'

export default class Explorer extends Character {

  constructor(name, greeting = "Hello!", location = "Home") {

    super(name, 8, greeting);

    this.location = location;

  }

  explore(newLocation) {
    
    if(newLocation != undefined && newLocation != this.location){
      this.location = newLocation;
    }

    console.log(`${this.name} is exploring ${this.location}.`)
  }

}