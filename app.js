const prompt = require('prompt-sync')();
const username = prompt('What is your name traveler?');

let playerLives = 1; // start with 3 lives

console.log(`Welcome, ${username}! You have ${playerLives} lives to begin your quest.`);

console.log(`You see two paths. The left path leads into a dark and eerie forest. The right path leads to a sunny, open beach.`);
const firstChoice = prompt(`Do you go "right" or "left"?`);
if(firstChoice === `right`){
    console.log(`After arriving at the beach, you find an angry ogre who wont let you pass.`)
    const secondChoice = prompt('Do you "flee" or do you "fight"?')
    if(secondChoice === `fight`){
        playerlives--
        console.log(`RIP ya died... ggs fam it was nice knowin ya`)
        console.log(`GAME OVER`)
    }
    else{
        console.log(`You ran away (good idea bc the other guy died!) and arrive at boat.`)
        const thirdChoice = prompt(``)
        if(thirdChoice === `left`){

        }
    }
} else{
    console.log(`You have chosen to go down the path through the dark and eerie forest and arrive at a box. You've found an extra life!`)
    playerLives++
    console.log(`You now have an extra life!`)
}

