var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var allPanels = document.getElementsByClassName("pannel");
        var allButtons = document.getElementsByClassName("accordion");
        for (var j = 0; j < allPanels.length; j++) {
            if (allPanels[j] !== this.nextElementSibling) {
                allPanels[j].style.display = "none";
                allButtons[j].classList.remove("active");
                allButtons[j].parentElement.classList.remove("active");
            }
        }
        var pannel = this.nextElementSibling;
        if (pannel.style.display === "block") {
            pannel.style.display = "none";
            this.classList.remove("active");
            this.parentElement.classList.remove("active");
        } else {
            pannel.style.display = "block";
            this.classList.add("active");
            this.parentElement.classList.add("active");
        }
    });
}
