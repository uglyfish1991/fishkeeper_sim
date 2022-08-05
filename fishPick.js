//     #######################################
//     #                                     #
//     #            Instantiation            #
//     #                                     #
//     #######################################

// ========================================================================================================

// The instantiation of the object from the fish class. Defining all stats and stuff

// ========================================================================================================

import inquirer from 'inquirer';
import {Fish,Saltwater} from './fishClass.js'; // to be imported, they must be exported on the file they're called from
import {discus,salt} from './asciipics.js'; // fish images

export const fishPick = async (stress)=>{
    const naming = [
        {
            type: 'input', // the inquirer will offer the user the option to type into the terminal
            name: 'getName', // the name of this info will be getName
            message: "what's your pet's name?" // the message at the prompt will be "what's your pet's name"
        }
    ]

    const response = await inquirer.prompt(naming) // runs the prompt, and saves the response to a variable. 

    const waterType =[
        {
            type: 'list',
            name: 'water',
            message: 'What type of water does your fish prefer?',
            choices: ['Freshwater','Saltwater']
        }
    ]

    const waterResponse = await inquirer.prompt(waterType) // runs the prompt, and saves the response to a variable. 

    if (waterResponse.water == 'Saltwater'){
        const pet = new Saltwater(response.getName)
        pet.image=salt
        pet.stress = stress
        return pet
    } else {
        const pet = new Fish(response.getName)
        pet.image = discus
        pet.stress = stress
        return pet
    }
}