//Function for computing Simple Interest
function simpleInterest(){
    var principal=document.getElementById("principal").value;
    var rateOfInterest=document.getElementById("interest-rate").value;
    var timePeriod= document.getElementById("time-period").value

    var simpleInterest=(principal*rateOfInterest*timePeriod)/100;

    alert(`The simple interest is ${simpleInterest}`);
}


// Function for checking palindrome
function isPalindromeChecker(input){
    start=0;
    end=input.length-1;
    while(start<=end){
        if(input[start]!==input[end]){
            return false;
        }
        start+=1;
        end-=1;
    }
    return true;
}

function isPalindrome(){
    var input=document.getElementById("palindrome").value.toLowerCase();
    var flag=isPalindromeChecker(input);
    if(flag){
        alert(`The string ${input} is palindrome`);
    }
    else{
        alert(`The string ${input} is not a palindrome`);
    }
}


// Function for computing area of Circle
function areaOfCircle(){
    var radius = document.getElementById("radius").value;
    var area=Math.PI*Math.pow(radius,2);
    alert(`The area of circle having ${radius} is ${area}`);
}


// Copying an object to another object and logging it.
var order={
    orderId:null,
    itemName:null,
    description:null,
    price:null
};


function createObject(){
    order.orderId=document.getElementById("order-id").value;
    order.itemName=document.getElementById("item-name").value;
    order.description=document.getElementById("description").value;
    order.price=document.getElementById("price").value;
    alert(`Order object is ${JSON.stringify(order)}`);
}
function copyObject(){
    var copyOrder={};
    for(var key in order){
        copyOrder[key]=order[key]
    }
    alert(`The copy of order of object is ${JSON.stringify(copyOrder)}`);
}

// Creating a list of employee and performing operation
var listEmployee=Array();
function saveData(){
    var name=document.getElementById("employee-name").value;
    var dob=new Date(document.getElementById("dob").value);
    var salary=document.getElementById("salary").value;

    listEmployee.push({
        Name:name,
        DOB:dob,
        Salary:salary
    });

    alert(`The data is saved ${JSON.stringify(listEmployee[listEmployee.length-1])}`);
}
function filterEmployee(){
    var data=listEmployee.filter((employee)=> employee.Salary>5000);
    alert(`The Employees having salary more tha 5000 is ${JSON.stringify(data)}`);
}
function createAge(){
    var today=new Date();
    listEmployee.forEach(employee=>{
        let age=today.getFullYear()-employee.DOB.getFullYear();
        const monthDiffrence= today.getMonth()-employee.DOB.getMonth();

        if (monthDiffrence<0||monthDiffrence===0&& today.getDate()<employee.DOB.getDate()){
            age--;
        }

        employee.age=age;
    })
}

function groupEmployee(){
    createAge();
    listEmployee.forEach(employee=>{
        if(employee.age<=20){
            employee.ageGroup="GenZ";
        }
        else if (20<employee.age && employee.age<25){
            employee.ageGroup="Milennial";
        }
        else{
            employee.ageGroup="Boomer";
        }
    })

    alert(`The Employees are grouped together using ageGroup as GenZ Milennial & Boomer use Display option to see it`);
}

function incrementSalary(){
    listEmployee.forEach(employee=>{
        if(employee.Salary<1000 && employee.age>20){
            employee["Salary"]*=5;
        }
    })
}
function Display(){
    alert(`The employee data is this : \n ${JSON.stringify(listEmployee)}`);
}
