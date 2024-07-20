//Task 3:
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, 
// uppercase, and titlecase.

let PersonName2 = "Muhammad Noman";
console.log("Upper Case:",PersonName2.toUpperCase());
console.log("Lower Case:",PersonName2.toLowerCase());
console.log("TitleCase:", PersonName2.replace(/\b\w/g, c => c.toUpperCase()));
// Explanation:
// split(' '): Splits the string into an array of words based on spaces.
// map(word => ...): Iterates over each word in the array.
// word.charAt(0).toUpperCase(): Converts the first character of the word to uppercase.
// word.slice(1).toLowerCase(): Converts the rest of the word to lowercase.
// join(' '): Joins the array of words back into a single string with spaces in between.
// This approach ensures that each word in the string is properly capitalized, even if the input string is in mixed or unexpected cases.