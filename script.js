// === VIENNOISERIES ===
const choix1 = document.querySelector(".choix1");
const choix11 = document.querySelector(".choix11");

choix1.addEventListener("mouseenter", () => {
  choix11.parentElement.style.zIndex = "1";
  document.documentElement.style.backgroundColor = "#e8dece";
});
choix1.addEventListener("mouseleave", () => {
  choix11.parentElement.style.zIndex = "-1";
  document.documentElement.style.backgroundColor = "#FFF8ED";
});
choix11.addEventListener("mouseenter", () => {
  choix1.classList.add("choix1h");
  choix11.parentElement.style.zIndex = "1";
  document.documentElement.style.backgroundColor = "#e8dece";
});
choix11.addEventListener("mouseleave", () => {
  choix1.classList.remove("choix1h");
});

// === PAINS ===
const choix2 = document.querySelector(".choix2");
const choix22 = document.querySelector(".choix22");

choix2.addEventListener("mouseenter", () => {
  choix22.parentElement.style.zIndex = "1";
  document.documentElement.style.backgroundColor = "#e8dece";
});
choix2.addEventListener("mouseleave", () => {
  choix22.parentElement.style.zIndex = "-1";
  document.documentElement.style.backgroundColor = "#FFF8ED";
});
choix22.addEventListener("mouseenter", () => {
  choix2.classList.add("choix1h");
  choix22.parentElement.style.zIndex = "1";
  document.documentElement.style.backgroundColor = "#e8dece";
});
choix22.addEventListener("mouseleave", () => {
  choix2.classList.remove("choix1h");
});

// === SNACKING ===
const choix3 = document.querySelector(".choix3");
const choix33 = document.querySelector(".choix33");

choix3.addEventListener("mouseenter", () => {
  choix33.parentElement.style.zIndex = "1";
  document.documentElement.style.backgroundColor = "#e8dece";
});
choix3.addEventListener("mouseleave", () => {
  choix33.parentElement.style.zIndex = "-1";
  document.documentElement.style.backgroundColor = "#FFF8ED";
});
choix33.addEventListener("mouseenter", () => {
  choix3.classList.add("choix1h");
  choix33.parentElement.style.zIndex = "1";
  document.documentElement.style.backgroundColor = "#e8dece";
});
choix33.addEventListener("mouseleave", () => {
  choix3.classList.remove("choix1h");
});

// === PÂTISSERIES ===
const choix4 = document.querySelector(".choix4");
const choix44 = document.querySelector(".choix44");

choix4.addEventListener("mouseenter", () => {
  choix44.parentElement.style.zIndex = "1";
  document.documentElement.style.backgroundColor = "#e8dece";
});
choix4.addEventListener("mouseleave", () => {
  choix44.parentElement.style.zIndex = "-1";
  document.documentElement.style.backgroundColor = "#FFF8ED";
});
choix44.addEventListener("mouseenter", () => {
  choix4.classList.add("choix1h");
  choix44.parentElement.style.zIndex = "1";
  document.documentElement.style.backgroundColor = "#e8dece";
});
choix44.addEventListener("mouseleave", () => {
  choix4.classList.remove("choix1h");
});
