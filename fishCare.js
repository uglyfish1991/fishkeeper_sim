//     #######################################
//     #                                     #
//     #              Fish Care              #
//     #                                     #
//     #######################################

// ========================================================================================================

// The function or function(s) to care for the fish. Actions include feeding + doing water changes

// ========================================================================================================
import inquirer from 'inquirer';

export const fishCare = async (fish) => {
    const optionAsk = {
        type: 'list',
        name: 'getChoice',
        message: 'Select from:',
        choices: ['Feed', 'Clean','Watch','']
    }
    const optionResponse = await inquirer.prompt(optionAsk) // runs the prompt, and saves the response to a variable. 
    if (optionResponse.getChoice === 'Feed') {
        if (fish.hunger <=0) {
            console.log('you do not need to feed your fish')
            fishCare(fish)
        } else {
            fish.feeding()
            console.log(fish.image)
            fishCare(fish)
        }
    } else if (optionResponse.getChoice==='Clean'){
        fish.cleaning()
        console.log(fish.image)
        fishCare(fish)
    } else if (optionResponse.getChoice==='Watch'){
        fish.watching()
        console.log(fish.image)
        fishCare(fish)
    }


}

// let counter = 0;
// function printProgress() {
//   process.stdout.clearLine();
//   process.stdout.cursorTo(0);
//   process.stdout.write('Health is: ' + counter);
//   counter++;
// }

// setInterval(function() {
//   printProgress();
// }, 1000);

