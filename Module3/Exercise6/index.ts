/*Q1 Define an interface User with the following properties: 
id(number), name(string), email(string), age(number optional)*/

interface User{
    id:number,
    name:string,
    email:string,
    age?:number
}


const user:User={
    id:2,
    name:"Dhruv",
    email:"dhruv@mail.com",
    age:20
}


/*Q2 Create a class UserManager with:
A private array users: User[] to store user data.
A method addUser(user: User): void that adds a new user.
A method removeUser(id: number): void that removes a user by ID.
A method getUser(id: number): User | undefined that retrieves a user by ID.
A method getAllUsers(): User[] that returns all users.
*/

class UserManager{
    private users :User[]
    constructor(){
        this.users=[]
    }
    addUser(user:User):void{
        this.users.push(user);
    }
    removeUser(id:number):void{
        this.users.forEach(user=>{
            if(user.id===id){
                const index=this.users.indexOf(user);
                this.users.splice(index,1);
            }
        })
    }
    getUser(id:number):User|undefined{
        for(const user of this.users){
            if(user.id===id) return user;
        }
        return 
    }

    getAllUser():User[]{
        return this.users;
    }

    /*Q3 Use Arrow Functions & Default Parameters
    Add a method getUser = (name: string = "Guest"): string that returns a greeting message.
    */
    greetUser=(name:string="Guest"):string=>{
        return `Welcome ${name}`;
    }

    /*Q4.) Use Destructuring & Spread Operator
    Create a function printUserDetails(user: User): void that logs user details using object destructuring.
    */
    printUserDetails(user:User):void{
        const {id,name,email,age}=user
        console.log(`The Id of user is ${id}`);
        console.log(`The User name is ${name}`);
        console.log(`The email of user is ${email}`);
        if(age!==undefined) console.log(`The age of the user is ${age}`);
    }
}

//Q2 Execution
const usermanager=new UserManager();

usermanager.addUser({
    id:1,
    name:"Dhruv",
    email:"dhruv@gmail.com",
    age:20
})



usermanager.addUser({
    id:2,
    name:"Aman",
    email:"aman@gmail.com",
    age:21
})


usermanager.addUser({
    id:3,
    name:"Gaurav",
    email:"gaurav@gmail.com",
    age:22
})


usermanager.addUser({
    id:4,
    name:"Tushar",
    email:"tushar@gmail.com",
})

console.log("getAllUser()");
console.log(usermanager.getAllUser());

console.log("getUser(2)");
console.log(usermanager.getUser(2));

console.log("removeUser()");
usermanager.removeUser(3);

console.log(usermanager.getAllUser());


//Q3 Execution
console.log("greetUser with parameter")
console.log(usermanager.greetUser("Dhruv"));

console.log("greetUser without parameter default used")
console.log(usermanager.greetUser());


//Q4 Execution
console.log("Printing user with age \n")
usermanager.printUserDetails({
    id:5,
    name:"Dhruv",
    email:"dhruv",
    age:20
})

console.log("\nPrinting user without age \n")
usermanager.printUserDetails({
    id:2,
    name:"Dhruv",
    email:"dhruv",
})
