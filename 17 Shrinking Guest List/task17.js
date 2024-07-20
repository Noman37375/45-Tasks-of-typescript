//Task 17:
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
// • Start with your program from Exercise 16.
//Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end
// of your program.
var GuestList4 = ["Ahad", "Abuzar", "Faizan", "Noman"];
var canNotAttend3 = "Ahad";
GuestList4[GuestList4.indexOf(canNotAttend3)] = "Altaf";
var middleGuest2 = "Ubaid";
var middleIndex2 = GuestList4.length / 2;
GuestList4.splice(middleIndex2, 0, middleGuest2);
GuestList4.push("Ahsan");
console.log(GuestList4);
console.log("Unfortunately, I can only invite two people for dinner.");
while (GuestList4.length > 2) {
    var removeGuest = GuestList4.pop();
    console.log("".concat(removeGuest, " is sorry you can't invite them to dinner."));
}
console.log("Here are the remaining two people invited.");
while (GuestList4.length > 0) {
    var remainingGuest = GuestList4.pop();
    console.log("".concat(remainingGuest, " is still invited."));
}
console.log(GuestList4);
