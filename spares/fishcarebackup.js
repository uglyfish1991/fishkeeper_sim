//     #######################################
//     #                                     #
//     #              Fish Care              #
//     #                                     #
//     #######################################

// ========================================================================================================

// The function or function(s) to care for the fish. Actions include feeding + doing water changes

// ========================================================================================================
import inquirer from 'inquirer';

const options = async (fish) => {
    const optionAsk= {
        type: 'list',
        name: 'getChoice',
        message: 'Select from:',
        choices: ['Feed','Clean',]
    }
    const optionResponse = await inquirer.prompt(optionAsk) // runs the prompt, and saves the response to a variable. 
    if (optionResponse.getChoice==='Feed'){
        if (fish.hunger >=0) {
            console.log('you do not need to feed your fish')
            let returning = [true,fish]
            return returning
        } else {
        fish.hunger -=10
        fish.health +=4
        let returning = [true,fish]
        console.clear()
        return returning
    }
}
}

export const fishCare = async (fish) =>{
        
    for(let i=100; i !=0; i--) {
        let Timeout = 2000*i
        setTimeout(()=>{fish.health-=1}, Timeout)
    }

    console.log(fish.image)
    console.log('you are caring for your fish')
    console.log(`${fish.name} is having a great time`)
    console.log(`Stats: Health${fish.health} Stress${fish.stress} Hunger${fish.hunger}`)
    let check = await(options(fish))
    if (fish) {fishCare(fish)}  
    }










    //     #######################################
//     #                                     #
//     #              Fish Care              #
//     #                                     #
//     #######################################

// ========================================================================================================

// The function or function(s) to care for the fish. Actions include feeding + doing water changes

// ========================================================================================================
import inquirer from 'inquirer';

//const options = async (fish) => {
    // const optionAsk = {
    //     type: 'list',
    //     name: 'getChoice',
    //     message: 'Select from:',
    //     choices: ['Feed', 'Clean','']
    // }
    // const optionResponse = await inquirer.prompt(optionAsk) // runs the prompt, and saves the response to a variable. 
    // if (optionResponse.getChoice === 'Feed') {
    //     if (fish.hunger > 0) {
    //         console.log('you do not need to feed your fish')
    //         options(fish)
    //     } else {
    //         fish.feeding()
    //         options(fish)
    //     }
    // }
//}

export const fishCare = async (fish) => {
    // let check = await (options(fish))
    // if (check) { fishCare(fish) }


console.log(fish.image)
console.log('you are caring for your fish')

const optionAsk = {
    type: 'list',
    name: 'getChoice',
    message: 'Select from:',
    choices: ['Feed', 'Clean','']
}
const optionResponse = await inquirer.prompt(optionAsk) // runs the prompt, and saves the response to a variable. 
if (optionResponse.getChoice === 'Feed') {
    if (fish.hunger > 0) {
        console.log('you do not need to feed your fish')
        options(fish)
    } else {
        fish.feeding()
        options(fish)
    }
}

function printProgress() {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${fish.name} has ${fish.health} health, he is ${fish.stress}/10 stressed and is ${fish.hunger}% hungry`);
    fish.health--;
    fish.hunger++;
}

setInterval(function () {
    printProgress();
}, 1000);


}

// console.log(fish.image)
// console.log('you are caring for your fish')
// function printProgress() {
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(`${fish.name} has ${fish.health} health, he is ${fish.stress}/10 stressed and is ${fish.hunger}% hungry`);
//     fish.health--;
//     fish.hunger++;
// }

// setInterval(function () {
//     printProgress();
// }, 1000);



