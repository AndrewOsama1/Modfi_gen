const timemachine = document.querySelectorAll("#timemachine path");

for (let i = 0; i < timemachine.length; i++) {
    console.log(`Letter ${i} is ${timemachine[i].getTotalLength()}`);
}
const showdrop = document.querySelector('.showdrop');
const showdrp = document.querySelector('.showdrp');
showdrp.style.display = "none";
showdrop.addEventListener("click", (event) => {
    if (showdrp.style.display == "none") {
        showdrp.style.display = "block";
    } else {
        showdrp.style.display = "none";

    }

}

})