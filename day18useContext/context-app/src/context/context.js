import { createContext } from "react";
export const contextName = createContext();



let number = 97

let count = 0

for(let i=1;i<=number;i++){
  if(number%i==0){
    count++
  }
}
console.log(count)

if(count ==2){
  console.log("The number is a prime number")
}else{
  console.log("The number is not a prime number")
}

let string = "racecar"

let str = ""
for(let i=string.length-1;i>=0;i--){
  str += string[i]
}

console.log(string== str)

//*****
//*
//*****
//*
//*****


// number= 5

