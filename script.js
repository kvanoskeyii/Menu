// Toggle menu when menu icon is clicked
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Close menu when user scrolls
window.addEventListener("scroll", () => {
    menu.classList.remove("show");
});

// Function to open the modal box
function openModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "block";
}

// Close modal when user clicks outside of the modal box or scrolls the page
window.onclick = function (event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

window.onscroll = function () {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }
}