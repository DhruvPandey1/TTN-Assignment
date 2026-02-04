//Q1 Hierarchy of Person
function Person(name,address){
    this.name=name;
    this.address=address;
}

function Employee(designation,compentency){
    this.designation=designation;
    this.compentency=compentency;
}

function Developer(canCode){
    this.canCode=canCode;
}


Employee.prototype=new Person("Dhruv","Delhi");

Developer.prototype=new Employee("Software Engineer Trainee","Js");

var developer=new Developer(true);

console.log(developer.name);
console.log(developer.designation);
console.log(developer.compentency);
console.log(developer.canCode);


//Q2 One Element Printing at every 3s
function printElement(){
    let array=[1,2,3,4,5];
    let i=0;

    let intervalID=setInterval(() => {
        const now = new Date();
        const timeWithSeconds = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        });
        document.getElementById("result").innerHTML+=`\n 
        The elemnt is ${array[i++]} at ${timeWithSeconds}`;
        if(i===array.length){
            clearInterval(intervalID);
        }
    }, 3000);
}

//Q3 Bind & Call
const person = {
  name: "John",
  greet: function(city) {
    console.log(`Hello, my name is ${this.name} from ${city}.`);
  }
};

const anotherPerson = {
  name: "Jane"
};

person.greet.call(anotherPerson, "New York"); 

const greetJane = person.greet.bind(anotherPerson, "London");

greetJane();

//Q4 Argument object

function test(a, b) {
  console.log(arguments.length);
}

test(1);
test(1, 2, 3);

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * arguments.callee(n - 1); 
}

console.log(factorial(4));

function sum() {
  let total = 0;
  for (const arg of arguments) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3, 4));
function getArgsAsArray() {
    const argsArray = [...arguments];
    console.log(Array.isArray(argsArray));
    return argsArray;
}

getArgsAsArray(5, 6, 7);




//Q5 Number of Invokation and Instance creation
function TrackedFunction() {
  if (this instanceof TrackedFunction) {
    TrackedFunction.instanceCount++;
  } else {
    TrackedFunction.invocationCount++;
  }
}

TrackedFunction.invocationCount = 0;
TrackedFunction.instanceCount = 0;

document.getElementById("function-btn").addEventListener("click",()=>{
    TrackedFunction();
    document.getElementById("result").innerHTML=`The Fuction TrackedFunction is invoked ${TrackedFunction.invocationCount} times`;
})

document.getElementById("instance-btn").addEventListener("click",()=>{
    new TrackedFunction();
    document.getElementById("result").innerHTML=`The Object TrackedFunction is created ${TrackedFunction.instanceCount} times`;
})




//Q6 Counter function
function counterClosure(){
    let count=0;
    return function(){
        count++;
        return count;
    }

}


var counter=counterClosure();

document.getElementById("counter-btn").addEventListener("click",()=>{
    document.getElementById("result").innerHTML=`The count is ${counter()}`;
});

//Q7 Array methods
const prices = [100, 200, 300];

const withTax = prices.map(price => price * 1.2); 
console.log(withTax); 
console.log(prices);  

const scores = [45, 80, 90, 30];
const passed = scores.filter(score => score >= 50);
console.log(passed);    
console.log(scores);     

const expenses = [10, 20, 5, 15];
const total = expenses.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log(total);


const nestedArray = [1, 2, [3, 4], [5, [6, 7]]];

const flatOnce = nestedArray.flat();
console.log(flatOnce); 
const flatDeep = nestedArray.flat(Infinity);
console.log(flatDeep);


const users = [
  { name: 'Ada', age: 28 },
  { name: 'Tobi', age: 23 },
  { name: 'Tobi', age: 30 }
];

const user = users.find(u => u.name === 'Tobi');
console.log(user);
