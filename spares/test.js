import { time } from 'console';
import inquirer from 'inquirer';


const nameFunc = async () => {
    const naming = [
        {
            type: 'list', // the inquirer will offer the user the option to type into the terminal
            name: 'getName', // the name of this info will be getName
            message: "What is your name", // the message at the prompt will be "what's your pet's name"
            choices:['a','b','c','']
        }
    ]
        const response = await inquirer.prompt(naming) // runs the prompt, and saves the response to a variable. 
        console.log(response)
}

// const loopFunc = async () =>{
//     for(let i=0; i !=100; i++) {
//         let Timeout=1000*i
//         setTimeout(()=>{console.log(i)}, Timeout)
//         setTimeout(()=>{process.stdout.moveCursor(0, -1) // up one line
//         process.stdout.clearLine(1)}, Timeout+1000)
// }}


// loopFunc()
nameFunc()

let counter = 0;
function printProgress() {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write('Health is: ' + counter);
  counter++;
}

setInterval(function() {
  printProgress();
}, 1000);

