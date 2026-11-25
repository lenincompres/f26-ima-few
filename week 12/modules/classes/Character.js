export default class Character {

  constructor(name, curiosity = 3, greeting = "Hello!") {
    this.name = name;
    this.curiosity = curiosity;
    this.greeting = greeting;
    this.visit = 0;
  }

  greet() {
    this.visit++;
    return `${this.name}: ${this.greeting}`;
  }

  respond() {
    if (this.curiosity > 5) {
      return `${this.name}: Tell me something strange.`;
    }
    return `${this.name}: I have nothing more to say.`;
  }

}