"use strict";

const txtInput = document.getElementById("txtInput");
const txtOutput = document.getElementById("txtOutput");
const messagePara = document.getElementById("messagePara");

const resetBtn = document.getElementById("resetBtn");
const convertBtn = document.getElementById("convertBtn");

// This will "wire up" the init function 
// with the onload event of the window.
window.onload = init;

// This will execute when the page first loads, because it is "wired up"
// with the window.onload command above.
function init() {
    convertBtn.onclick = onConvertBtnClicked;
    console.log("windowload");
    resetBtn.onclick = onResetBtnClicked;
    console.log("click");
}


function onResetBtnClicked() {

    txtOutput.value = "";
    txtInput.value = "";
    messagePara.innerHTML = "";


}

// This will execute when the button is clicked, because it is "wired up"
// when the page first loads.
function onConvertBtnClicked() {
    console.log("Clicked!!");

    // get the known (user supplied) values.
    let userTypedValue = txtInput.value;
    let valueAsNumber = parseFloat(userTypedValue);
    console.log("Got the value from the textbox it was: " + userTypedValue);

    // calculate the unknown..
    let celsius = (valueAsNumber - 32) * (5 / 9);

    console.log("converted the value of: " + celsius);


    // display the results to the user
    txtOutput.value = celsius.toFixed(2);

    if (isNaN(userTypedValue) || isNaN(valueAsNumber)) {
        messagePara.innerHTML = "One or more of your input values are invalid";

    } else {
        messagePara.innerHTML = "";

    }

}








