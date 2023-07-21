// split(): The split method splits a string at a specified place.
let string = '30 Days Of JavaScript'
console.log(string.split())     // ["30 Days Of JavaScript"]
console.log(string.split(' '))  // ["30", "Days", "Of", "JavaScript"]
let firstName = 'Risharth'
console.log(firstName.split())  // ["Risharth"]
console.log(firstName.split(''))  // ["R", "i", "s", "h", "a", "r", "t", "h"]
let countries = 'India, Hydrabad, Pune, Banglore, and Mumbai'
console.log(countries.split(',')) // ["India", " Hydrabad", " Pune", " Banglore", " and Mumbai"]
console.log(countries.split(', '))   //  ["India", "Hydrabad", "Pune", "Banglore", "and Mumbai"]