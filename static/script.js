// ---------------------------
// FADE-IN ON SCROLL
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".card, .proj, .hero")
    .forEach(el => observer.observe(el));
});


// ---------------------------
// THEME TOGGLE
// ---------------------------
const btn = document.getElementById("themeButton");
const body = document.body;

if (!body.classList.contains("light") && !body.classList.contains("dark")) {
  body.classList.add("dark");
  btn.textContent = "Light Mode 🌞";
}

btn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    btn.textContent = "Dark Mode 🌙";
  } else {
    body.classList.replace("light", "dark");
    btn.textContent = "Light Mode 🌞";
  }
});


// ---------------------------
// IMAGE MODAL (Avatar click)
// ---------------------------
const avatar = document.getElementById("avatarTrigger");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");

avatar.addEventListener("click", () => {
  modal.style.display = "flex";
  modalImage.src = avatar.querySelector("img").src;
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// ---------------------------
// NAV HIGHLIGHT + SECTION HIGHLIGHT + SCROLL FIX
// ---------------------------
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // avoid instant jump

    const id = this.getAttribute("href").substring(1);
    const section = document.getElementById(id);

    if (!section) return;

    // Smooth scroll with navbar offset
    const navHeight = document.querySelector(".nav").offsetHeight;
    const sectionY = section.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({
      top: sectionY,
      behavior: "smooth"
    });

    // SECTION highlight for 3s
    // Smooth SECTION highlight animation
    section.classList.remove("section-highlight");     // reset animation
    void section.offsetWidth;                          // force restart
    section.classList.add("section-highlight");        // play animation
    document.querySelectorAll(".card, .proj").forEach(section => {
  section.addEventListener("animationend", () => {
    section.style.boxShadow = ""; // resets so hover works again
  });
});

  });
});
