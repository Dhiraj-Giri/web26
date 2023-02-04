// Problem 4: Given 2 numbers a and b print which is greater or "both equal".

// condition?statement1:condition2?statement2:statement3
// let a = 10;
// let b = 10;
// (a>b)?console.log("a is greater"):(a<b)?console.log("b is greater"):console.log("both are equal")
// let count = 0;
let str = "malayalam";

for(let i = 0; i < str.length; i++){
  let bag = "";
  for(let j = i; j < str.length; j++){
    bag+= str[j];
    if(bag.length>1 && pal(bag)){
      console.log(bag)
    }
  }
}
function pal(str){
  let bag = "";
  for(let i = str.length-1; i >=0; i--){
    bag+=str[i]
  }
  if(bag==str){
    return true
  }else{
    return false
  }
}