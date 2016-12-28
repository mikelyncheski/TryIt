// https://gist.github.com/mpj/8256bdfae3168733a0bf733c604142d0

const dragonEvents = [
    { type: 'attack', value: 12, target: 'player-dorkman' },
    { type: 'yawn', value: 40 },
    { type: 'eat', target: 'horse' },
    { type: 'attack', value: 23, target: 'player-fluffykins' },
    { type: 'attack', value: 12, target: 'player-dorkman' },
]

// With functions

// const totalDamageOnDorkman = dragonEvents
//     .filter(function (event) {
//         return event.type === "attack";
//     })
//     .filter(function (event) {
//         return event.target === "player-dorkman";
//     })
//     .map(function (event) {
//         return event.value
//     })
//     .reduce(function (previous, value) {
//         return previous + value;
//     });

// First cut

// const totalDamageOnDorkman = dragonEvents
//     .filter((event) => {
//         return event.type === "attack";
//     })
//     .filter((event) => {
//         return event.target === "player-dorkman";
//     })
//     .map((event) => {
//         return event.value
//     })
//     .reduce((previous, value) => {
//         return previous + value;
//     });



// Even cleaner

const totalDamageOnDorkman = dragonEvents
    .filter(e => e.type === "attack")       // If one argument no parens needed!
    .filter(e => e.target === "player-dorkman")
    .map(e => e.value)
   // .reduce((previous, value) => (previous || 0) + value);
   .reduce((previous, value) => previous + value, 0);   // 0 is the initial value.




//https://www.youtube.com/watch?v=PB_d3uBkQPs


// if you add destructuring to the function you can avoid the Repetition of event,  and make the functions totally generic and self Documented
// ({type}) => type === 'attack'



console.log('totalDamageOnDorkman\n', totalDamageOnDorkman);

