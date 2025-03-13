document.addEventListener("DOMContentLoaded", function () {

    let image = document.querySelector(".headerImage");

    image.addEventListener("mouseover", function () {
        if (image.src.includes("Header2")) {
            image.src = "../Assets/images/PersonImage.jpg";
            document.getElementById("position").innerHTML = "Full-stack";
        } else {
            image.src = "../Assets/images/Header2.avif";
            document.getElementById("position").innerHTML = "Frontend";

        }
    })
})

function buyCoffee() {
    alert("Thanks to Buy me a coffee ☁️☕");
}
function showDescription(type) {
    switch (type) {
        case "Design-Skill":
            document.getElementById("Design-Desc").style.display = "block";
            break;
        case "Managing-Skill":
            document.getElementById("Managing-Desc").style.display = "block";
            break;

    }
}
function hideDescription() {
    let Tooltips = document.querySelectorAll(".description");
    Tooltips.forEach(function (element) {
        element.style.display = "none";
    });
}

