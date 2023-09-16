"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Assign 2: Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//Sol:
var isName = "Abdullah Shahid";
var message = ("Hi " + isName + ", Would You Like To Learn Some Programming Language Today?");
console.log(message);
// Assign 3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
//  uppercase, and titlecase.
//Sol:
var myName = "Abdullah Shahid";
console.log("Title Case :" + myName); // Tital Case
console.log("Upper Case:" + myName.toUpperCase()); //use of upperCase()
console.log("Lower Case:" + myName.toLocaleLowerCase()); //use of lowerCase()
// Assign 4: Famous Quote: Find a quote from a famous person you admire. 
// Print the quote and the name of its author. Your output should look something like the following, 
// including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//Sol
var author = "Albert Einstein";
console.log(`"${author}" Once Said," A Person Who Never Made A Mistake Never Tried Anything New."`);
//Assign 5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in 
// a variable called famous_person. Then compose your message and store it in a new variable called message. 
// Print your message.
//Sol:
var famous_person = "Albert Einstein";
var message = `"${famous_person}" Once Said," A Person Who Never Made A Mistake Never Tried Anything New."`;
console.log(message);
// Assign 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and 
// end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces?
//Sol:
let Name = "Abdullah \n \tShahid";
console.log(Name);
// Number Eight: Write addition, subtraction, multiplication, and division operations 
// that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
let addition = 4 + 4;
let subtraction = 12 - 4;
let multiplication = 4 + 2;
let division = 64 / 8;
console.log(`Addition = ${addition} , Subtraction = ${subtraction} , Multiplication = ${multiplication}, Division = ${division}`);
// Assign 8: You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
//Sol:
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(64 / 8);
// Assign 9: Favorite Number: Store your favorite number in a variable. Then, 
// using that variable, create a message that reveals your favorite number. Print that message.
//Sol
var favNumber = 7;
var message = `My Favourite Number is " ${favNumber} "`;
console.log(message);
//Assign 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does.
//Sol:
//This program is to write a name  by using blank spaces
let name = "Abdullah \n \tShahid";
console.log(name);
//This program is used to calculate values by using arithmetic operation:
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(64 / 8);
// Assign 11: Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
//Sol
let friendsName = ["Abdullah", "Zaid", "Ans", "Ibrahim", "Ayyan"];
for (let i = 0; i < friendsName.length; i++) {
    console.log(friendsName[i]);
}
// Assign 12: Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.
//Sol
let my_friends = ["Abdullah", "Zaid", "Ans", "Ibrahim", "Ayyan"];
// my_friends.forEach((data)=>{
for (let i = 0; i < my_friends.length; i++) {
    console.log(`Your are my loyal friend Mr. ${my_friends[i]}`);
}
//Assign 13 Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”
//Sol:
let transport = ["Bike", "Car", "Ship", "Plane"];
console.log(`I would like to own Honda Civic "${transport[1]}"`);
// Assign 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make 
// a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
//Sol:
let guest = ["Abdullah", "Zaid", "Ahsan"];
for (let i = 0; i < guest.length; i++) {
    console.log(`I would like to dinner Mr."${guest[i]}"`);
}
// Assign 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Sol:
// let guest:string [] = ["Abdullah" , "Zaid" ,"Ahsan"];
console.log();
guest.pop();
console.log();
for (let i = 0; i < guest.length; i++) {
    console.log(`I would like to dinner Mr."${guest[i]}"`);
}
// • Start with your program from Exercise 14. 
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
// let guest:string [] = ["Abdullah" , "Zaid" ,"Ahsan"];
console.log();
console.log(`He did not attend dinner `, guest.pop());
// • Modify your list, replacing the name of the guest who can’t make it with the name of the 
// new person you are inviting.
//Sol
// let guest:string [] = ["Abdullah" , "Zaid" ,"Ahsan"];
console.log();
guest.splice(2, 1, "Musa");
console.log(guest);
// • Print a second set of invitation messages, one for each person who is still in your list.
for (let i = 0; i < guest.length; i++) {
    console.log(`I would like to dinner Mr."${guest[i]}"`);
}
// Assign 16: More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//Sol
guest.splice(1, 0, "Naseem", "Javed");
for (let i = 0; i < guest.length; i++) {
    console.log(`I would like to dinner Mr."${guest[i]}"`);
}
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people
//  that you found a bigger dinner table.
//Sol
for (let i = 0; i < guest.length; i++) {
    console.log(`I have found a bigger dinner table Mr."${guest[i]}"`);
}
//• Add one new guest to the beginning of your array.
//Sol
guest.unshift("Usman");
console.log(guest);
//• Add one new guest to the middle of your array.
//Sol
guest.splice(Math.floor(guest.length / 2), 0, "Ali");
console.log(guest);
//• Use append() to add one new guest to the end of your list. 
//Sol
guest.push("Maqsood");
//• Print a new set of invitation messages, one for each person in your list.
for (let i = 0; i < guest.length; i++) {
    console.log(`I would like to call for dinner Mr."${guest[i]}"`);
}
// Assign 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the 
//dinner, and you have space for only two guests.
//  • Start with your program from Exercise 16. 
//  Add a new line that prints a message saying that you can invite only two people for dinner.
//Sol:
guest.pop();
guest.pop();
guest.pop();
guest.pop();
guest.pop();
guest.pop();
console.log(guest);
for (let i = 0; i < guest.length; i++) {
    console.log(`I would like to call for dinner Mr."${guest[i]}"`);
}
//  • Remove guests from your list one at a time until only two names remain in your list. 
//  Each time you pop a name from your list, print a message to that person letting them know 
//  you’re sorry you can’t invite them to dinner.
//  • Print a message to each of the two people still on your list, letting them know they’re still invited.
//  • Remove the last two names from your list, so you have an empty list. 
//  Print your list to make sure you actually have an empty list at the end of your program.
//Sol
guest.pop();
guest.pop();
console.log;
console.log(`I have an empty list to invite to dinner ${guest}`);
// Assign 18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
let places = ["Rome, Italy", "Hunza, Pakistan", "London, England", "Angkor Wat, Cambodia", "Bali , Indonesia"];
console.log(places);
//• Print your array in alphabetical order without modifying the actual list.
console.log(places.sort());
console.log(places);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(places.reverse());
//• Show that your array is still in its original order by printing it again.
console.log(places.reverse());
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(places.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(places.reverse());
// sort your array so it’s stored in alphabetical order. 
//Print the array to show that its order has been changed.
console.log(places.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.
console.log(places.reverse());
// Assign 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.
let guests = ["Abdullah", "Zaid", "Ahsan"];
console.log(`I am inviting ${guests.length} Number of Guests`);
//Assign 20: Think of something you could store in a array. 
//For example, you could make a list of mountains, rivers, countries, cities, languages, 
//or anything else you’d like. Write a program that creates a list containing these items.
//Sol
let countries = ["England", "Canada", "America", "Italy", "Russia"];
for (let i = 0; i < countries.length; i++) {
    console.log(`${countries[i]}`);
}
let students = [
    {
        name: "Abdullah",
        class: "BS",
        roll_no: 1776,
    },
    {
        name: "Ans",
        class: "F.Sc",
        roll_no: 3524,
    },
    {
        name: "Zaid",
        class: "BS-Law",
        roll_no: 3232,
    },
];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
// Assign 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs to produce an index error. 
// Make sure you correct the error before closing the program.
let cities = ["London", "Jakarta", "Washington", "Islamabad", "Colombo"];
console.log(cities[5]); //Error -- There is no index 5 exist in Array:
console.log(cities[3]);
// Assign 23: Conditional Tests: Write a series of conditional tests. 
// Print a statement describing each test and your prediction for the results of each test. 
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//
let isCar = "Honda";
if (isCar == "Honda") {
    console.log(true);
}
else {
    console.log(false);
}
//Evaluate to even or odd:
let num = 6;
if (num % 2 == 0) {
    console.log("Even Number");
}
else {
    console.log("Odd Number");
}
//age limit for vote casting:
let age = 18;
if (age >= 18) {
    console.log("He is Eligible");
    console.log(true);
}
else {
    console.log("He is not Eligible");
    console.log(false);
}
//Evaluate to two operands on operation:
if (4 * 5 == 20) {
    console.log("Expression is =", true);
}
else {
    console.log("Expression is =", false);
}
//Evaluate number 10 is greater than:
let val = 10;
let val_0 = 7;
if (val > val_0) {
    console.log(true);
}
else {
    console.log(false);
}
//evaluate uppercase or lowercase
let Bike = "suzuki";
if (Bike == "SUZUKI") {
    console.log(true);
}
else {
    console.log(false);
}
// evluate the leap year
let leapYear = 2023;
if (leapYear % 4 == 0) {
    console.log("Leap Year", true);
}
else {
    console.log("Not a Leap Year", false);
}
//recognition of Mango's Color:
let mangoColor = "Blue";
if (mangoColor == "Yellow") {
    console.log(true);
}
else {
    console.log(false);
}
//recognition of Mango's Color:
let a = 13;
let b = 12;
if (a == b) {
    console.log(true);
}
else {
    console.log(false);
}
//Build a Program true or false (RAM Stands for)
let RAM = "Reading Access Memory";
if (RAM == "Random Access Memory") {
    console.log(true);
}
else {
    console.log(false);
}
// Assign 25: More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var fruit1 = "Apple";
var fruit2 = "Mango";
if (fruit1 == fruit2) {
    console.log("They are equal in length");
}
else {
    console.log("They are not equal in length");
}
// • Tests using the lower case function
let countryName = "PAKISTAN";
if (countryName.toLocaleLowerCase() == countryName) {
    console.log("It contains lowercase");
}
{
    console.log("It contains uppercase");
}
// • Numerical tests involving equality and inequality, 
//greater than and less than, greater than or equal to, and less than or equal to
let num1 = 7;
let num2 = 7;
if (num1 != num2) {
    console.log("Inequality");
}
else {
    console.log("Equality");
}
// • Tests using "and" and "or" operators
let raining = true;
let sunny = false;
if (raining && sunny) {
    console.log("It is raining and sunny outside");
}
else {
    console.log("It is not raining and sunny outside");
}
//wether it is raining or suuny by using OR operator
let is_raining = true;
let is_sunny = false;
if (is_raining || is_sunny) {
    console.log("It is raining or sunny outside");
}
else {
    console.log("It is not raining or sunny outside");
}
// • Test whether an item is in a array
let evenNumber = [2, 4, 6, 8,];
if (evenNumber[3] == 8) {
    console.log("It is include even number in array");
}
else {
    console.log("It is not include even number in array");
}
// • Test whether an item is not in a array
let oodNumber = [1, 3, 7, 9,];
if (oodNumber[2] == 8) {
    console.log("It is include odd number in array");
}
else {
    console.log("It is not include odd number in array");
}
// Assign 25: Alien Colors #1: Imagine an alien was just shot down in a game. 
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. 
//If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. 
//(The version that fails will have no output.)
let alien_color = "green";
if (alien_color == "green") {
    console.log("The Player just earned 5 points");
}
// 26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
console.log();
let alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("The Player just earned 5 points");
}
else {
    console.log("The Player just earned 10 points");
}
console.log();
let alien_color2 = "red";
if (alien_color2 == "green") {
    console.log("The Player just earned 5 points");
}
else {
    console.log("The Player just earned 10 points");
}
// Assign 27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log();
let alien_color4 = "red";
if (alien_color4 == "green") {
    console.log("The Player just earned 5 points");
}
else if (alien_color4 == "yellow") {
    console.log("The Player just earned 10 points");
}
else {
    console.log("The Player just earned 15 points");
}
// Assign 28: Stages of Life: Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var is_age = 18;
if (is_age >= 2 && is_age <= 4) {
    console.log("Person is a Toddler");
}
else if (is_age >= 4 && is_age <= 13) {
    console.log("Person is a Kid");
}
else if (is_age >= 13 && is_age <= 20) {
    console.log("Person is a Teenager");
}
else if (is_age >= 20 && is_age <= 65) {
    console.log("Person is a Adult");
}
else {
    console.log("Person is a Adult");
}
// Assign 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
// statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["banana", "apple", "mango"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like banana");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apple");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mango");
}
if (favorite_fruits.includes("peach")) {
    console.log("You really like peach");
}
if (favorite_fruits.includes("Melon")) {
    console.log("You really like Melon");
}
//Assign 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website. 
// Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let user_Name = ["admin", "Abdullah", "Zaid", "Ahmed", "Ans"];
if (user_Name[0] == "admin") {
    console.log("Hello admin, would you like to see a status report?");
}
else {
    console.log("Hello Abdullah, thank you for logging in again.");
}
// Assign 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userName = [];
if (userName.length == 0) {
    console.log("We need to find some users!");
}
else {
    if (userName[0] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello Abdullah, thank you for logging in again.");
    }
}
//Assign 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that 
//everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in 
//the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print 
// a message that the person will need to enter a new username. If a username has not been used, 
// print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["abdullah", "ans", "zaid", "ahsan", "ahmed"];
let new_users = ["Abdullah", "zAID", "emma", "Amir", "FARAZ"];
for (var i = 0; i < new_users.length; ++i) {
    console.log(`Checking ${new_users[i]}`);
}
// Step 1: Make a list of current users and new users
const currentUsers = ["Abdullah", "Naeem", "Zaid", "Maqsood", "Fahad"];
const newUser = ["ABdullah", "Ans", "Amir", "zaid", "Awais"];
for (const newUsers of newUser) {
    if (currentUsers == newUser) {
        console.log(`${newUsers} is taken`);
    }
    else {
        console.log(`${newUsers} is available.`);
    }
}
//Assign 33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
//Sol
let ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < ordinalNumber.length; i++) {
    let suffix;
    if (ordinalNumber[i] == 1) {
        suffix = "st";
    }
    else if (ordinalNumber[i] == 2) {
        suffix = "nd";
    }
    else if (ordinalNumber[i] == 3) {
        suffix = "rd";
    }
    else {
        suffix = "th";
    }
    console.log(`${ordinalNumber[i]}${suffix}`);
}
//Assign 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
//  and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of 
// the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni 
// pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an additional 
// sentence, such as I really love pizza!
//Sol: 
let pizza = ["Margherita", "marinara", "pepperoni"];
pizza.forEach((data) => {
    console.log(`I like ${data} pizza`);
});
console.log();
console.log(`My Favourite ${pizza[1]} pizza`);
console.log(`I Really Love ${pizza[0]} pizza!`);
//Assign 35:Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!
//Sol: 
let pet = ["Cat", "Horse", "Dog"];
for (let pets of pet) {
    console.log(`A ${pets} would make a great pet.`);
}
console.log(`\nAny of these animals would make a great pet!`);
// Assign 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of 
// a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. 
// Call the function.
//Sol: 
function make_shirt(shirt) {
    console.log(shirt);
    return make_shirt;
}
make_shirt("Summarizing the size of the shirt");
//Assign 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
// message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
// def make_shirt(size='large', message='I love TypeScript'):
//     print(f"Creating a {size} shirt with the message: {message}")
// # Create a large shirt with the default message
// make_shirt()
// # Create a medium shirt with the default message
// make_shirt(size='medium')
// # Create a small shirt with a custom message
// make_shirt(size='small', message='Hello, World!')
//Assing 38: Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for 
// the country a default value. Call your function for three different cities, at least one of which is not 
// in the default country.
//Assign 39: City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:
// "Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function describe_city(country) {
    console.log(country);
    return describe_city;
}
describe_city(["Lahore, Pakistan", "London, England", "Washington, USA"]);
let album = [{
        name: "Justin Barber",
        album: "Believe",
        track: "Fall"
    },
    {
        name: "Taylor Swift",
        album: "Fearless",
        track: "Breathe",
    },
    {
        name: "Michael Jackson",
        album: "Thriller",
        track: "Thriller"
    },
];
for (let make_album of album)
    console.log(make_album.album);
//Assign 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++)
        console.log(magician[i]);
    return show_magicians;
}
show_magicians(["Aric", "Fleming", "Straus"]);
//Assign 42: Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great 
// to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magician) {
    for (let i = 0; i < magician.length; i++)
        console.log(`The Great Magician ${magician[i]}`);
    return make_great;
}
make_great(["Aric", "Fleming", "Straus"]);
//Assign 43   Unchanged Magicians: Start with your work from Exercise 40. 
//  Call the function make_great() with a copy of the array of magicians’ names. 
//  Because the original array will be unchanged, return the new array and store it in a separate array. 
//  Call show_magicians() with each array to show that you have one array of the original names and one array 
//  with the Great added to each magician’s name?
//Assign 44:Sandwiches: Write a function that accepts an array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.
function foodOrder(food) {
    food.forEach((foods) => {
        console.log(`I am happy to eat ${foods}`);
    });
    // console.log(food)
    // return foodOrder;
}
foodOrder(["Beef Sandwich", "Vegetable Sandwich", "Cold Sandwich", "Fried Sandwich"]);
function foodsOrder(food) {
    // food.forEach((foods) =>
    // {
    //     console.log(`I am happy to eat ${foods}`)
    // })
    console.log(food);
    return foodOrder;
}
foodsOrder([`I would like to eat Beef Sandwich`]);
foodsOrder([`I would like to eat vegetable Sandwich`]);
foodsOrder([`I would like to eat Cold Sandwich`]);
function createCar(manufacturer, model, ...extras) {
    const car = {
        manufacturer: manufacturer,
        model: model
    };
    for (let extra of extras) {
        const [key, value] = extra.split(":");
        car[key.trim()] = value.trim();
    }
    return car;
}
const myCar = createCar("Toyota", "Camry", "color: red", "optionalFeature: sunroof");
console.log(myCar);
