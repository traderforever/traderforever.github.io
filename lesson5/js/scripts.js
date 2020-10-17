function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let currDate = new Date();
let currDay = currDate.getDay();
let currYear = currDate.getFullYear();   



if (currDay == 5) {
    let pancake = document.getElementsByClassName("fridayBanner");

    for (let i = pancake.length - 1; i >= 0; i--) {
        pancake.item(i).style.display = "block";
    }
}