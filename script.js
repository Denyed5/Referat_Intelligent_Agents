
document.querySelectorAll("nav a").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transition = "transform 0.3s ease";
    btn.style.transform = "scale(1.1)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
