//     #######################################
//     #                                     #
//     #              Main File              #
//     #                                     #
//     #######################################

// ========================================================================================================

// The 2 x main functions - the figlet function for the word art, and the main function that calls all other functions
// imports below

// ========================================================================================================
import { Fish, Saltwater } from './fishClass.js'; // to be imported, they must be exported on the file they're called from
import inquirer from 'inquirer';
import { discus, salt } from './asciipics.js';
import chalk from 'chalk';
import figlet from 'figlet';
import { tankInfo, tankCycle } from './tankSize.js'
import { fishPick } from './fishPick.js'
import { fishCare } from './fishCare.js'
// ========================================================================================================

const main = async () => {
    console.log("Welcome to the fish store! I hope you are looking forward to buying your fish!")
    console.log("Before we begin - what is your name?")
    const naming = [
        {
            type: 'input', // the inquirer will offer the user the option to type into the terminal
            name: 'getName', // the name of this info will be getName
            message: "   >   " // the message at the prompt will be "what's your pet's name"
        }
    ]
    const response = await inquirer.prompt(naming) // runs the prompt, and saves the response to a variable. 
    let playerName = response.getName
    console.log(`Hello ${playerName}! Before we begin, I'll need to get some information about your set-up.`)
    let stress = await tankInfo()
    console.log(stress)
    console.log('Thanks for letting me know, now, is your tank cycled?')
    let cyc = await tankCycle()
    stress += cyc
    console.log("Now it is time to pick your fish")
    let fish = await fishPick(stress)
    console.log("you take your fish home")
    fishCare(fish)
}



figlet('Fish  Sim  2022', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    main()
});




// I want to make it so the user puts their fish in a tank and the tank also impacts the health