const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const c = obj.b;

obj.b();
c();



console.log([...'Lydia']);

let user={ name:"Piyush", age:24 }

const {name}= user;

console.log(name);



const { name: myName } = { name: 'Lydia' };

console.log(name);
console.log(myName);
console.log({a:1} == {a:1});
console.log({a:1} === {a:1});

let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);

