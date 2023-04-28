"use strict";

const txtInput = document.getElementById("txtInput");
const txtOutput = document.getElementById("txtOutput");
const convertBtn = document.getElementById("convertBtn");


// This will "wire up" the init function 
// with the onload event of the window.
window.onload = init;

// This will execute when the page first loads, because it is "wired up"
// with the window.onload command above.
function init(){
    convertBtn.onclick = onConvertBtnClicked;
}

// This will execute when the button is clicked, because it is "wired up"
// when the page first loads.
function onConvertBtnClicked(){
    console.log("Clicked!!");

    // get the known (user supplied) values.
    let userTypedValue = txtInput.value;
    let valueAsNumber = parseFloat(userTypedValue);
    console.log("Got the value from the textbox it was: " + userTypedValue);

    // calculate the unknown..
    let fahrenheit = valueAsNumber * (9/5) + 32;
    
    console.log("calculated the value of: " + fahrenheit);


    // display the results to the user
    txtOutput.value = fahrenheit;

}


