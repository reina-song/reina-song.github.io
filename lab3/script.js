// https://www.05js.org
// this code comes from this tutorial
// command + / is the comment command in any language

var schmoDiv = document.getElementById("schmo marie");
// schmoDiv.hidden = true;
if(schmoDiv === null){
    // do something!
}
console.log(schmoDiv);

// ---------------------------------------------
// https://www.w3schools.com/tutorial/onclicked

function ourDivWasClicked(){
    if(schmoDiv.innerHTML === "Hello"){
        schmoDiv.innerHTML = "Oop you found the secret message! Quickly click it again to hide it!";
    }else {
        schmoDiv.innerHTML = "Hello";
    }
}

schmoDiv.onclick = ourDivWasClicked;
// end tutorial code
// -------------------------------------