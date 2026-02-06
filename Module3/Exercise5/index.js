
//Imports for Q5 & Q6
import { areaOfCircle,areaOfCylinder,areaOfRectangle,PI} from "./area.js";
import { filterWithSet,filterWithoutSet } from "./filter.js";

//Q1 Filter unique array members using Set.
let filterArray=(arr)=>{
    if(!arr.length || arr.length===1) return arr;
    let s=new Set();

    arr.forEach(element => {
        s.add(element);
    });

    return [...s];
}


console.log(filterArray([1,2,5,2,3,4,8,5,1]));


//Q2 Filter anagrams using Map.
let anagrams = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    const charMap = new Map();

    for (let char of str1) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    for (let char of str2) {
        if (!charMap.has(char)) return false;
        charMap.set(char, charMap.get(char) - 1);
        if (charMap.get(char) < 0) return false;
    }

    return true;
};


console.log(anagrams("Listen","Silett"));
console.log(anagrams("Listen","Silent"));

/*Q3 Write a program to implement inheritance upto 3 classes.
The Class must contain private and public variables and static functions.*/

class Person{
    firstname;
    #address;
    constructor(name,address){
        this.firstname=name;
        this.#address=address;
    }

    static getInfo(person){
        console.log(person.firstname);
    }
}

class Employee extends Person{
    designation;
    #salary;

    constructor(designation,salary,name){
        super(name);
        this.designation=designation;
        this.#salary=salary;
    }

    static info(employee){
        console.log(`${employee.firstname} is a ${employee.designation} his salary is ${employee.#salary}`);
    }
}

class Developer extends Employee{
    canCode;
    constructor(canCode,designation,name){
        super(designation,15000,name);
        this.canCode=canCode;
    }

    static ask(developer){
        console.log(`${developer.firstname} as a ${developer.designation} can code ${developer.canCode}`);
    }
}


const developer=new Developer(true,"Software Deveolper Trainee","Dhruv");
const person=new Person("Dhruv","Delhi");
// console.log(person.#address);

Developer.ask(developer);
Developer.info(developer);
Developer.getInfo(developer);

//Q4 Write a program to implement a class having static functions
class Utils {
 
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
  instanceMethod() {
    return "This is an instance method.";
  }
}


const sum = Utils.add(5, 10);
console.log(`The sum is: ${sum}`);

const product = Utils.multiply(3, 4);
console.log(`The product is: ${product}`);

const utilsInstance = new Utils();
try {
  utilsInstance.add(1, 2); 
} catch (error) {
  console.log(`Error calling static method on an instance: ${error.message}`);
}
console.log(utilsInstance.instanceMethod());


//Q5 Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.
//All this are present in area.js
console.log(PI);
console.log(areaOfCircle(5));
console.log(areaOfRectangle(3,6));
let [curvedSurfacearea,totalSurfaceArea]=areaOfCylinder(5,12);

console.log(`The Curved Surface area of the Cylinder is ${curvedSurfacearea}`);
console.log(`The Total Surface area of Cylinder is ${totalSurfaceArea}`);


//Q6 Import a module for filtering unique elements in an array.
//This two functions are present inside filter.js
console.log(`Filter with set ${filterWithSet([1,2,5,2,4,7,4,8])}`);

console.log(`Filter without set ${filterWithoutSet([1,2,4,5,8,3,5,7,2,4])}`);


//Q7 Write a program to flatten a nested array to single level using arrow functions.
let flattenWithFlat=(arr)=>{
    return arr.flat('Infinity');
}

let flattenWithoutFlat=(arr)=>{
    let flatArr=[];
    arr.forEach(element => {
        if(Array.isArray(element)){
            flatArr=flatArr.concat(flattenWithoutFlat(element));
        }
        else{
            flatArr.push(element)
        }
    });

    return flatArr;
}


console.log(flattenWithFlat([1,2,[3,4,[5,6,7,[8],[9,10]]]]));
console.log(flattenWithoutFlat([1,2,[3,4,[5,6,7,[8],[9,10]]]]));