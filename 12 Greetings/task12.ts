//Task 12:
//Greetings: Start with the array you used in Exercise 11,
//but instead of just printing each person’s name, 
//print a message to them. The text of each message
//should be the same, but each message should be personalized with the person’s name.

let names2: string [] = ["Ahad","Abuzar","Faizan","Noman"];

let message2:string = "How are you doing today"
//Method 1
for (let name of names2) {
    console.log(`Hello ${name} ${message2}`);
}
    //this is another method
/*
console.log(names[0], message);
console.log(names[1], message);
console.log(names[2], message);
console.log(names[3], message);*/