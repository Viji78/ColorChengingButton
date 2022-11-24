       
let i = document.getElementById("i");
let button = document.getElementById("btn")

console.log(button);

function toggleclr() {

    if (i.innertext == "green") {
        i.className = "bg-color1";
        i.innertext = "blue";

    } else {
        i.className = "bg-color2";
        i.innertext = "green";
    }
}