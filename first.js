/*console.log("test")
console.log("test2")
fullName = "AKANKSHA";
console.log(fullName);
 age =  18;
console.log(age);
x = null;
y = undefined;
console.log(x);
console.log(y);
isFollow = true;
console.log(isFollow);*/
/*{
    let a = 5;
    console.log(a);
}
{
    let a = 10;
    console.log(a);
}*/
/*let x = BigInt("1234567890123456789012345678901234567890");
let y = BigInt("1234567890123456789012345678901234567890");
console.log(x);
console.log(y);*/
/*const student = {
    name: "Akanksha",
    age: 18,
    isPass : true};
    console.log(student["name"]);

const product = {
      username: "kajalmaurya",
      isFollow: false,
      followers: 1000,
      following:500,
}*/
// this code print hello world in console
/*console.log("Hello World");
// Arthmetic operators
let a =10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//unary operator
let c =10;
let d = 5;
console.log(++c);
console.log(--d);
console.log(c++);
console.log(d--);
console.log(c);
console.log(d);*/
// Assignment operators
/*let a = 5;
let b = 2;
a += b; // a = a + b
console.log(a);
a -= b; // a = a - b
console.log(a);
/*a *= b; // a = a * b
console.log(a);
a /= b; // a = a/ b
console.log(a);
a %= b; // a = a % b
console.log(a);
a === b; // a = a ===b
console.log(a);
console.log(a === b); // false
console.log(a !==b); // true
console.log(a >=b); // true
consol.log(a <=b); // false**/
// logical opperators
/*let a = 6;
let b = 5;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
console.log(!b); // false
console.log(!a && !b); // false
console.log("cond1 || cond2", a > b || a < b); // true
console.log("cond1 && cond2", a > b && a < b); // false
console.log("!(cond1 &&  cond2") || !(a > b && a < b); // true
console.log("!(cond1 || cond2)", !(a > b || a < b)); // false
// conditional Statements
/*let age = 18;
if (age >= 18) {
    console.log("you are eligible to vote");
}*/
/*let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
}
if (mode === "light") {
    color = "white";
}
console.log(color);
let age = 25;
 if (age >= 18 ) {
    console.log("vote");
 } else {
    console.log("not vote");
 }

 let  num = 10;
    if (num %2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
let age = 45;
  if (age < 18) {
    console.log("chiled");
  } else if (age >= 60) {
    console.log("senior citizen");
  } else {
    console.log("adult");
  }
    // ternary operator
    let age = 16;
    let result = age >=18 ? "adult" : "child";
    console.log(result);
    for (let i=1; i<=5; i++) {
        console.log(i);
    }

       let i = 1;
        while (i <= 100) {
            console.log(i);
            i++;
        }
       // calulation
       let sum = 0;
       for (let i=1; i<=100; i++){
        sum += i; // sum= sum + i
       }
       console.log(sum);
       console.log("loop is ended);

       let num = 5;
       do {
        console.log(num);
        num++;
       } while (num <= 10);
        let str = "hello akanksha";
        console.log(str.lenght);
        let size = 0;
        for (let i of str) {
            console.log(i);
            size++;
        }
        console.log(size);
// for in loop
let student = {
    name: "akanksha",
    age : 18,
    cgpa: 8.5,
    isPass: true,
}
for (let key in student) {
    console.log(key, student[key]);
}
for (let i= 0 ; i<=100; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}
// string 
let str = "hello world";
console.log(str.length);
console.log(str[0]);
console.log(str[6]);
console.log(str[10]);

let obj = {
    item : "pen",
    price: 10,
    color: "blue",
};
console.log(obj.item);
let specialString = "this is a special string with backticks";
console.log(specialString);
//scape carrecters
let str = "this is a string with a backslash \\ and a double quote \" and a single quote \' and a new lines character \n and a tab character \t and a carriage return \r and a form feed character \f";
console.log(str);
let str = "hello world";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);
console.log(new String(str));
let str = "      hello   world   js  ";
console.log(str.trim());

let str = "0123456";
console.log(str.slice(2,5));
let str1 = "akanksha";
let str2 = "maurya";
console.log(str1.concat(" ",str2));
console.log(str1 + " " + str2);
console.log(str1.replace ("a", "k"))*/
// array
/*let marks1 = [86, 90, 98, 92, 88];
console.log(marks1);
let heroes = ["superman", "spiderman", "batman"];
for (let i =0 ; i < heroes.length; i++) { 
console.log(heroes[i]);
}
let sum = 0;
for (let val of marks1) {
    sum += val;
}
let average = sum / marks1.length;
console.log(average);
let foodItems = ["pizza", "burger", "pasta", "sushi"];
foodItems.push("ice crem");
console.log(foodItems);
console.log(foodItems.pop());

let marvelHeroes = ["thor", "ironman", "hulk", "captain america"];
let dcHeroes = ["superman", "batman"];

let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);
console.log(marvelHeroes.slice(1,3));
console.log(marvelHeroes.splice(1,2, "black widow","hawkeye"));
console.log(marvelHeroes);
let arr = [1,2,3,4,5,6,7,8,9,10];
//arr.spilce(2,2,201, 102);
// add element
arr.splice(2,0,201,102);
console.log(arr);

// function declaretion
function greet(name) {
    console.log("Hello, " + name + "!");
    console.log("we are learning function in js");
}
myFunction();
greet("akanksha");
greet("kajal");
greet("priya");
function add(a , b) {
    console.log("a+b");
}
function add(a,b) {
    return a + b;
}
(a,b) => {
    console.log(a+b);
}

function mul(a,b) {
    return a*b;
}
let val = add(2,8);
console.log(val);
function countVOwels(str) {
    let count = 0 ;
    for (let char of str.toLowerCase()) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
let arr = ["hello","world", "javascript"];
 console.log(countvowel(arr[0]));

 let nums = [57,89,90,87, 52, 45];
 let newArr = nums.map((val) => {
    return val * 2;
 });
 console.log(newArr);
 let evenNums = nums.filter((val) => {
    return val % 2 === 0;
 });
 console.log(evenNums);
 const array1 = [1,2,3,4,5];
 const array2 = [6,7,8,9,10];
 const output = array1.reduce((res,curr) => {
    return res + curr;
 });
 console.log(output);
 console.dir("heading");
 let firstEl = document.querySelector("myClass");
 console.dir(firstEl);

 let heading = document.querySelector("myClass");
 console.dir(heading);
 let div = document.querySelector("div");
 console.log(div);
 let id = div.getAtt
 div.style.visibility = "hidden";

 let para = document.querySelector("p");
 console.log(para.getAttribute("class"));
 let div = document.querySelector("div");
 div.style.backgroundColor = "green";
 div.style.fontSize = "20px";
 div.innerText = "hello";
 let newBtn = document.createElement("button");
 newBtn.innerText = "click me!";
 console.log(newBtn);

 let p = document.querySelector("p");
 p.after(newBtn);
 let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";
document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();
newHeading.remove();
let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);*/

    let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


    
     
     
 
 
