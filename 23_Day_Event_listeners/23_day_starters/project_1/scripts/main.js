const header = document.getElementById("header");
const title = document.getElementsByTagName("h1");
const searchContainer = document.getElementById("search");
const btn = document.querySelector("button");
const input = document.querySelector("input");
let errReport = document.querySelector("#show-err");
const wrapper = document.querySelector("#wrapper");

header.style.textAlign = "center";
title[0].style.color = "green";

errReport.style.textAlign = "center";
errReport.style.marginBottom = "2px";
errReport.style.fontWeight = "700"; 
errReport.style.fontSize = "20px"; 

searchContainer.style.margin = "auto";
searchContainer.style.width = "90%";
searchContainer.style.margin = "auto";
searchContainer.style.display = "flex";
searchContainer.style.justifyContent = "center";

input.style.padding = "10px 20px";
input.style.width = "40%";
input.placeholder = "Generate more numbers...";
let userInput = input.value

btn.style.padding = "10px 20px";
btn.style.background = "green";
btn.style.color = "white";


wrapper.style.width = '86%';
wrapper.style.margin = "20px auto";
wrapper.style.padding = '5px';
wrapper.style.display = 'flex';
wrapper.style.justifyContent = 'center';
wrapper.style.gap = '5px';
wrapper.style.flexWrap = "wrap";


function getUserInput (){
    let val = input.value;
    if (val === ""){
        errReport.textContent = "Enter number value in the input field to generate number";
        errReport.style.color = "red"
    }
    if(/[a-z]+/i.test(val)) {
        errReport.textContent = "Input value must be a number"
        errReport.style.color = "red"
    }
    if (/^[0-9]+$/.test(val)){
        errReport.textContent = "Hurray! Numbers generated succesfully"
        errReport.style.color = "green"
        return val
    }
    // return val
}

///////----- Submit by clicking keeyboard Enter-key
input.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13){
        btn.click()
    }
})

//////------ Submit clicking button using mouse
btn.addEventListener("click", function(){
    wrapper.textContent = ""
    let userInput = getUserInput()
    addItem(userInput)
    input.value = ""
})


/////////////---- Not working as expected
function isPrime(num) {
    // num = getUserInput();
    if(num <= 1) return false
    if(num == 2 || num == 3) return true
    for (let index = 2; index <= Math.sqrt(num); index++) {
        if(num % index == 0 ) {
            return false
        }
    }
    return true
}

///////----- Create and add numbers to DOM
function addItem (num=50){    
    for (let index = 0; index < num; index++) {
        let createDiv = document.createElement("div")
        createDiv.textContent = index;
        wrapper.append(createDiv)
   
        if (index % 2 == 0) {
            createDiv.style.background = 'green';
        }
        if(index % 2 == 1){
            createDiv.style.background = "yellow";
        }
        if(isPrime(index)){
            createDiv.style.background = "pink";
            
        }
        
        createDiv.style.fontSize = "30px";
        createDiv.style.height = "40px";
        createDiv.style.width = "70px";
        createDiv.style.display = "flex";
        createDiv.style.justifyContent = "center";
        createDiv.style.alignItems = "center";
    }
}
addItem()


