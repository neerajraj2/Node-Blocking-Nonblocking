var usr = require('./getUser');

console.log('Start fetching User John info');

usr.getUser('John',(user)=>{
    console.log(user);
});

console.log('Start fetching User Tony info');

usr.getUser('Tony',(user)=>{
    console.log(user);
});

var sum = 1 + 2;
console.log('This sum is:' + sum);

