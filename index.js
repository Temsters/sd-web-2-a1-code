"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9,  age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

//Error Handling  (if any object doesn't have a "name" property) for step 5
const errorMessages = document.getElementById("error-messages");

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
const nameList = document.getElementById("names-list");

//Function to create list item
const createListName = (id, name, age) => {
  //If character has no name, print error message
  if (!name) {
    const errorMessage = `Error: Character with ID ${id} does not have a name.`;
    console.error(errorMessage);
    //Append more error messages using += 
    errorMessages.innerText += `${errorMessage}\n`;
  } else {
    return `<li>${name}</li>`;
  }
};
//Function to render names list
function renderNamesList(characters) {
  //Map through characters and create list items
  return characters.map(({ id, name, age }) => createListName(id, name, age));
}
//Print the names to the console
users.forEach(user => console.log(user.name));
//Render the names to the HTML list
nameList.innerHTML = renderNamesList(users).join("");

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
const youngCharacterList = document.getElementById("young-characters-list");
//Function to create list item for young characters
const createListYoungCharacter = (id, name, age) => {
  //If character has no name, print error message
  if (!name) {
    const errorMessage = `Error: Character with ID ${id} is missing a name property.`;
    console.error(errorMessage);
    //Append more error messages using +=
    errorMessages.innerText += `${errorMessage}\n`;
  } else {
  return `<li>${name} is ${age} years old </li>`;
  }
};

//Function to filter young characters
function filterYoungCharacters(characters) {
  //Filter characters whose age is less than 40
  return characters.filter((characters) => characters.age < 40);
}
//Print the names of young characters to the console
filterYoungCharacters(users).forEach(user => console.log(user.name));
//Render the names of young characters to the HTML list.
youngCharacterList.innerHTML = filterYoungCharacters(users).map(({ id, name, age }) => createListYoungCharacter(id, name, age)).join("");

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
const functionList = document.getElementById("function-list");
//Reusable function to render an alphabetic array of character names
function renderAlphabeticCharacterNames(characters) {
  //Map through characters, extract names, and sort them alphabetically
  return characters.map(user => user.name).sort();
}
//Print the names to the console in alphabetic order
renderAlphabeticCharacterNames(users).forEach(name => console.log(name)); 
//Render the names to the HTML list in alphabetic order
functionList.innerText = renderAlphabeticCharacterNames(users).join(", ");


// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
const ageFilterList = document.getElementById("age-filter-list");
//Function to filter characters below a given age threshold
function filterCharactersByAge(characters, age) {
  //Filter characters whose age is below the given age
  return characters.filter((characters) => characters.age < age);
}
//Print the names of characters below the age of 30
filterCharactersByAge(users, 30).forEach(user => console.log(user.name));
//Render the names of characters below the age of 30 to the HTML list
ageFilterList.innerHTML = filterCharactersByAge(users, 30).map(({ id, name, age }) => createListYoungCharacter(id, name, age)).join("");

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
//see above in functions createListName and createListYoungCharacter

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
