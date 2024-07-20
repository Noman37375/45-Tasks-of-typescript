//Task 15:
//Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.
let GuestList2: string[] = ["Ahad","Abuzar","Faizan","Noman"];
let canNotAttend: string = "Ahad";
let newGuest:string="Altaf";
GuestList2[GuestList2.indexOf(canNotAttend)] = newGuest;
//method 1:
GuestList2.forEach((GuestList2) => {
    console.log(
      `My dear Friend ${GuestList2} i am glade to to invite you for dinner`
    );
  });
  //method 2
// console.log("My dear Friend ",GuestList2[0],"i am glade to to invite you for dinner");
// console.log("My dear Friend ",GuestList2[1],"i am glade to to invite you for dinner");
// console.log("My dear Friend ",GuestList2[2],"i am glade to to invite you for dinner");
// console.log("My dear Friend ",GuestList2[3],"i am glade to to invite you for dinner");