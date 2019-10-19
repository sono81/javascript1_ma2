//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Child() {};

Child.prototype.laugh = function () {
    console.log("Hahahaha");
};

var Eline = new Child();

Eline.laugh();


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sliceFifth = myNumbersArray.slice(4, 5);

console.log(sliceFifth);


//3. Delete the last number in the array that you created above.

myNumbersArray.pop();

console.log(myNumbersArray);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:

function changeFruit() {
    var orgText = ("Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.");

    var newText = orgText.replace(/strawberry/gi, "banana").replace(/strawberries/gi, "bananas");

    console.log(newText);
}

changeFruit();


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.


var footballClubs = ["Wolves", "Odd Grenland", "Barcelona", "AC Milan"];
console.log(footballClubs);

function teamsToCars() {

    footballClubs.splice(0, 4);

    footballClubs.push("Ford", "Hyundai", "Kia", "Lada");

    console.log(footballClubs);

}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var people = [
    {
        firstName: "Gunnar",
        lastName: "Hansen",
        age: 48,
        heigth: 192,
        alive: true
    },
    {
        firstName: "Dordi",
        lastName: "Svendsen",
        age: 78,
        heigth: 153,
        alive: false
    },
    {
        firstName: "Sven",
        lastName: "Oppigard",
        age: 14,
        heigth: 160,
        alive: true
    }
];

var filterByName = people.filter(function (name) {
    return name.firstName === "Dordi";
});

console.log(filterByName);

//7. Create a simple function that logs the date.

var date = new Date();
console.log(date);
