// Your code goes here
//document.addEventListener('DOMContentLoaded',function(){
//    console.log ('the Dom has loaded')
//});
//console.log ("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");

const text = document.getElementById('text')

//console.log(text)

function newText() { 
    document.getElementById("text").textContent = "This is really cool!"
}

document.addEventListener('DOMContentLoaded', newText)

//console.log(newText)