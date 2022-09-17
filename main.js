const panels = document.querySelectorAll(".panel");
panels.forEach((e) => {
  e.addEventListener("click", () => {
    removeClass();
    e.classList.add("active");
  });
});

function removeClass() {
  panels.forEach((e) => {
    e.classList.remove("active");
  });
}
