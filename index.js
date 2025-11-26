let age = 25;
function displayAge() {
 console.log(age);
}
function changeAge(newAge) {
 age = newAge;           // updates the global variable
 console.log(age);       // print the value after updating
}
displayAge();   // prints: 25
changeAge(30);  // prints: 30
displayAge();   // prints: 30
