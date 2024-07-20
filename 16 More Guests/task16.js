//Task 16:
// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var GuestList3 = ["Ahad", "Abuzar", "Faizan", "Noman"];
var canNotAttend2 = "Ahad";
GuestList3[GuestList3.indexOf(canNotAttend2)] = "Altaf";
var middleGuest = "Ubaid";
var middleIndex = GuestList3.length / 2;
GuestList3.splice(middleIndex, 0, middleGuest);
GuestList3.push("Ahsan");
console.log(GuestList3);
//method 1
GuestList3.forEach(function (GuestList3) {
    console.log("My dear Friend ".concat(GuestList3, " i am glade to to invite you for dinner"));
});
/*
console.log("My dear Friend ",GuestList[0],"i am glade to to invite you for dinner");
console.log("My dear Friend ",GuestList[1],"i am glade to to invite you for dinner");
console.log("My dear Friend ",GuestList[2],"i am glade to to invite you for dinner");
console.log("My dear Friend ",GuestList[3],"i am glade to to invite you for dinner");*/
