

// data types;
// 1. string
let name = 'suraj';
console.log(name);



// 3. boolean ( true=1 , false=0);
let  isApproved = true;

// 4. null;
let firstName = null;

// 5. undefined;
let lastName = undefined;

// 6. symbol;
let sym = Symbol();




// operators;

// 1. arithmatic operators;( + , - , * , / , % , ** , ++ , --)
let x = 10;
let y = "10";

console.log(x + y);

// 2. comparison operators;( > , < , >= , <= , == , === , != , !==);

// console.log(x === y);
// value check + data type check;

// 3. logical operators;( &&(and) , ||(or) , !(not));

let c = 30;
let d = 20;

console.log(c > 20 && d == 20);
// (true && false) = false;
// (true && true) = true;

console.log(c == 20 || d == 20);
// (true || true) = true;
// (false || true) = true;

console.log(!(c == 20));


// if else statement;

let age = 17;

if(age >=18){

    console.log('you are eligible');
}
else if(age == 17){
    console.log('you are 17');
}
else{
    console.log('you are not eligible');
}


// loops;
for(let number=1;number<=100;number++)
{
    console.log(number);
}

// functions;

function add(){
    let a = 10;
    let b = 20;
    return a + b;
}
console.log("Add of two number",add());