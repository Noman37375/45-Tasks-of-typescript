var GuestList = ["Ahad", "Abuzar", "Faizan", "Noman"];
//method 1
// GuestList.forEach((GuestList)=>{
//     console.log(`My dear Friend ${GuestList} i am glade to to invite you for dinner`);
// })
//method 2:
// for(let i=0;i<GuestList.length;i++){
//     console.log(`My dear Friend ${GuestList[i]} i am glade to to invite you for dinner`);
// }
//Method 3
console.log("My dear Friend ".concat(GuestList[0], " i am glade to to invite you for dinner"));
console.log("My dear Friend ".concat(GuestList[1], " i am glade to to invite you for dinner"));
console.log("My dear Friend ".concat(GuestList[2], "  i am glade to to invite you for dinner"));
console.log("My dear Friend ".concat(GuestList[3], " i am glade to to invite you for dinner"));
