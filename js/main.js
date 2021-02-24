let allPanels = document.querySelectorAll(".panels .panel");

allPanels.forEach(panel => {
    panel.addEventListener("click", () => {
        panel.classList.toggle("open");
    });
});