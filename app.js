console.log('working');
console.log('status');

// function started 

details = {
    name : 'simeon',
    age : 30,
    mail : 'simeon1929@gmail.com'
}

console.log('your age is ', details.age);

console.log('diffeence between let Var const');

console.log('LET');

let a = 10
console.log('let A =' , a);

console.log('a value changes from 10 to 20');
a = 20

console.log('let changes A = ', a);

console.log(' Var example');

var x = 10 
console.log('Var = ', x);
console.log('Var value chnages from 10 to 20');
x = 20

console.log('var changes= ', x );

console.log('const');

const xy = 20 
console.log('const xy =', xy);
// xy = 30
// console.log('const chnanges', xy);

// 


console.log('String started');

// string 
let stringEx = 'Simeon'
console.log('String Example', stringEx);

// String concatination
let firstName = 'simeon'
let lastName = 'haries'

let fullName = firstName + ' ' + lastName
console.log('cocatation', fullName);
//String length 
console.log('string length ', fullName.length);

//String methods
console.log('Upper case ', fullName.toUpperCase());
console.log('Lower case ', fullName.toLocaleLowerCase());
console.log('Postion of S' , fullName.indexOf('h'))
console.log('Slice', fullName.slice(0, 5));

// Javascript as a object when we use new

let name = new String('simeon')
console.log(name);

// Object structure 

let sampObj = {
    name : 'simeon',
    age : 20,
}

console.log('Sample obj', sampObj);

// check string and new sting equal or not 

let testSring = 'Simeon'
let testNewStr = new String ('Simeon')

if(testSring == testNewStr) {
    console.log('condtion true');
} else {
    console.log('condtion wrong');
}