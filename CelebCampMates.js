const jobs1 = ['scavenger', 'hunter', 'chef'];
const jobs2 = ['builder', 'strategist', 'defender'];
const jobs3 = ['emotional support', 'explorer', 'lazy good-for-nothing'];

const names = ['Dwayne Johnson', 'Bear Grylls', 'Jack Black', 'Scarlett Johansson', 'Kim Kardashian', 'Beyonce', 'Ryan Reynolds', 'Stephen King', 'Kathy Bates', 'Hannah Waddingham'];

const randPerc = () => Math.floor(Math.random() * 100);
const randJob = jobArr => jobArr[Math.floor(Math.random() * 3)];
const randName = nameArr => nameArr[Math.floor(Math.random() * 10)];
