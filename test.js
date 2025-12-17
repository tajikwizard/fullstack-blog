const user = {
    name:"Abdulaziz",
    email:"test@gmail.com",
    password:"secret",
    age:26,
}

const  {password: _, ...rest} = user;
console.log(rest);