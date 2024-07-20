var GuestList2 = ["Ahad", "Abuzar", "Faizan", "Noman"];
var canNotAttend = "Ahad";
var newGuest = "Altaf";
GuestList2[GuestList2.indexOf(canNotAttend)] = newGuest;
//method 1:
GuestList2.forEach(function (GuestList2) {
    console.log("My dear Friend ".concat(GuestList2, " i am glade to to invite you for dinner"));
});
//method 2
// console.log("My dear Friend ",GuestList2[0],"i am glade to to invite you for dinner");
// console.log("My dear Friend ",GuestList2[1],"i am glade to to invite you for dinner");
// console.log("My dear Friend ",GuestList2[2],"i am glade to to invite you for dinner");
// console.log("My dear Friend ",GuestList2[3],"i am glade to to invite you for dinner");
