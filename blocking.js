var usr = require('./getUserSync');

console.log('Start fetching User John info');
var user1 = usr.getUser('John');
console.log('John info retrieved successfully.');

console.log('Start fetching User Tony info');
var user2 = usr.getUser('Tony');
console.log('Tony info retrieved successfully.');

var sum = 1 + 2;
console.log('This sum is:' + sum);

