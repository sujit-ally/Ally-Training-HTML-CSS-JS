console.clear();

// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

var res = `${str1.trim()} ${str2.trim()} ${str3.trim()}`;
console.log("Output:" + res);
console.log("Q1 END ==========================================");

// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel or consonant using switch case. Change value of enteredAlphabet and check if your code works fine.
input = "A";
console.log("Input:" + input);
switch (input.toLowerCase()) {
  case "a" || "e" || "i" || "o" || "u":
    console.log("It is a vowel");
    break;
  default:
    console.log("It is a consonant");
    break;
}
console.log("Q2 END ==========================================");

// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.

var n1 = prompt("Enter the number1:");
operator = prompt("choose one of the operator + , - , / , %, *");
var n2 = prompt("Enter the number2:");

switch (operator) {
  case "+":
    window.alert(`${n1} ${operator} ${n2} = ` + (Number(n1) + Number(n2)));
    break;
  case "-":
    window.alert(`${n1} ${operator} ${n2} = ` + (n1 - n2));
    break;
  case "*":
    window.alert(`${n1} ${operator} ${n2} = ` + n1 * n2);
    break;
  case "%":
    if (n2 == 0) break;
    window.alert(`${n1} ${operator} ${n2} = ` + (n1 % n2));
    break;
  case "/":
    if (n2 == 0) break;
    window.alert(`${n1} ${operator} ${n2} = ` + n1 / n2);
    break;
  default:
    window.alert("Enter correct operator");
    break;
}

console.log("Q3 END ==========================================");

// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.

var side1 = prompt("Enter the side1:");
var side2 = prompt("Enter the number2:");
var side3 = prompt("Enter the number3:");

var res = ""
if(side1==side2 && side1==side3){
    res ="Triangle is equilateral"
}

else if ( side1==side2 || side2==side3 || side3==side1){
    res ="Triangle is isosceles"
}
else{
    res = "Triangle is scalene"
}
window.alert(res)
console.log("Q4 END =====================");

// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

var units = 300;
var charge = 0;

var unit50_price = 0.5;
var unit100_price = 0.75;
var unit200_price = 1.2;
var unit250_price = 1.5;
var surplus_charge = 0.2;

var left_units = units;

// first 50 units price
if (left_units >= 50) {
  charge = charge + 50 * unit50_price;
  left_units = left_units - 50;
} else {
  charge = charge + left_units * unit50_price;
  left_units = 0;
}

// next 100 units price
if (left_units >= 100) {
  charge = charge + 100 * unit100_price;
  left_units = left_units - 100;
} else {
  charge = charge + left_units * unit100_price;
  left_units = 0;
}

// next 100 units price
if (left_units >= 100) {
  charge = charge + 100 * unit200_price;
  left_units = left_units - 100;
} else {
  charge = charge + left_units * unit200_price;
  left_units = 0;
}

// next all units price & surplus_charge
if (left_units > 0) {
  charge = charge + left_units * unit250_price;
  charge = charge * (1 + surplus_charge);
}

console.log("Total CHarge: " + charge);
console.log("Q5 END =====================");
