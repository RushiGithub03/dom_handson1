
var text=document.getElementById("text");

var h1Elements=document.getElementsByTagName("h1");

console.log(h1Elements);

for(let i=0; i<h1Elements.length; i++){
    console.log(h1Elements[i]);
}

console.log("___________________________________________________");
// for of gives the values

for(let i of h1Elements){

    console.log(i);
}

console.log("___________________________________________________");
// using for in gives the index

for(let i in h1Elements){
    console.log(h1Elements[i]);
}

console.log("____________________________________________________");

console.log(text);


// qeustion 3 js

var containerDivs=document.getElementsByClassName("box");

console.log(containerDivs[0]);
console.log(containerDivs[1]);
console.log(containerDivs[2]);
console.log("================================================")


for(let con of containerDivs){
    console.log(con);
}


// question 4

var divContainer=document.getElementsByClassName("container2");
console.log(divContainer);

var h1ElementsById=document.getElementById("hd");
console.log(h1ElementsById);


function cli(){
    h1ElementsById.innerText="Hello World";
}

cli();



// question 5

var heading=document.getElementById("headings");



var btn=document.getElementsByTagName("button");

function textChange(){
    heading.innerText="Welcome to Elevation academy";
}
 btn[0].addEventListener("click", textChange);

// Create an HTML page having content as Hello world and a button named Replace Text. 
// When user will click on this button page content should be changed to 
// "Welcome to Elevation academy"



// question 6

let headings =document.getElementsByClassName("q6");

headings[0].setAttribute("style","color:red");
headings[0].setAttribute("id","heading");




// question-7 

let container7=document.getElementsByClassName("container7");
console.log(container7);


let btn2 =document.getElementById("bn");

let adds=function adds(){
    // container[0].style.flexDirection="column";
    container7[0].style.backgroundColor="blue";
    container7[0].style.flexDirection="column";
    // window.alert("hii I'm rushikesh rathod");

   
}

// adds();


// question no 9

function clock(){
    
    let hr=document.getElementById("hrs");

   let min=  document.getElementById("mins");

  let sec= document.getElementById("secs");
  let ampm= document.getElementById("ampm");

  let date =  new Date();

  let hrs= date.getHours();
  let mins= date.getMinutes();
  let secc= date.getSeconds();
  
  if(hrs>12 ){
    hrs=hrs-12;
    ampm.innerText="PM";

  }

  else{
    ampm.innerText="AM"
  }

  hr.innerText=hrs;

  min.innerText= mins;

 sec.innerText= secc;



}

setInterval(()=>{
   clock();
},1000)


