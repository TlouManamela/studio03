const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav-links a")];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55%", threshold: 0 });

sections.forEach((section) => observer.observe(section));
document.getElementById("year").textContent = new Date().getFullYear();
