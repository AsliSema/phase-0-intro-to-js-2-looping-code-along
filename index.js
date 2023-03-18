// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];
const subject = "surprise"
const messages = [];
function writeCards(array, subject){
    for(let i = 0; i < array.length; i++){
        messages[i] = `Thank you, ${array[i]}, for the wonderful ${subject} gift!`
        //messages.push(`Thank you, ${array[i]}, for the wonderful ${subject} gift!`) //or
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
