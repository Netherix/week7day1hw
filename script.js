// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// `Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
// */
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

// function findWords(){
//     //Your code goes here
// }

// //Call method here with parameters


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(string, names) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (string.toLowerCase().includes(name.toLowerCase())) {
      console.log(`Matched ${name}`);
    } else {
      console.log("No Match");
    }
  }
}

// //============Exercise #2 ============//
// /*Write a function that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr){
//     //code goes here
// }

// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

findWords(dog_string, dog_names);


let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr.splice(i, 1, "even index");
    }
  }
}

replaceEvens(arr);
console.log(arr);

// Code Wars Problem 1
// My Solution: https://www.codewars.com/kata/reviews/516f302a7c907a79f200069f/groups/584f167d321a2f63fb000e40

// Code Wars Problem 1
// My Solution: https://www.codewars.com/kata/reviews/5265326f5fda8eb1160004cb/groups/61d3e81668975c0001d8958b
