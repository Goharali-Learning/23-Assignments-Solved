"use strict";
//Task 01 (Hello World)
//console.log("Hello world");
//Task 02 (Personal Message)
//let personName: string = "Eric";
//console.log(`Hello ${personName} would you like to learn some python today?`);
//Task 03 (Name Cases)
//Lower_case
//let personName: string = "Goharali";
//console.log("lowercase:", personName.toLowerCase());
//Upper_case
//console.log("uppercase:", personName.toLocaleUpperCase());
//Title_case
//console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
//Task 04 (Famous Quote)
//let quote: string = "A person who never made a mistake never tried anything new";
//let author: string = "Albert Einstein";
//console.log(`${author} once said,${quote}`);
//Task 05 (Famous Quote 2)
//let quote: string ="A person who never made a mistakes never tried anything new";
//let famous_person: string = "Albert Einstein";
//let message: string =`${famous_person} once said, ${quote}`;
//console.log(message);
//Task 06 (Stripping Names)
//let personName: string = `\n\t GOHAR ALI \t\n`;
//console.log(personName);
//let stripped: string =personName.trim();
//console.log(stripped);
//Task 07 And 08
//console.log(5+3);
//console.log(10-2);
//console.log(2*4);
//console.log(16/2);
//Task 09 (Favourite Number)
//let favouriteNumber: number = 7;
//console.log(`My favourite Number is ${favouriteNumber}`);
//Task 10 (Adding Comments)
//Gull Gohar
//02-MARCH-2024
//in this program i write my name and today's date in comment and completes my task number 10
//console.log(`I write my Name and Current Date in comment and I complete Task number 10`);
//for check vist program1.ts and program2.ts (files)
//Task 11 (Array Names)
//let friends: string[ ] = [`Nadeem-Khan`,`Adil-Shah`,`Shah-Nawaz`];
//for(let i=0; i<friends.length; i++){
//  console.log(friends[i]);
//}
//Task 12 (Greetings)
// let friends: string[ ] = [`Nadeem-Khan`,`Adil-Shah`,`Shah-Nawaz`];
// let message: string = `You are special guests of tommorow's My Birthday Party buddy `;
//  for(let i=0; i<friends.length; i++){
// console.log(message + friends[i]);
//  }
//Task 13 (Own Array {TRANPORTATION})
//let transportation : string[] = [`Car`,`Bike`,`Plane`,`Bus`];
//for(let i=0; i<transportation.length; i++){
//console.log(`I would like to own a ` + transportation[i]);
//}
//Task 14 (Guests List)
//let guest_list: string[] = [`Nadeem`,`Murtaza`,`Mehmood`,`Tanveer`,`Sameer`];
//for (let i=0; i<guest_list.length; i++){
//console.log(`Dear ` + guest_list[i] + `\n\nYou are invited for a dinner tommorow.\n\nThank You.\n`);
//}
//Task 15 (Changing Guest Lists)
//let not_coming: string = `Nadeem`;
//let new_guest: string = `Adil`;
//guest_list[0] = new_guest;
//for(let i=0; i<guest_list.length; i++){
//console.log(`Dear ` + guest_list[i] + `\n\nYou are invited for a dinner tommorow.\n\nThank You\n`)
//}
//console.log(`Mr ${not_coming}, is not coming for dinner tommorow.`);
//Task 16 (More Guests)
//guest_list.unshift(`Azeem`);
//guest_list.splice(guest_list.length/2, 2, "Meer");
//guest_list.push(`Gohar`);
//for(let i=0; i<guest_list.length; i++){
//console.log(`Dear ` + guest_list[i] + `\n\nYou are invited for a dinner tommorow.\n\nThank You\n`); 
//}
//console.log(`We have found a bigger dinner table so we invited more Guests`);
//Task 17 (Shrinking Guest List)
//console.log(`\n\nUnfortunatly we are out of space, so we have space for two guests only.\n\n`);
//while(guest_list.length>2){
//let removed_guest = guest_list.pop();
//console.log(`Sorry, Dear ${removed_guest}, You are not invited for a dinner tommorow.`)
//} 
//for(let i=0; i<guest_list.length; i++){
//console.log(`Dear ` + guest_list[i] + `\n\nYou all are still invited for a dinner tommorow.\n\nThank You\n`); 
//}
//guest_list.splice(0,2);
//console.log(guest_list);
//Task 18 (Seeing The World)
//let places: string [] = [`Islamabad` , `Beijing`, `Paris` , `New York`];
//Printing Array in Original order
//console.log(`original ` + places);
//Printing Array in alphabetical Order without modifying the actual list.
//console.log(`copy ` + [...places].sort());
//show that your array is still original order by printing it.
//console.log(`original ` + places);
//Printing Array in reverse alphabetical order without changing the order of the original list.
//console.log(`copy ` + [...places].sort().reverse());
//show that your Array is still in its original order by printing it again.
//console.log(`copy ` + [...places].sort().reverse());
//Reverse the order of your list. Print the Array to show that itss order has changed.
//console.log(`copy ` + [...places].sort());
//Revesrse the order of list again.Print the list to show it's back to its original order.
//console.log(`copy ` + [...places].sort().reverse());
//sort your Array so it's stored in alphabetical order. Print the array to show that its order has been changed.
//console.log(`copy ` + [...places].sort());
//Task 19 (Dinner Guests)
// let guest_list: string[] = [`Nadeem`,`Murtaza`,`Mehmood`,`Tanveer`,`Sameer`];
// for (let i=0; i<guest_list.length; i++){
//   console.log(`Dear ` + guest_list[i] + `\n\nYou are invited for a dinner tommorow.\n\nThank You.\n`);
// }
// let lengthGuest: number = guest_list.length;
// console.log(`we are inviting total ${lengthGuest} guests`);
//Task 20(Think of Something you could store in a Array)
// let languages : string [] = [`English` , `Urdu` , `Hindi` , `Arabic`];
// console.log("List Of langueges:")
// for(let top of languages){
//   console.log(top);
// }
//Task 21 (Typescript Objects)
// interface item {
//   bookName : string;
// fruitName : string;
// price : number;
// };
// //creating 2 Objects
// let item= {
//   bookName : `Biology`,
//   price : 450,
// }
// let item2 = {
//   fruitName : `Apple`,
//   price : 20,
// }
// console.log(item);
// console.log(item2);
//Task 22 (intentional Error)
// let array: (string |  number)[] = [`Nadeem`, `Azeem`,4,5,6 ,`Adil`]
// console.log(array[5]);
//Task 23(Conditional Test)
// let car = `subaru`;
// //Test 1: Equality comparison (True)
// console.log("Is car == `subaru`? I predict True.");
// console.log(car == `subaru`); //True
// //Test 2: Strict Equality Comparison (True)
// console.log("Is car === `subaru`? I predict True.");
// console.log(car === `subaru`); //True
// //Test 3: Inequality comparison(False)
// console.log("Is car != `subaru`? I predict False.");
// console.log(car != `subaru`); //False
// //Test 4: Strict inequality comparison(False)
// console.log("Is car !== `subaru`? I predict True.");
// console.log(car !== `subaru`); //True
