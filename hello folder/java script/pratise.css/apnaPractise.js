/*const pen = {
  color: "red",
  amount: 270,
  rating: 4.5,
  discount: 5,
  
}
console.log(pen)
console.log(pen.color)
*/

/*
let color;
let mode = prompt("enter mode")
if (mode == "dark") {
  color = "black";
} else {
  color = "white"
}
console.log(color);
*/

/*
let num = prompt("Enter a number");
if (num % 5 == 0) {
  console.log("number is divisible by 5");
} else {
  console.log("number is not divisible by 5");
}
  */

/*
//for of loop
let arr = [1, 2, 3, 4, 5, 6];
for (let val of arr) {               
  console.log(val);
}

let str = "APNA COLLEGE";
for (let value of str) {
  console.log(value)
}
  */

//for in loop for object
const pen = {
  color: "red",
  amount: 270,
  rating: 4.5,
  discount: 5,
};
for (let key in pen) {
  console.log(key);
}

// string methods
let str = "Apna College";
let str1 = " teaches web development";
console.log(str.length);           //count white spaces
console.log(str[5]);
let number = `${3 + 4}`;

console.log(`this pen has ${number} prise`);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());          //remove starting and ending white spaces of the string

console.log(str.slice(0, 3));  //excluding indx 3; 
console.log(str.concat(str1));
console.log(str.charAt(3));
raj
