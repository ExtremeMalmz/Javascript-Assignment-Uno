//Eric Malmström Assignment 1

"use strict";

//upp 1
console.log("Uppgift 1");
console.log(5*2 != 12);
console.log(55 > 22);
console.log(16 / 4 == 4);
console.log(8+2 < 128);
console.log(32*8 <= 256);

//upp 2
console.log("\nUppgift 2");
const tisdag  = "Tisdag";
const hamburgare = "Hamburgare";
const illBeBack = "I'll be back";
console.log(tisdag.substring(0,3));
console.log(hamburgare.substring(3));
console.log(illBeBack.substring(5));

//upp 3
console.log("\nUppgift 3");
const itsLearning = "It's Learning";
const javaScriptTheGoodParts = "JavaScript: The Good Parts";
console.log(itsLearning.substring(5).toUpperCase());
console.log(javaScriptTheGoodParts.substring(16).toLowerCase());

//upp 4
console.log("\nUppgift 4");
var numbers = [128, 256, 512, 1024, 2048];
let lengthOfNumbersArray =  numbers.length;
var sumOfNumbers = 0;
var avgNumber = 0;

for(var i = 0;i < lengthOfNumbersArray;i++){
    sumOfNumbers = sumOfNumbers + numbers[i];
}
avgNumber = sumOfNumbers / lengthOfNumbersArray;
console.log("Summan av array: " + sumOfNumbers);
console.log("Average av array: " + avgNumber);

numbers.push(sumOfNumbers);
lengthOfNumbersArray =  numbers.length;
console.log("Printar ut array");
for(var i = 0;i < lengthOfNumbersArray;i++){
    console.log("Värdet: " + numbers[i] + " finns på position: " + i);
}

//upp 5
console.log("\nUppgift 5");
var countries = ["Sweden", "Denmark", "Finland", "Norway"];
let lengthOfCountriesArray = countries.length;
console.log(countries[1].substring(0,3));

var totalLengthOfStringInCountryArray = 0;
for(var i = 0;i < lengthOfCountriesArray;i++){
    totalLengthOfStringInCountryArray = countries[i].length + totalLengthOfStringInCountryArray;
}
console.log("Country array har: " + lengthOfCountriesArray + " Medelvärdet för stringarna i arrayen är: " + (totalLengthOfStringInCountryArray/lengthOfCountriesArray));

//upp 6
console.log("\nUppgift 6");
var values = [3, 5, "Jane", true, 144, false];

console.log("Array i revers");
values.reverse();
for(var i = 0;i < values.length;i++){
    console.log(values[i]);
}

//upp 7
console.log("\nUppgift 7");
var names = ["Jane", "Joe", "Eliza"];
var ages = [21, 34, 22];
var hasPet = [true, false, true];
var multipleArrays = [];

for(var i = 0;i < 3;i++){
    multipleArrays[i] = names[i];
}
for(var i = 0;i < 3;i++){
    multipleArrays[i+3] = ages[i];
}
for(var i = 0;i < 3;i++){
    multipleArrays[i+6] = hasPet[i];
}

console.log("Printar multipleArrays");
for(var i = 0;i < multipleArrays.length;i++){
    console.log(multipleArrays[i]);
}

//Upp 8
console.log("\nUppgift 8");
var actors = ["Sherlock", "Watson", "Bo"];

console.log('"' + actors[0] + " - " + actors[1] + " - " + actors[2] + '"');

//Upp 9
console.log("\nUppgift 9");
var amount = 61;

if(amount < 50){
    console.log("Less then 50!");
}
else if(amount >= 50 && amount < 65){
    console.log("Optimal range for the amount!");
}
else{
    console.log("Too much!");
}

//Upp 10
console.log("\nUppgift 10");

for(var i = 1;i < 9;i++){
    console.log("#".repeat(i) );
}