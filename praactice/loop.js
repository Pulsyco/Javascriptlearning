 // problem 1

 let marks={
    harry : 90,
    shivam: 40,
    pulak : 50,
    monika: 40
 }
 for(let i=0; i<Object.keys(marks).length; i++){
   // console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
 }

 // problem 2

 for(let key in marks){
    //console.log("The marks of "+key +" are "+marks[key])
 }

 let cn=34
 const prompt = require("prompt-sync")();
 let i 

while(i!=cn){
    i=prompt("enter a number")
    console.log("try again !")
}
console.log("You have enter a correct number")