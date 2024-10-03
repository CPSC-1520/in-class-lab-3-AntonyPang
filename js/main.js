// Enter your code below.
const javaResources = document.querySelector(".javascript-resources");
const javaButton = document.querySelector("#show-resources");

javaButton.addEventListener("click", () => {
    javaResources.classList.remove("d-none");
});

javaResources.addEventListener("mouseover", (event) => {
    console.log(event.target);
    event.target.classList.add("fw-bold");
});

javaResources.addEventListener("mouseout", (event) => {
    console.log(event.target);
    event.target.classList.remove("fw-bold");
});

javaResources.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
    event.target.classList.add("fst-italic");
});