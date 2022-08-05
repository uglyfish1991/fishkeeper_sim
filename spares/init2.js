import {Fish,Saltwater} from '../fishClass.js'; // to be imported, they must be exported on the file they're called from
import inquirer from 'inquirer';
import {discus,salt} from '../asciipics.js';
import chalk from 'chalk';
import figlet from 'figlet';


const main = ()=> {
    console.log("Welcome to the fish store! I hope you are looking forward to buying your fish!")
    console.log("Before we begin - what is your name?")
    const naming = [
    {
        type: 'input', // the inquirer will offer the user the option to type into the terminal
        name: 'getName', // the name of this info will be getName
        message: "   >   " // the message at the prompt will be "what's your pet's name"
    }
]

    const response = inquirer.prompt(naming) // runs the prompt, and saves the response to a variable. 
    let playerName = response.getName
    console.log(`Hello ${playerName}! Before we begin, I'll need to get some information about your set-up.`)
    tankInfo()
    console.log(stress)
}

const tankInfo = ()=>{
    console.log("How big is the tank you've bought?")
    const tankSize = {
        type: 'list',
        name: 'getSize',
        message: 'Select from:',
        choices: ['Big','Medium','Small']
    }

    const tankResponse = inquirer.prompt(tankSize) // runs the prompt, and saves the response to a variable. 
    let stress =0
    if (tankResponse.getSize==='Big'){
        console.log('A big tank! Excellent! Fish like space!')
        return stress
    } else if (tankResponse.getSize==='Medium'){
        console.log('A medium tank? That will be fine while your fish is young, but it could restict its growth')
        stress = 2
        return stress
    } else {
        console.log('A small tank? Hmm...you should consider upgrading as soon as you can')
        stress = 5
        return stress
    }

}

// const naming = [
//     {
//         type: 'input', // the inquirer will offer the user the option to type into the terminal
//         name: 'getName', // the name of this info will be getName
//         message: "what's your pet's name?" // the message at the prompt will be "what's your pet's name"
//     }
// ]

// const response = await inquirer.prompt(naming) // runs the prompt, and saves the response to a variable. 

// const saltwater =[
//     {
//         type: 'input',
//         name: 'saltWater',
//         message: 'Saltwater?'
//     }
// ]

// const saltResponse = await inquirer.prompt(saltwater) // runs the prompt, and saves the response to a variable. 

// if (saltResponse.saltWater == 'yes'){
//     const pet = new Saltwater(response.getName)
//     pet.image=salt
//     console.log("This is fish")
//     console.log(pet.image)
// } else {
//     const pet = new Fish(response.getName)
//     pet.image = discus
//     console.log("This is fish")
//     console.log(pet.image)
// }

figlet('Fish  Sim  2022', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    main()
});




// I want to make it so the user puts their fish in a tank and the tank also impacts the health