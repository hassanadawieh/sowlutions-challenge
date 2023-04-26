
        //  Problem 1


function validateEmail(str){

//one @ character & one . charcter
let email = str.split('');
let arrchar =[];//array contains characters @ and .
let att = 0;// variable contains the index of @
let point = 0; // variable contains the index of point

//check if the email have more then 256 characters
if(email.length > 256){
  return false;
}
//check if the email have @ character in the first or in the end 
if(email[0] == '@' || email[email.length] == "@" ){
  return console.log(false);
}
// make for loop to get the indexatt and the indexpoint 
for(let h = email.length ; h < email.length ; h++){
  if(email[h]== '.'){
     point = h;
  }
  if(email[h] == '@'){
     att = h;
  }
}
// check if the email have the point befor 3 characters of the end of the email
for(let b = email.length ; b > 0 ; b--){
  if(email[b] == '.'){
    if(b == email.length -3){
    return console.log(false);
    }
  }
}
// check if the point is directly after the @
if(att == point +1){
  return console.log(false);
}

// get all the @ and put it inside the array
for(let i = 0 ; i < email.length ; i++){
if(email[i] == '@'){
   arrchar.push(email[i])
 }
}
// check if we have more than one @ in the array
if(arrchar.length != 1){
  return console.log(false);
}else {
  return console.log(true);
}
} 
  





// validateEmail("john.doe@gmail.com") // Returns true
// validateEmail("john@doe@gmail.com") // Returns false
// validateEmail("john@gmail.c") // Returns false
// validateEmail("john@.com") // Returns false


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

          // Problem 3


function linkedlist(list){

let x = 7;

arraylist = [];//Array to put the number who is under x inside of it.

// Make for loop to check each number if ti's under x to take it
for(let i = 0 ; i < list.length ; i++){
  if(list[i] <= x){
      arraylist.push(list[i]);
  }
}
console.log(arraylist);
}

let list = [10 , 5 , 12 , 7 , 3 , 9 , 10];


linkedlist(list)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        //  Problem 4

function isValidBracketSequence(str) {

  const stack = [];// An array to push the characters ({[

  let ComStr = ''; // Variable to compare 

  for (let i =0; i < str.length ; i++) {
      ComStr = str[i];
    if (ComStr === "(" || ComStr === "[" || ComStr === "{") {
      stack.push(ComStr);
    } else {

      const SecondeComStr = stack.pop();// Create an other variable compared withe the character ({[
        
      if (
        (ComStr === ")" && SecondeComStr !== "(") ||
        (ComStr === "]" && SecondeComStr !== "[") ||
        (ComStr === "}" && SecondeComStr !== "{")
      ) {
        return console.log(false);
      }
    }
  }
  return console.log(stack.length === 0);
}


isValidBracketSequence("()[]{}") // Returns true
isValidBracketSequence("([{}])") // Returns true
isValidBracketSequence("(") // Returns false
isValidBracketSequence("[(])") // Returns false
isValidBracketSequence("{[}]") // Returns false



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //  Problem 2

      const suits = [{"Diamonds":0, "Hearts":15, "Spades":13, "Clubs":4, "Joker":1}];
      const animal = [{"Lion":10, "Fox":4, "Parrot":5, "Seal":11, "Snake":1}];
      const fruit = [{"Apple":2, "Bananas":6, "Mango":4, "Watermelon":11, "Papaya":7}];
      let pursent = 0;
     function count(a,b,c){
      let add = a+b+c;
        return pursent = (add/3)*100
     }

    for(i = 0 ; i < 5 ; i++){
      for(j = 0 ; j < 5 ; j++){
        for(k = 0 ; k < 5 ; k++){
          return 
        }
      }
    }
      

//       hearts =>  15   //lion => 10   //Apple => 2
//       diamonds =>0    //fox => 4     //Bannanas => 6
//       spades => 13    //parrot => 5  //Mango => 4
//       clubs =>4      //seal => 11   //watermelon => 11
//       joker => 1      //snake => 1   //papaya => 7