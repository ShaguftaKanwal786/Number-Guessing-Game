#! /user/bin/env node


import inquirer from "inquirer"

console.log(" \twelcome to NUmber Guessing Game\t")

const randomNumber= Math.floor(Math.random()*5+1);
 
let answer =await inquirer.prompt([{

    name: "guessnumber",
    type :"number",
    message:"plz select a number from 1 to 5 : ",

}])

if (answer.guessnumber === randomNumber){
    console.log("Congratulation you guess a correct number")
} else{
    console.log("Sorry ! you guess a wrong gnumber")
};
