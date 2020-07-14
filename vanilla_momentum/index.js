/* string 
const what = "kim";

boolean 
const wat = true;

number
const wat = 666; 

float 
const wat = 55.1;

console.log(what)

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek[2]);

const kimInfo = {
  name: "Hyunmin",
  age: 25,
  gender: "Male"
};

console.log(kimInfo.age);


function sayHello(name, age){
  console.log('Hello!', name, 'you have', age, 'years of age.');
}

sayHello('kim', 25);

function sayHello2(name, age){
  return `Hello ${name} you are ${age} years old`;
}

const greetKim = sayHello2("Kim", 25)
console.log(greetKim)

const calculator = {
  plus: function(a, b){
    return a + b 
  },
  minus: function(a, b){
    return a - b 
  },
  multi: function(a, b){
    return a * b 
  },
  div: function(a, b){
    return a / b
  }
}

const plus = calculator.plus(5, 5)
const minus = calculator.minus(6, 4)
console.log(plus, minus)

/* 
const title = document.getElementById("title");
*/

/*
function handleResize(event) {
  console.log(event)
}

window.addEventListener("resize", handleResize);

title.innerHTML = "Hi! From JS"; 
title.style.color = "red"; 
document.title = "I own you now";
*/

/*
const title = document.querySelector("#title");

const BASE_COLOR = "black";
const OTHER_COLOR = "blue";
 
function handleClick() {
  const currentcolor = title.style.color;
  if (currentcolor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();

function handleOffline() {
  console.log("now_offline");
}
function handleOnline() {
  console.log("now_online");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
  /* 클릭에 따라 클라스 변화: 아래 과정은 toggle로 대체 가능 
  const hasClass = title.classList.contains(CLICKED_CLASS);
  
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
  */
}

function init() {
  title.addEventListener("click", handleClick);
}
init();