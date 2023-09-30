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
    
    What a team! Your chance of survival is:
    ${randPerc()}%
    `);
    

};

createTeam();