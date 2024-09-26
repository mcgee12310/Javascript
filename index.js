// print
console.log("hello");
console.log(`hello`);
// thong bao
/*
window.alert(`Error`);
window.alert(`hello`);
*/

document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "I like girl";

// biến
let x = 2.1;
console.log(typeof x);
console.log(x);
console.log(`Your gpa is ${x}`);

let name = "Hieu";
console.log(typeof name);
console.log(name);
console.log(`Your name is ${name}`);

let online = true;
console.log(typeof online);
console.log(`Bro is online: ${online}`);

document.getElementById("p1").textContent = `Your name is ${name}`;
document.getElementById("p2").textContent = `${x}`;
document.getElementById("p3").textContent = `Online status: ${online}`;

// How to accept user input
// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox
// let username = window.prompt ("What's your username?");
let username;
document.getElementById("a4_summit").onclick = function(){
    username = document.getElementById("a4").value;
    console.log(username);
    document.getElementById("a4_Welcome").textContent=`Hello ${username}`;
}


// type conversion=change the datatype of a value to another (strings, numbers, booleans)
x = "pizza";
let y = "pizza";
let z = "pizza";
x = Number (x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// const = a variable that can't be changed
let PI = 3.14159;
let radius;
let circumference;
document.getElementById("a6_summit").onclick = function(){
    radius = document.getElementById("a6").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    console.log(circumference);
    document.getElementById("a6_answer").textContent=`${circumference}cm`;
}





// Math = built-in object that provides a collection of properties and methods
x = 3;
y= 2;
z = 1;
//z =Math.round(x);
//z=Math.floor(x);
//z = Math.ceil(x);
//z =Math.trunc(x);
//z =Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z= Math.sin(x);
//z=Math.cos(x);
//z=Math.tan(x);
//z=Math.abs(x);
//z=Math.sign(x);
let max = Math.max(x, y, z); 
let min = Math.min(x, y, z);


// RANDOM NUMBER GENERATOR
min = 1;
max = 6;
let randomNum;
const roll = document.getElementById("a9_roll"); 
roll.onclick= function(){
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
    document.getElementById("a9_label").textContent=randomNum;
}


// IF STATEMENTS =
// if a condition is true, execute some code if not, do something else
let age;
const a10 = document.getElementById("a10"); 
const a10_summit = document.getElementById("a10_summit"); 
const a10_result = document.getElementById("a10_result"); 
a10_summit.onclick = function(){
    age = a10.value;
    age = Number(age);
    if(age >= 100){
        a10_result.textContent="You are TOO OLD to enter this site";
    }
    else if(age == 0){
        a10_result.textContent="You can't enter. You were just born.";
    }
    else if(age >= 18){
        a10_result.textContent="You are old enough to enter this site";
    }
    else if(age< 0){
        a10_result.textContent="Your age can't be below 0";
    }
    else{
        a10_result.textContent="You must be 18+ to enter this site";
    }
}

//a11
const subscribe = document.getElementById("subscribe"); 
const payment = document.getElementById("payment"); 
const a11_summit = document.getElementById("a11_summit"); 
const a11_result1 = document.getElementById("a11_result1"); 
const paymentResult = document.getElementById("a11_result2"); 

a11_summit.onclick = function(){
    a11_result1.textContent = subscribe.checked ? "Subcribed" : "Not subcribed";

    switch(payment.value){
        case "visa":paymentResult.textContent = `You are paying with Visa`; break;
        case "mastercard":paymentResult.textContent = `You are paying with MasterCard`; break;
        case "giftcard":paymentResult.textContent = `You are paying with Giftcard`; break;
        default: ;
    }
}

// string methods
let userName = "Ceck";
console.log(userName.charAt(0)); 
console.log(userName.indexOf("e")); 
console.log(userName.lastIndexOf("e")); 
console.log(userName.length); 
userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();
userName = userName.repeat(3);


userName = "BroCode";
let result = userName.startsWith(" ");
if(result){
    console.log("Your username can't begin with ' '");
}
else{
    console.log(userName);
}
result = userName.endsWith(" ");
if(result){
    console.log("Your username can't end with ' '");
}
else{
    console.log(userName);
}
result = userName.includes(" ");
if(result){
    console.log("Your username can't include ' '");
}
else{
    console.log(userName);
}

let phoneNumber="123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "");
phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);


// string slicing = creating a substring
// from a portion of another string
// string.slice(start, end)
let fullName = "Bro Code";
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+1);
let firstChar = fullName.slice(0, 1); 
let lastChar = fullName.slice(-1);
console.log(lastName);


username = "username: ";
//---- NO METHOD CHAINING ---
username = username.trim();
let letter = username.charAt(0); letter = letter.toUpperCase();
let extraChars = username.slice(1); extraChars = extraChars.toLowerCase(); username = letter + extraChars;

//---- METHOD CHAINING ---
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);


// logical operators = used to combine or manipulate boolean values (true or false)
// AND = &&
// OR = ||
// NOT = !


//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator
if(PI === "3.14") console.log("That is Pi");
else console.log("That is NOT Pi");


// while loop = repeat some code WHILE some condition is true
/*userName = "";
while(userName === "" || userName === null){
    userName = window.prompt(`Enter your name: `);    
}
console.log(`Hello ${userName}`);*/
/*
let loggedIn = true;
let password;
while(!loggedIn){
    username = window.prompt (`Enter your username`); 
    password = window.prompt (`Enter your password`);
    if(username === "myUsername" && password === "myPassword"){ 
        loggedIn = true;
        console.log("You are logged in!");
    } else console.log("Invalid credentials! Please try again");
}*/


/* NUMBER GUESSING GAME
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
let guess;
let running = true;
while(running){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`); 
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            window.alert(`Correct! The answer is ${answer}. ${attempts} attempts.`); running = false;
        } 
    }
}*/


//  function = A section of reusable code.
//  A section of reusable code.
//  Declare code once, use it whenever you want. Call the function to execute that code.
function happyBirthday (username, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!"); 
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!"); 
    console.log(`You are ${age} years old`);
}
happyBirthday("BroCode", 25);




// array = a variable like structure that can hold // more than 1 value
let fruits = ["apple", "orange", "banana"];

//fruits.push("coconut");
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

let numOfFruits = fruits.length;
let index = fruits.indexOf("mango");
fruits.sort().reverse();
for(fruit of fruits) console.log(fruit);


// spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements
// (unpacks the elements)
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); 
let minimum = Math.min(...numbers);
console.log(minimum);

username = "Bro Code";
let letters = [...username].join("-");
console.log(letters);

fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);


// rest parameters = (...rest) allow a function work with a variable number of arguments 
// by bundling them into an array
// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array
function openFridge(...foods){
    console.log(foods);
}
function getFood(...foods) { 
    return foods;
}
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";
openFridge (food1, food2, food3, food4, food5);
foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);


function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    return result;
    }
}
function getAverage (...numbers){
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
return result / numbers.length;
    }
let total = getAverage(75, 100, 85, 90, 50);
console.log(total);

function combineStrings(...strings){
    return strings.join(" ");
}
fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName);




// RANDOM PASSWORD GENERATOR
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <=0) return `(password must be atleast 1)`
    if(allowedChars.length===0) return `(atleast select 1 set)`;

    for(i=0; i<length; i++){
        const random = Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[random];
    }

    return password;
}
const passwordLength = 16;
const includeLowercase = true;
const includeUppercase = true; 
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`);


// callback = a function that is passed as an argument to another function.
// used to handle asynchronous operations: 
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases
// "Hey, when you're done, call this next."

hello (goodbye);

function hello(callback) {
    console.log("Hello!");
    callback();
}
function goodbye(){
    console.log("Goodbye!");
}


// forEach() = method used to iterate over the elements
// of an array and apply a specified function (callback) to each element, index, array are provided
// array.forEach(callback)
numbers = [1, 2, 3, 4, 5];
numbers.forEach(double);
numbers.forEach(display);
function display(element){console.log(element);}
function double (element, index, array) { array[index] = element * 2;}

fruits = ["apple", "orange", "banana", "coconut"];
fruits.forEach(capitalize); 
fruits.forEach(display);
function uppercase (element, index, array){ array[index] = element.toUpperCase();
}
function lowercase (element, index, array){ array[index] = element.toLowerCase();
}
function capitalize (element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}


// .map() = accepts a callback and applies that function
// to each element of an array, then return a new array
numbers = [1, 2, 3, 4, 5];
numbers = numbers.map(square);
console.log(numbers);
function square (element){
    return Math.pow(element, 2)
}


const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);
function formatDates (element){
    const parts = element.split("-");
    return `${parts [2]}/${parts[1]}/${parts[0]}`;
}


// .filter() = creates a new array by filtering out elements
numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven); 
let oddNums = numbers.filter(isOdd);
console.log(evenNums);
function isEven (element){
    return element % 2 === 0;
}
function isOdd(element) {
    return element % 2 !== 0;
}

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
console.log(shortWords);
function getShortWords (element){
    return element.length <= 6;
}

// .reduce() = reduce the elements of an array to a single value
//
const prices = [5, 30, 10, 25, 15, 20];
total = prices.reduce(sum);
console.log(` $${total.toFixed(2)}`);
function sum(previous, next){ 
    return previous + next;
}

const grades = [75, 50, 90, 80, 65, 95];
maximum = grades.reduce(getMax); 
minimum = grades.reduce(getMin);
console.log(maximum); 
console.log(minimum);
function getMax (accumulator, element){ return Math.max(accumulator, element);}
function getMin(accumulator, element){ return Math.min(accumulator, element);}

// function expressions = a way to define functions as // values or variables
numbers = [1, 2, 3, 4, 5, 6];
let squares = numbers.map(function(element){ 
                                return Math.pow(element, 2);
                            });
console.log(squares);


// arrow functions = a concise way to write function expressions good for simple functions 
// that you use only once 
// (parameters) => some code
hello = (name, age) => { console.log(`Hello ${name}`); console.log(`You are ${age} years old`)};
hello("Bro", 25);

numbers = [1, 2, 3, 4, 5, 6];
squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);


// objec t= A collection of related properties and/or methods
// Can represent real world objects (people, products, places) object = {key:value,function()};
// this = reference to the object where THIS is used  
// (the object depends on the immediate context)
// person.name = this.name
//
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    food: "pizza",
    sayHello: function(){console.log(`Hi I am ${this.firstName}.`);},
    eat: function(){console.log(`${this.firstName} is eating ${this.food}.`)},
}
let person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    food: "pizza",
    sayHello: function(){console.log(`Hi I am Patrick.`);},
    eat: function(){console.log(`${this.firstName} is eating ${this.food}.`)},
}
console.log(person1.firstName);
console.log(person2.lastName);
person1.eat();
person2.sayHello();

// constructor = special method for defining the properties and methods of objects
//
function Car (make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}.`)}
}
const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car ("Chevrolet", "Camaro", 2025, "blue");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor function 
// ex. static keyword, encapsulation, inheritance
//
class Product{
    constructor (name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`${this.name}`);
        console.log(`${this.price.toFixed(2)}`);
    }

    calculateTotal(saleTax){
        return this.price+(this.price*saleTax);
    }
}

const product1 = new Product("Shirts", 19.99);
const product2 = new Product("Pants", 25.99);

product2.displayProduct();
console.log(`${product2.calculateTotal(0.1)}`);

// static = keyword that defines properties or methods that belong
//            to a class itself rather than the objects created
//            from that class (class owns anything static, not the objects)
//
class MathUtil{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius*2;
    }
    static getCircumference(radius){
        return radius*2*this.PI;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getCircumference(2));

class User{
    static count = 0;
    constructor(username){
        this.username = username;
        User.count ++;
    }
    sayHello(){console.log(`Hi I am Patrick.`);};
    static getCount(){
        console.log(`${User.count}`);
    }
}
const User1 = new User("A");
const User2 = new User("B");
const User3 = new User("C");
User1.sayHello();
User.getCount();

// inheritance = allows a new class to inherit properties and methods from an existing class 
// (parent -> child) helps with code reusability
//
/*class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
    console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}
const rabbit = new Rabbit(); const fish = new Fish(); const hawk = new Hawk();
fish.swim();*/

// super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass) this this object
// super = the parent
//
//
class Animal{
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}
class Rabbit extends Animal{
    constructor (name, age, runSpeed) { 
        super (name, age);
        this.runSpeed = runSpeed;
    }
    run(){
    console.log(`This ${this.name} can run`); 
    super.move(this.runSpeed);
    }
}
const rabbit = new Rabbit("rabbit", 1, 25); 
console.log(rabbit.runSpeed);
rabbit.run();

// getter = special method that makes a property readable 
// setter = special method that makes a property writeable
// validate and modify a value when reading/writing a property
class Rectangle{
    constructor (width, height){
        this.width = width;
        this.height = height;
    }
    set width (newwidth) {
        if (newwidth > 0) {
            this._width = newwidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    set height (newheight) {
        if (newheight > 0) {
            this._height = newheight;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    get area(){
        return (`${(this._width*this._height).toFixed(1)}`);
    }
}
const rectangle = new Rectangle(-1000000, "pizza");
rectangle.width=3;
rectangle.height=4;
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person{
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName (newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }
    set lastName (newlastName){
        if(typeof newlastName === "string" && newlastName.length > 0){
            this._lastName = newlastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }
    set age (newAge){
        if(typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be > 0");
        }
    }
    get firstName(){return this._firstName}
    get lastName(){return this._lastName}
    get fullName(){return this._lastName + " "+this._firstName}
    get age(){return this._age}
}
let person = new Person("Hieu", "Nguyen", 15);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

// destructuring = extract values from arrays and objects,
// then assign them to variables in a convenient way 
// [] to perform array destructuring
// {} to perform object destructuring

//EXAMPLE 1
// SWAP THE VALUE OF TWO VARIABLES
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);
//EXAMPLE 2
// SWAP 2 ELEMENTS IN AN ARRAY
let colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors [4]] = [colors [4], colors[0]];
console.log(colors);
//EXAMPLE 3
// ASSIGN ARRAY ELEMENTS TO VARIABLES
colors = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
//EXAMPLE 4
// EXTRACT VALUES FROM OBJECTS
const person3 = {
    firstName1: "Spongebob", 
    lastName1: "SquarePants", 
    age1: 30,
    job: "Fry Cook",
}
const person4 = {
    firstName1: "Patrick",
    lastName1: "Star",
    age1: 34,
}
const {firstName1, lastName1, age1, job="Unemployed"} = person3;
console.log(firstName1);
console.log(lastName1);
console.log(age1);
console.log(job);

function displayPerson ({firstName1, lastName1, age1, job="Unemployed"}){ 
    console.log(`name: ${firstName1} ${lastName1}`);
    console.log(`age: ${age1}`);
    console.log(`job: ${job}`);
}
displayPerson(person4);

// nested objects = Objects inside of other Objects.
// Allows you to represent more complex data structures Child Object is enclosed by a Parent Object
// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard {}, Mouse{}, Monitor{}}
//


person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}
console.log(person. fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person. hobbies [2]); 
console.log(person.address.street);

// array of objects
fruits = [{name: "apple", color: "red", calories: 95}, 
    {name: "orange", color: "orange", calories: 45}, 
    {name: "banana", color: "yellow", calories: 105}, 
    {name: "coconut", color: "white", calories: 159}, 
    {name: "pineapple", color: "yellow", calories: 37}];
fruits.push({name: "apple", color: "red", calories: 95});
fruits.pop();
fruits.splice(1,2);
console.log(fruits[1].calories);
console.log(fruits);
fruits.forEach(fruit => console.log(fruit.name));
fruitNames = fruits.map(fruit => fruit.name); 
console.log(fruitNames);
let yellowFruits = fruits.filter(fruit => fruit.color==="yellow");
console.log(yellowFruits);
let maxFruits = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit:max);
console.log(maxFruits);

// sort() = method used to sort elements of an array in place.
// Sorts elements as strings in lexicographic order, not alphabetical 
// lexicographic = (alphabet + numbers + symbols) as strings

numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort((a, b) => b-a);
console.log(numbers);

const people = [{name: "Spongebob", age: 30, gpa: 3.0}, 
    {name: "Patrick", age: 37, gpa: 1.5}, 
    {name: "Squidward", age: 51, gpa: 2.5}, 
    {name: "Sandy", age: 27, gpa: 4.0}]
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

// Fisher-Yates algorithm
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(cards);
function shuffle (array){
    for (let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}
console.log(cards);

// Date objects = Objects that contain values that represent dates and times 
// These date objects can be changed and formatted

let date = new Date(2024,0,1,2,3,4,5);
date = new Date("2024-01-02T12:00:00Z");
date = new Date();

date.setFullYear(2024); 
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes (3); 
date.setSeconds(3);

console.log(date);  

const year = date.getFullYear(); 
const month = date.getMonth(); 
const day = date.getDate(); 
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

// closure = A function defined inside of another function,
// the inner function has access to the variables and scope of the outer function.
// Allow for private variables and state maintenance Used frequently in JS frameworks: React, Vue, Angular
function outer(){
    let message = "Hello";
    function inner() {
        console.log(message);
    }
    inner();
}
outer();

function createCounter(){
    let count = 0;
    function increment () {
        count++;
        console.log(`Count increased to ${count}`);
    }
        function getCount(){
        return count;
    }
    return {increment, getCount};
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());

function createGame(){
    let score = 0;
    function increaseScore (points){ 
        score += points;
        console.log(`+${points}pts`);
    }
    function decreaseScore (points){ 
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}
const game = createGame();
game.increaseScore (5);
game.increaseScore (6);
game.decreaseScore (3);
console.log(`The final score is ${game.getScore()}pts`);

// setTimeout() = function in JavaScript that allows you to schedule
// the execution of a function after an amount of time (milliseconds) Times are approximate
// (execution time may vary based on the workload of the JavaScript runtime env.)
// setTimeout(callback, delay);
//
let timeoutId;
function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}



// ES6 Module = An external file that contains reusable code
// that can be imported into other JavaScript files. Write resusable code for many different apps.
// Can contain variables, classes, functions ... and more Introduced as part of ECMAScript 2015 update
//
//import {PI, getCircumference, getArea, getVolume} from './math.js'

// synchronous = Executes line by line consecutively in a sequential manner Code that waits for an operation to complete.
// asynchronous = Allows multiple operations to be performed concurrently without waiting Doesn't block the execution flow and allows the program to continue
// (I/O operations, network requests, fetching data)
// Handled with: Callbacks, Promises, Async/Await
setTimeout(() => console.log("Task 1"), 3000);
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

function func1(callback) {
    setTimeout(() => { console.log("Task 1");callback()}, 3000);
}
function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
func1(func2);

// Error = An Object that is created to represent a problem that occurs // Occur often with user input or establishing a connection
// try { } = Encloses code that might potentially cause an error 
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up ex. close files, close connections, release resources
//
try{
    console.log(lll);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch(error) {
    console.error(error);
}

finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
}
try{
    //const dividend = Number(window.prompt ("Enter a dividend: ")); 
    //const divisor = Number(window.prompt("Enter a divisor: "));
    if (divisor == 0) throw new Error("You can't divide by zero!");
    if(isNaN(dividend) || isNaN(divisor)) throw new Error("Values must be a number");
    const result = dividend / divisor;
    console.log(result);
}
catch(error) {
    console.error(error);
}
console.log("You have reached the end!");



// DOM = DOCUMENT OBJECT MODEL
// Object{} that represents the page you see in the web browser and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation. JavaScript can access the DOM to dynamically
// change the content, structure, and style of a web page.
//
username = "";
const welcomeMsg = document.getElementById("a4_Welcome");
welcomeMsg.textContent += username === "" ? ` Guest` : username
console.dir(document);

// element selectors = Methods used to target and manipulate HTML elements
// They allow you to select one or multiple HTML elements from the DOM (Document Object Model)
//
// 1. document.getElementById() // ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML COLLECTION 
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector() // ELEMENT OR NULL 
// 5. document.querySelectorAll() // NODELIST
const myHeading = document.getElementById("a4_Welcome"); 
myHeading.style.backgroundColor = "yellow"; 
myHeading.style.textAlign="center";
console.log(myHeading);

fruits = document.getElementsByClassName("fruits");
for (let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

const h4Elements = document.getElementsByTagName("h4");
for (let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}

fruit = document.querySelector(".fruits");
fruit.style.backgroundColor = "green";

fruits = document.querySelectorAll(".fruits");
fruits.forEach(fruit => {
    fruit.style.backgroundColor = "green";
});

// DOM Navigation = The process of navigating through the structure // of an HTML document using JavaScript.
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling 
// .parentElement 
// .children
//
element = document.getElementById("Root"); 
firstChild = element.firstElementChild; 
firstChild.style.backgroundColor = "yellow";

ulElements = document.querySelectorAll("ul");
ulElements.forEach (ulElement => {
    lastChild = ulElement.lastElementChild; 
    lastChild.style.backgroundColor = "yellow";
});

element = document.getElementById("Beets");
nextSibling = element.nextElementSibling; 
nextSibling.style.backgroundColor = "yellow";

element = document.getElementById("Carrots");
previousSibling = element.previousElementSibling; 
previousSibling.style.backgroundColor = "green";

element = document.getElementById("Beets");
parent = element.parentElement; 
parent.style.backgroundColor = "yellow";

element = document.getElementById("Non-root"); 
children = element.children;
Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});

// EXAMPLE 1 <h1>
// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");
// STEP 2 ADD ATTRIBUTES/PROPERTIES 
newH1.textContent = "I like pizza!"; 
newH1.id = "myH1"; 
newH1.style.color = "tomato"; 
newH1.style.textAlign="center";
// STEP 3 APPEND ELEMENT TO DOM 
// document.body.append(newH1); 
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
//document.getElementById("box1"). prepend(newH1);
//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box2);
const boxes = document.querySelectorAll(".box"); 
document.body.insertBefore(newH1, boxes[1]);
// REMOVE HTML ELEMENT 
document.body.removeChild(newH1);

// eventListener = Listen for specific events to create interactive web pages 
// events: click, mouseover, mouseout .addEventListener(event, callback);
const myBox = document.getElementById("myBox");
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "Ouch";
});
myBox.addEventListener("mouseover", event => { 
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it ";
});
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me";
});

// eventListener = Listen for specific events to create interactive web pages
// events: keydown, keyup
// document.addEventListener(event, callback);
document.addEventListener("keydown", event => { 
    myBox.textContent = "=))";
    myBox.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", event => {
    myBox.textContent = "=((";
    myBox.style.backgroundColor = "lightblue";
});
top1 = 0;
left = 0;
document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){ 
            case "ArrowUp":
                top1 -= 10;
                break;
            case "ArrowDown":
                top1 += 10;
                break;
            case "ArrowLeft": 
                left -= 10; 
                break;
            case "ArrowRight": 
                left += 10; 
                break;
        }
        myBox.style.top = `${top1}px`;
        myBox.style.left = `${left}px`;
    }
});

// Hide HTML

myButton = document.getElementById("myButton"); 
myImg = document.getElementById("myImg");
myButton.addEventListener("click", event => {
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility="visible";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
});

// NodeList = Static collection of HTML elements by (id, class, element) 
// Can be created by using querySelectorAll()
// Similar to an array, but no (map, filter, reduce)
// NodeList won't update to automatically reflect changes
let buttons = document.querySelectorAll(".Button");

// ADD AN ELEMENT
/*
newButton = document.createElement("button"); //STEP 1 
newButton.textContent = "Iron Man"; //STEP 2
newButton.classList = "Button"; 
document.body.appendChild(newButton); //STEP 3
buttons = document.querySelectorAll(".Button");
console.log(buttons);
*/
// REMOVE AN ELEMENT
/*
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
    });
});*/

// CLICK event listener
/*
buttons.forEach(button => {
    button.addEventListener("click", event => { 
        event.target.style.backgroundColor = "tomato";
    })
});*/
/*
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});
buttons.forEach (button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});
*/

// classList = Element property in JavaScript used to interact
// with an element's list of classes (CSS classes)
// Allows you to make reusable classes for many elements across your webpage.
//
// add()
// remove()
// toggle (Remove if present, Add if not)
// replace (oldclass, newClass)
// contains()
buttons.forEach(button => {
    button.classList.add("enabled");
});
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});
buttons.forEach (button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "=((";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
    });
});



// IMAGE SLIDER
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;
//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider(){
    if(slides.length > 0) {
        slides [slideIndex].classList.add("displaySlide"); 
        intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index) {
    if(index >= slides.length) slideIndex = 0;
    else if(index < 0) slideIndex=slides.length-1;
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevslide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

// Callback Hell = Situation in JavaScript where callbacks
// are nested within other callbacks to the
// degree where the code is difficult to read. old pattern to handle asynchronous functions. 
// Use Promises + async/await to avoid Callback Hell
function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 complete");
        callback();
    }, 2000);
}
function task2(callback){
    setTimeout(() => {
        console.log("Task 2 complete");
    callback();
    }, 1000);
}
function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 complete");
    callback();
    }, 3000);
}
function task4(callback) { 
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();
    }, 1500);
}
task1(() => {
    task2(() => {
        task3 (() => {
            task4(() => console.log("All tasks completed"));
        })
    })
});

// Promise = An Object that manages asynchronous operations. 
//Wrap a Promise object around {asynchronous code} "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject) => {asynchronous code})
//
// DO THESE CHORES IN ORDER
// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN // 3. TAKE OUT THE TRASH
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const done = true;
            if(done) resolve("You walk the dog ");
            else reject("You didn't do it")}, 1500);
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const done = false;
            if(done) resolve("You clean the kitchen ");
            else reject("You didn't do it")}, 2500);
    });
}
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const done = true;
            if(done) resolve("You take out the trash");
            else reject("You didn't do it");
        },500);
    });
}
walkDog()   .then(value => {console.log(value); return cleanKitchen()})
            .then(value => {console.log(value); return takeOutTrash()})
            .then(value => {console.log(value); console.log("Finished")})

// Async/Await=
// Await = makes an async function wait for a promise
// Async = makes a function return a promise
// Allows you write asynchronous code in a synchronous manner Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue
//
async function doChores(){
    try{
    const walkDogResult = await walkDog(); 
    console.log(walkDogResult);
    const cleankitchenResult = await cleanKitchen(); 
    console.log(cleanKitchenResult);
    const takeoutTrashResult = await takeOutTrash(); 
    console.log(takeOutTrashResult);
    console.log("You finsihed all the chores!");
    }
    catch(error) {
        console.error(error);
    }
}
doChores();

// JSON = (JavaScript Object Notation) data-interchange format
// Used for exchanging data between a server and a web application
// JSON files {key:value} OR [value1, value2, value3]
// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object

names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
JSONperson = `{
    "name": "Spongebob", 
    "age": 30, 
    "isEmployed": true, 
    "hobbies": "soccer"
}`;
JSONpeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true}, 
    {"name": "Patrick","age": 34, "isEmployed": false}, 
    {"name":"Squidward","age": 50, "isEmployed": true}, 
    {"name": "Sandy","age": 27,"isEmployed": false}]`;

jsonString = JSON.stringify(names);
console.log(jsonString);
parseData = JSON.parse(JSONperson);
console.log(parseData);

fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.isEmployed)))
.catch(error => console.error(error));




