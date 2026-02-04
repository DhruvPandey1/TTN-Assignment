//Q1 create a Calculator Object

var calculator={
    num1:0,
    num2:0,
    read:function(){
        this.num1=Number(prompt("Enter first Number:"));
        this.num2=Number(prompt("Enter second Number:"));
        document.getElementById("first-number").value=this.num1;
        document.getElementById("second-number").value=this.num2
    },
    add:function(){
        document.getElementById("result").innerHTML=`The sum of ${this.num1} & ${this.num2} is ${this.num1+this.num2}`;
        
    },
    sub:function(){
        document.getElementById("result").innerHTML=`The difference of ${this.num1} & ${this.num2} is ${Math.abs(this.num1-this.num2)}`;
        
    },
    multiply:function(){
        document.getElementById("result").innerHTML=`The multiplication of ${this.num1} & ${this.num2} is ${this.num1*this.num2}`;
        
    }
}

/*Q2 Create a temperature object having temperature in celsius and four function 
read() for reading temperature
toFahrenheit() for converting temperature into fahrenheit
toKelvin() for converting the temperature into kelvin
display() for showing all temperature values */


var temperatureConverter={
    temperature:null,
    fahrenheit:null,
    kelvin:null,
    read:function(){
        this.temperature=Number(prompt("Enter the temperature in celsius:"));
        document.getElementById("temperature-celsius").value=this.temperature;
    },
    toFahrenheit:function(){
        this.fahrenheit=(this.temperature*9)/5 + 32;
        document.getElementById("temperature-result").innerHTML=`The Fahrenheit of ${this.temperature}°C is ${this.fahrenheit}°F`
    },
    toKelvin:function(){
        this.kelvin=this.temperature+273.15;
        document.getElementById("temperature-result").innerHTML=`The Kelvin of ${this.temperature}°C is ${this.kelvin}K`

    },
    display:function(){
        document.getElementById("temperature-result").innerHTML=`The Temperature is ${this.temperature}°C , ${this.fahrenheit}°F and ${this.kelvin}K`;
    }
}


/* Q3 Tasks:
(a) Predict the output of the given snippet.

(b) Explain how hoisting affects the execution 
of console.log(z) in second().

(c) Explain the scope chain for console.log(y) in 
second().

(d) What happens when console.log(y) 
is executed outside first() (Line 4)? Why?


(e) Modify the code to use let instead of var and 
observe any differences.
*/

//(a)
var x=5;
function first(){
    console.log(x);
    var y=10;
    function second(){
        console.log(y);
        console.log(z);
        var z=20;
    }
    second();
}

first();
console.log(y);

/*console.log(x) gives 5//Line1
​​console.log(y) gives 10//Line2
console.log(z) gives undefined//Line3
console.log(y) gives a reference error//Line4
*/

/*(b) In second function at execution time the declaration of var
z=20; will get sifted to the top of the stack and the initialization 
will remain at the same line making the value of the var z
undefined. This whole process is called Hoisting and
console.log(z) gives undefined
function second(){
​
var z;
​
console.log(y);
​
console.log(z);
​
z=20;
}
*/

/*(c) For the console.log(y) scope chaining is applied scope
chaining is a feature of javascript which let a function access a
variable present inside its parent or grandparent or great
grandparent i.e It is basically first search for variable insides
own scope if it did not find it will move to parent scope this
process will continue till the variable has found or the scope
ends giving a Reference Error.

For console.log(y) it will search in second() function first then
move to the first() function and find it there giving a value of 10
*/

/*(d) When the console.log(y) is executed outside first() we will
get a Reference Error that is because we are trying to access
the var y outside its scope(The var are function scope the is
there are only available till the execution of the function or block
of code but can be accessed by the child due to scope
chaining). So Due to function scoping of var we will get the
reference error on Line 4
*/

//(e)
let x=5;
function first(){
    console.log(x);
    let y=10;
    function second(){
        console.log(y);
        console.log(z);
        let z=20;
    }
    second();
}

first();
console.log(y);

/* This is the output if we will change the var with let
Getting a output as follows
console.log(x) as 5 //Line1
console.log(y) as 10 //Line2
console.log(z) as Reference Error //Line3
console.log(y) will not get executed due to error //Line4

We can clearly see that the let should be initialized before
accessing it otherwise we will get Reference Error . It is due the
temporal dead zone it is a state where the let and const are
present without initialization in this case the hoisting of let z
make it temporal dead zone.
*/