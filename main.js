const navbar = document.getElementById("navbar");
const topButton = document.getElementById("topBtn");
const menuButton = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  topButton.classList.toggle("show", window.scrollY > 500);
});

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  menuButton.textContent = navLinks.classList.contains("open")
    ? "×"
    : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.textContent = "☰";
  });
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(
      anchor.getAttribute("href")
    );

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("mousemove", (event) => {
    const rect = project.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 4;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * -4;

    project.style.transform =
      `translateY(-8px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  project.addEventListener("mouseleave", () => {
    project.style.transform = "";
  });
});
