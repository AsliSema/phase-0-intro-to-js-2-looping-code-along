// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
} */

const names = ["Guadalupe", "Ollie", "Aki"];
const subject = "surprise"
const messages = [];
function writeCards(array, subject){
    for(let i = 0; i < array.length; i++){
        messages[i] = `Thank you, ${array[i]}, for the wonderful ${subject} gift!`
    }
    return messages
}

function countDown(){
    let number = 10;
    while(number >= 0){
        console.log(number);
        number--
    }
}

writeCards(names, subject);
countDown();