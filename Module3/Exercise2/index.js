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