// ONLY USE THE .reduce() METHOD FOR THIS EXERCISE

// Exercise 1: Return the total population of the given array (data) in the function 'totalpopulation' created below for you
// the function must return 0 if the array is empty
const data = [
  {
    country: 'USA',
    pop: 340,
  },
  {
    country: 'France',
    pop: 133,
  },
  {
    country: 'Bosnia',
    pop: 5,
  }
]

const totalPopulation = data.reduce((acc, currentValue) => acc + currentValue.pop, 0)

console.log("totalPopulation: " + totalPopulation)


// Exercise 2: Given a menu of foods and their calories, 
/**
 * return the AVERAGE NUMBER of calories rounded to TWO DECIMALS for the entire list from the function
 * the function must return null if the array is empty
 * Note: Some elements don't have any calories, skip them in your reduce callback
 * HINT: First calculate the total with .reduce . Then calculate the average
 */

const menu = [
  { name: 'Carrots', calories: 150.45 },
  { name: 'Steak'},
  { name: 'Broccoli', calories: 120.2342 },
  { name: 'Chicken', calories: 250.6523 },
  { name: 'Pizza', calories: 520.124 }
];

const totalCalories = menu.reduce((acc, currentValue1) => acc + currentValue1.calories, 0)
const averageCalories = totalCalories / menu.length
console.log(averageCalories)



// Extra practice: exercise3: Refactor your above code to calculate average if the calories were in strings
const menu1 = [
  { name: 'Carrots', calories: "150.45" },
  { name: 'Steak'},
  { name: 'Broccoli', calories: "120.2342" },
  { name: 'Chicken', calories: "250.6523" },
  { name: 'Pizza', calories: "520.124" }
];

