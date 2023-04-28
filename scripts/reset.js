"use strict";


const myForm = document.getElementById("myForm");
const resetBtn = document.getElementById("resetBtn");


window.onload = init;

function init(){
    resetBtn.onclick = onResetBtnClicked;
    
}

function resetForm() {
    document.getElementById("resetBtn").reset();
  }