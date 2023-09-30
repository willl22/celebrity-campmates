const jobs1 = ['scavenger', 'hunter', 'chef'];
const jobs2 = ['builder', 'strategist', 'defender'];
const jobs3 = ['emotional support', 'explorer', 'lazy good-for-nothing'];

const names = ['Dwayne Johnson', 'Bear Grylls', 'Jack Black', 'Scarlett Johansson', 'Kim Kardashian', 'Beyonce', 'Ryan Reynolds', 'Stephen King', 'Kathy Bates', 'Hannah Waddingham'];

const randPerc = () => Math.floor(Math.random() * 100);
const randJob = jobArr => jobArr[Math.floor(Math.random() * 3)];
const randName = nameArr => nameArr[Math.floor(Math.random() * 10)];

const createTeam = () => {
    console.log(`
    Oh no! You're trapped on a deserted tropical island!
    But don't worry, a bunch of celebrities are with you too!
    You've assigned them the following roles:
    
    Your ${randJob(jobs1)} is ${randName(names)}
    
    Your ${randJob(jobs2)} is ${randName(names)}
    
    Your ${randJob(jobs3)} is ${randName(names)}
    
    `);
};

const calcSurvival = (perc) => {
    if (perc > 75) {
        console.log(`
    What a team! Your chance of survival is:
    ${perc}%
    I like those odds!
        `);
    } else if (perc > 50) {
        console.log(`
    What a team! Your chance of survival is:
    ${perc}%
    Not bad, go for it!
        `);
    } else if (perc > 20) {
        console.log(`
    What a team! Your chance of survival is:
    ${perc}%
    You err... you got this...
        `);
    } else {
        console.log(`
    What a team! Your chance of survival is:
    ${perc}%
    Yikes...
        `);
    };
}

createTeam();
calcSurvival(randPerc());