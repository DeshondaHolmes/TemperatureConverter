"use strict";



const resetBtn = document.getElementById("resetBtn");


window.onload = init;

function init(){
    resetBtn.onclick = onResetBtnClicked;
    console.log("click");
    
}


function onResetBtnClicked(){

    txtOutput.value="";
    txtInput.value="";

}
