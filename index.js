let fruits = ['apple', 'orange', 'banana'];

fruits.push('lemon'); // inmutable (conserva espacio en memoria)

fruits = ['peach' ,...fruits, 'pineapple'];

console.log(fruits);

let user = {};

user = {
	name: '',
	age: 0,
	curp: ''
};

user = {
	...user,
	address: '',
	rfc: '',
	age: ''
};

console.log(user);

const myFunction = (...myArray) => {
	console.log(myArray);
};

myFunction(1,'hola', false);


const array2 = [1,2,3,4,5,6,7,8,9,0];

for(const iterator of array2){
	console.log(iterator); // 1,2,3,4,5,6,7,8,9,0
}

for(const index in array2){
	console.log(index); // 0,1,2,3,4,5,6,7,8,9
}

const map = new Map();

for(const [key, value] of map){ 
        console.log(key,value); // undefined
}

console.log(map); // 0: Entries



