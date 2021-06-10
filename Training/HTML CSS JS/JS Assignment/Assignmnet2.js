console.clear();

// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

var input = [1, 0, 1, 213, 1, 0201];
var search_element = 213;
var indexes = [],
  i;
for (i = 0; i < input.length; i++)
  if (input[i] === search_element) indexes.push(i);
console.log("Input Array:" + input);
console.log("Search Element:" + search_element);

if (indexes.length == 0) console.log("Output:" + -1);
else if (indexes.length == 1) console.log("Output:" + indexes[0]);
else console.log("Output:" + indexes);
console.log("Q1 END ==========================================");

// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5

console.log("Output pattern is");
var k = 5;
for (var i = k; i > 0; i--) {
  var res = "";
  for (var j = k; j > k - i; j--) {
    res = res + j;
  }
  console.log(res);
}
console.log("Q2 END ==========================================");

// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]

var arr = [3, 2, 1, 4, 5, 5, 45, 46, 45];
console.log("Input Array: " + arr);
arr.sort(function (a, b) {
  return a - b;
});
console.log("Output Array: " + arr);

console.log("Q3 END ==========================================");

// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False

var s1 = "LISTEN";
var s2 = "SILENT";

// sort the characters of each string
s1 = s1
  .split("")
  .sort((a, b) => a.localeCompare(b))
  .join("");
s2 = s2
  .split("")
  .sort((a, b) => a.localeCompare(b))
  .join("");

console.log("Input string1:" + s1);
console.log("Input string1:" + s2);
console.log("Output");
if (s1 == s2) {
  console.log("Yes. It is anagram");
} else {
  console.log("No. It is not an anagram");
}

console.log("Q4 END ==========================================");

// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH

var input = "hello";
input = input.split("").reverse().join("");
console.log(input);
console.log("Q5 END =====================");
