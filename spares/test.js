// import { time } from 'console';
// import inquirer from 'inquirer';

// import { fishCare } from "../fishCare";


// const nameFunc = async () => {
//     const naming = [
//         {
//             type: 'list', // the inquirer will offer the user the option to type into the terminal
//             name: 'getName', // the name of this info will be getName
//             message: "What is your name", // the message at the prompt will be "what's your pet's name"
//             choices:['a','b','c','']
//         }
//     ]
//         const response = await inquirer.prompt(naming) // runs the prompt, and saves the response to a variable. 
//         console.log(response)
// }

// // const loopFunc = async () =>{
// //     for(let i=0; i !=100; i++) {
// //         let Timeout=1000*i
// //         setTimeout(()=>{console.log(i)}, Timeout)
// //         setTimeout(()=>{process.stdout.moveCursor(0, -1) // up one line
// //         process.stdout.clearLine(1)}, Timeout+1000)
// // }}


// // loopFunc()
// nameFunc()

import inquirer from 'inquirer';

export class Fish {
  constructor(name, image) {
    this.name = name; // the name when we make a new fish object
    this.health = 100; // the health of the fish is 100 - the most healthy. Our actions will reduce this
    this.hunger = 0; // the fish is not hungry at 0, and most hungry at 100
    this.stress = 1; // the fish is not stressed at 0, and most stressed at 10
    this.clean = 100;
    this.image = image
  }

  feeding() {
    this.health += 10;
    this.hunger -= 10;
    this.clean -= 10;
    if (this.hunger < 0) this.hunger = 0;
    if (this.health > 100) this.health = 100;
    if (this.clean < 0) this.clean = 0
    console.log(`You fed ${this.name}. He made a bit of a mess, though.`)
    return this;
  }

  cleaning() {
    this.health += 20;
    this.stress /= 2;
    this.hunger += 4;
    this.clean += 10;
    if (this.stress < 1) this.stress = 1;
    if (this.health > 100) this.health = 100;
    if (this.clean > 100) this.clean = 100;
    console.log(`You cleaned ${this.name}'s tank.`)
  }

  watching() {
    this.stress *= 2
    this.clean -= 30
    if (this.clean < 0) this.clean = 0
    console.log(`You watch ${this.name} swim about peacefully for a long time. You leave his tank light on for much longer than it should be! Algae has grown, and ${this.name} did not feel safe in the light!`)
  }
}

const fish = new Fish("Bob", "---")


const fishCare = async (fish) => {
  const optionAsk = {
    type: 'list',
    name: 'getChoice',
    message: 'Select from:',
    choices: ['Feed', 'Clean', 'Watch', '']
  }
  const optionResponse = await inquirer.prompt(optionAsk) // runs the prompt, and saves the response to a variable. 
  if (optionResponse.getChoice === 'Feed') {
    if (fish.hunger <= 0) {
      console.log('you do not need to feed your fish')
      fishCare(fish)
    } else {
      fish.feeding()
      console.log(fish.image)
      fishCare(fish)
    }
  } else if (optionResponse.getChoice === 'Clean') {
    fish.cleaning()
    console.log(fish.image)
    fishCare(fish)
  } else if (optionResponse.getChoice === 'Watch') {
    fish.watching()
    console.log(fish.image)
    fishCare(fish)
  }
}

fishCare(fish)


function printProgress() {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`${fish.name} has ${fish.health} health, he is ${fish.stress}/10 stressed and is ${fish.hunger}% hungry. His tank is ${fish.clean}% clean`);
  fish.health -= 2;
  fish.hunger += 2;
  fish.clean -= 5;
}

// if (fish.clean<=0 || fish.health<=0){
//   console.log('dead')
//   return false
// } else {

setInterval(function() {
  if (fish.clean<=0 || fish.health<=0) {
    clearInterval(this)
    console.log(` \n${fish.name} died`)
    process.exit()
  } else {
  printProgress()};
}, 1000);
