// Useful methods of the string
// following are the functions for this:-
// trim()
// toUpperCase()
// toLowerCase()
// slice()

// trim() -> It trims out the after and before spaces
// let first_name="  Maruti  ";
// console.log(first_name);
// console.log(first_name.length);
// first_name= first_name.trim();
// console.log(first_name);
// console.log(first_name.length);

// toUpperCase()->converts All the letter to upper case
// let firstName="Soumyadeep";
// firstName= firstName.toUpperCase();
// console.log(firstName);

// tolowerCase()-> Convert all to the lowercase.
// let firstname="SOUMYADEEP";
// firstname=firstname.toLowerCase();
// console.log(firstname);

// slice()--> to slice the string and print that sliced string which user want to.
let firstname= "Mahadev";
let newstring=firstname.slice(0,4);
//in slice function the second parameter tells 4-1=3 that is it will slice from 0 to 3.
console.log(newstring);
newstring=firstname.slice(1);// that slice from index 1 to end.
console.log(newstring);


