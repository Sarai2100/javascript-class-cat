var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");
// console.log(button);

button.addEventListener("mouseover", function () {
    button.innerText = "Its Working!"
    cat.classList.add("show");
});