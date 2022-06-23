import $ from 'jquery';

export default function Character(xP, strength, knowledge, command) {
  this.xP = xP;
  this.strength = strength;
  this.knowledge = knowledge;
  this.command = command;
  }

  let newCharacter1 = new Character();
  

  Character.prototype.AddStats = function () {
    if (this.xP = 10) {
      this.strength = 1, this.knowledge = 1, this.command = 1;
    } 
  }

  // Character.prototype.LevelUp = function () {

  // }
  //  class Stats extends Character {
  //   constructor(strength) { // add back properties as needed
  //      this.strength = strength;
  //     // this.knowledge = knowledge;
  //     // this.command = command;
  //  }
   

  //     levelUp() {
  //     if (this.xP = 10) {
  //       this.strength += 1;
  //       // this.knowledge += 1;
  //       // this.command += 1;
  //       this.xP = 0;
  //     } else {
  //     } 
  //     return Stats
  //   }
  // }


