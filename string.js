

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

// condtion checked 


// plus opertor 

// let addPlus = 10

// addPlus += 7

// console.log('Result ', addPlus);