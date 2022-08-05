//     #######################################
//     #                                     #
//     #            Stress Decider           #
//     #                                     #
//     #######################################

// ========================================================================================================

// The 2 x main functions - the figlet function for the word art, and the main function that calls all other functions
// imports below

// ========================================================================================================

import inquirer from 'inquirer';

export const tankInfo = async ()=>{
    let stress = 0;
    console.log("How big is the tank you've bought?")
    const tankSize = {
        type: 'list',
        name: 'getSize',
        message: 'Select from:',
        choices: ['Big','Medium','Small']
    }
    const tankResponse = await inquirer.prompt(tankSize) // runs the prompt, and saves the response to a variable. 
    if (tankResponse.getSize==='Big'){
        console.log('A big tank! Excellent! Fish like space!')
        return stress
    } else if (tankResponse.getSize==='Medium'){
        console.log('A medium tank? That will be fine while your fish is young, but it could restrict its growth')
        stress = 2
        return stress
    } else {
        console.log('A small tank? Hmm...you should consider upgrading as soon as you can')
        stress = 5
        return stress
    }
}

export const tankCycle = async ()=>{
    let cyc = 0;
    console.log("How long have you been cycling your tank?")
    const cycAmount = {
        type: 'list',
        name: 'getCyc',
        message: 'Select from:',
        choices: ['A month','A week','3 days','I haven\'t cycled']
    }
    const cycResponse = await inquirer.prompt(cycAmount) // runs the prompt, and saves the response to a variable. 
    if (cycResponse.getCyc==='A month'){
        console.log('Well done! Cycling a tank is very important to grow the correct bateria in the water column! It is necessary for fish health!')
        return cyc
    } else if (cycResponse.getCyc==='A week'){
        console.log('A week isn\'t the best length of time for a cycle, but it\'s a start. Make sure to do regular water changes and use a good water treatment to keep your fish healthy')
        cyc = 3
        return cyc
    } else if (cycResponse.getCyc==='3 days'){
        console.log('3 days isn\'t the best length of time for a cycle, but it\'s a start. Make sure to do regular water changes and use a good water treatment to keep your fish healthy, but it will be tough')
        cyc = 5
        return cyc
    } else {
        console.log('I am concerned for your fish')
        cyc = 8
        return cyc
    }
}