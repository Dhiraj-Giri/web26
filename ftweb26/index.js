// mathematical
// comparison & relational =>  in boolean format
//  conditional & logical
//  ternary operators
//  switch case && logical operator
//  while loops 
//   for loops

// condition?true:false
//  condition?statement1:statement2


// && || !
// more than 3 possibilities 

// Hello World

// 1-10 5&7 y 5 n 7 no else Hello;
// N%10 => 1-9 one-nine;

// for loop // array's and DSA 


// while // for?

// while(i < N){
  
// }
// let arr = [1,2,3,4,5]; // arr[0],arr[1],arr[2]....
// let sum = 0;

// for(let i = 0; i <= arr.length; i++){
//   sum+= arr[i]
//   // console.log(arr[i])
// }
// console.log(sum)
let arr = ["b","b","b","a"];

let flag = true;

for(let i = 0; i < arr.length-1; i++){
  if(arr[i]!=arr[i+1]){
    flag = false;
    break;
  }
}

if(flag == true){
  console.log("s")
}else{
  console.log("m")
}


