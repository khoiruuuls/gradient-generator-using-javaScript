let colorOne = document.getElementById("color-a");
let colorTwo = document.getElementById("color-b");
let currentDirection = "to top";
let outputCode = document.getElementById("code");

function setDirection(value, hello) {
    let directions = document.querySelectorAll(".buttons button");
    for (let i of directions) {
        i.classList.remove("active");
    }
    hello.classList.add("active");
    currentDirection = value;
}

function generateCode() {
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
    document.getElementsByTagName(
        "body"
    )[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

function copyText() {
    outputCode.select();
    document.execCommand("copy");
    alert("Gradient Copied");
}

generateCode();
