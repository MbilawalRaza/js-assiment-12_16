//chap 12 _14
// qustion no 1
// var input = prompt("Enter a character:");

// if (!isNaN(input)) {
//     console.log(input + " is a number");
// }else if(input===input.toLowerCase()){
//     console.log(input+"is an lower case");
// }else if(input===input.toUpperCase()){
// console.log(input+"is an upper case");
// }
// else {
//     console.log( input +" is not uppercase,lowercase,and number");
// }

//question no 2
// var num1= parseInt(prompt("enter a first integar"))
// var num2 = parseInt(prompt("enter a first integar"))
// if (isNaN(num1) || isNaN(num2)) {
//    console.log("enter a valid integar")
// } else if(num1===num2) {
//     console.log("both integar are equal");
// }else if (num1>num2){
//     console.log("integar 1 is grater than num 2");
// }
// else {
//     console.group("the larger integar is num 2")
//}
//question no 3
// var num = parseFloat(prompt("entera number "))
// if (num>0) {
//     console.log("the number is positive");
// }
// else if(num<0){
//     console.log("the num is negative ");
// }
// else {
//     console.log("numbe is zzero");
// }
//question no 4



// var vowels = "aeiou";
// var character = prompt("Enter a character: ");

// if (vowels.includes(character)) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//question no 5
// Store correct password in a variable
// var pasword = "12345"
// var userpasword=prompt("enter a pasword")

// if( userpasword===pasword){
//     console.log("your pasword is correct");
// }else{
//     console.log("your pasword is incorrect");
// }

//question no 6
// var greeting
// var hours=13;
// if (hours<18) {
//    console.log( greeting="good day");
// }
// else{
//     console.log(greeting="good evening");
// }
//questi0n no 7
//not solved
//chap no 14_16


//q no 1
// var studentNames = [];
//question no 2
// var studentNames = [];
 //question no 3

// var stringsArray = ["apple", "banana", "orange", "grape"];
//qustion no 4
// var numbersArray = [1, 2, 3, 4, 5];
//qustion no 5
// var booleanArray = [true, false, true, true];

//qustion no 6
// var mixarr=[apple,1,true,false,3]
//quwstion no 7
// var degree=["ssc","hsc","bcs","bs","bc","bcom","ms","m.phil","phd"]
// document.write(`
// <div>
// <h1> qualification</h1>
// <ol>
// <li>${degree[0]}</li>
// <li>${degree[1]}</li>
// <li>${degree[2]}</li>
// <li>${degree[3]}</li>
// <li>${degree[4]}</li>
// <li>${degree[5]}</li>
// <li>${degree[6]}</li>
// <li>${degree[7]}</li>
// <li>${degree[8]}</li>
// <li>${degree[9]}</li>
// </ol>
// </div>
// `);
// question no 8
// var studentNames=["ali","bilal","ahmed"]
// var score =[380,344,250]
// var maxNum=500
// document.write(`
//    <div>
//    <ol>
//    <li> ${studentNames[0]} scored ${score[0]} out of ${maxNum}, which is ${(score[0] / maxNum) * 100}%</li>
//     <li> ${studentNames[1]} scored ${score[1]} out of ${maxNum}, which is ${(score[1] / maxNum) * 100}%</li>
//      <li> ${studentNames[2]} scored ${score[2]} out of ${maxNum}, which is ${(score[2] / maxNum) * 100}%</li>
//      </ol>
//    </div>
// `);
//question n0  9
//task a
// var arr = [ "orange","yellow","blue"]
// var userinput=prompt("enter a color name ")
// arr.push(userinput)
// document.write(arr)
//task b
// var arr = [ "orange","yellow","blue"]
// var userinput=prompt=("enetr a color to add in end")
// arr.push(userinput)
// document.write(arr)

//task c
// var arr = [ "orange","yellow","blue"]
// var userinput=prompt=("enetr a 2 color name ")
//  arr.push(userinput)
//   document.write(arr)
//task d
// var arr = [ "orange","yellow","blue"]
// var userinput=prompt("enetr a index 0 index to delete  first color")
// arr.shift(userinput)
// document.write(arr)
//task e

// var arr = [ "orange","yellow","blue"]
//  var userinput=prompt("enter a 2")
// arr.pop(userinput)
// document.write(arr)
// task f
// var arr = [ "orange","yellow","blue"]
//  var userinput=prompt("enter a intex num to target")
//  var userinput2=prompt("enter a num hou much you want to delete")
//  var userinput3=prompt("you need to add some thing ")
//  arr.splice(userinput,userinput2,userinput3)
//  document.write(arr)
//task g
// var arr = [ "orange","yellow","blue"]
// var userinput=prompt("enter a intex num to target")
// var userinput2=prompt("enter a num hou much you want to delete")
// arr.splice(userinput,userinput2,)
//  document.write(arr)
//question no 10
//NOT SOLVED
// question  no 11
// var cities =[ karachi,lahore,islamabad,quetta,peshawar]
// var selectedcities=[islamabad,quetta]
// console.log(selectedcities)

// qustion no 12
// var arr = [ "this","is","my","cat"]

// console.log("this "+ "is " +"my "  +"cat")
//question no 13
var arr = [ "mouse"+"keyboard"+"printer"+"monitor"]
var userinput=prompt("enter computer part name")
if (userinput=!ar) {
    console.log("yes he");
}
else{
    console.log("no not");
}
//question no 15

// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


// function generateDropdown() {
//     document.write('<select id="manufacturerSelect">');
//     for (var i = 0; i < phoneManufacturers.length; i++) {
//         document.write('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
//     }
//     document.write('</select>');
// }


// generateDropdown();




