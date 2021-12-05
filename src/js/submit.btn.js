import gsap from "gsap";

const button = document.getElementById("submitBtn");

button.addEventListener("mouseenter", () => {
  gsap.to(button, { duration: 0.3, opacity: 0.8 });
});
button.addEventListener("mouseout", () => {
  gsap.to(button, { duration: 0.3, opacity: 1 });
});
