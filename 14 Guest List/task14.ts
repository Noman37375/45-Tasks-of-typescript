//Task 14:
//Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? Make a list that includes at least three people you’d like to
//invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let GuestList: string[] = ["Ahad", "Abuzar", "Faizan", "Noman"];
//method 1
GuestList.forEach((GuestList) => {
  console.log(
    `My dear Friend ${GuestList} i am glade to to invite you for dinner`
  );
});
//method 2:
// for(let i=0;i<GuestList.length;i++){
//     console.log(`My dear Friend ${GuestList[i]} i am glade to to invite you for dinner`);
// }
//Method 3
// console.log(`My dear Friend ${GuestList[0]} i am glade to to invite you for dinner`);
// console.log(`My dear Friend ${GuestList[1]} i am glade to to invite you for dinner`);
// console.log(`My dear Friend ${GuestList[2]}  i am glade to to invite you for dinner`);
// console.log(`My dear Friend ${GuestList[3]} i am glade to to invite you for dinner`);
