// დავალება-I
let user = {
firstName: "giorgi",
lastName: "Smith",
age: 25,
studentStatus: "active",
};

console.log(user ['studentStatus']);

// დავალება-III

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
 
for (let i of numbers) {
  if (i > 5) {
 console.log(i)
  }
}
// დავალება-IV
let user = {
  name: "giorgi",
  age: 20,
  studentStatus : "active"
}
if (user.age < 18 && user.studentStatus=== "active"){
  console.log("hello")
}
if (user.name==="Levani"){
  console.log("Hello Levani")
}
if (user.studentStatus==="active" || user.age < 25){
  console.log ("Hello" "World"),
}

else{
  console.log("error")
}

// დავალება-V
let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];
for(let i of array){
  if(typeof i==="string"){
    console.log(i)
  }
}

// დავალება-VI
let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]


// დავალება-VII
let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for(let x of array){
  if (x % 2 !=1){
    console.log(x)
  }
 for (let Y of array){
  if (y % 2=== 1){
    console.log(y)
  }
 }
}

// დავალება-VIII
let users = [
  {username: 'giorgi', status: false},
  {username: 'levani', status: false},
  {username: 'anna', status: true}
]
