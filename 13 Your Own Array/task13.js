//Task 13:
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
//and make a list that stores several examples. Use your list to print a series of statements about
//to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//method 1
var Favourit_Transport = ["Green line ", "Motor cycle", "Car", "w-11"];
console.log("Green line is the best facality for karachi citizen and also have low price ticket");
console.log("There is also a risk when you are riding a", Favourit_Transport[1]);
console.log("I wish i would have automatic ", Favourit_Transport[2], " in future");
console.log(Favourit_Transport[3], " is like a bride of transpors");
//for each method
Favourit_Transport.forEach(function (Favourit_Transport) {
    console.log("I would like to own a ".concat(Favourit_Transport, "."));
});
