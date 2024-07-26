import { themeAtom } from "../atoms/themeStore";

const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const transitionElements = document.querySelectorAll(".transition");
const stars = document.querySelectorAll(".star");
const skills = document.querySelectorAll(".skill-background");
const descriptions = document.querySelectorAll(".skill-description");
const modeSwitch = document.querySelector("#mode-switch") as HTMLInputElement;
const menu = document.querySelector(".menu")

//console.log(menu)

let lightMode = true;

if (typeof localStorage !== 'undefined') {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    lightMode = storedTheme === 'light';
  } else {
    lightMode = !window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  themeAtom.set(lightMode ? 'light' : 'dark');
}

function applyTheme() {
  if (!sun || !moon) return;

  if (lightMode) {
    document.body.classList.remove('night');
    transitionElements.forEach(container => container.classList.remove('dark'));
    stars.forEach(container => container.classList.add("hide"));
    descriptions.forEach(container => container.classList.remove("dark-descriptions"));
    sun.classList.remove('hide');
    moon.classList.add('hide');
    
  } else {
    document.body.classList.add('night');
    transitionElements.forEach(container => container.classList.add('dark'));
    stars.forEach(container => container.classList.remove("hide"));
    descriptions.forEach(container => container.classList.add("dark-descriptions"));
    sun.classList.add('hide');
    moon.classList.remove('hide');
    // menu?.classList.remove("dark-menu")
  }
  modeSwitch.checked = !lightMode;
  localStorage.setItem('theme', lightMode ? 'light' : 'dark');
  themeAtom.set(lightMode ? 'light' : 'dark');
}

function toggleNightMode() {
  lightMode = !lightMode;
  applyTheme();
}

modeSwitch?.addEventListener("change", toggleNightMode);

[sun, moon].forEach((trigger) => {
  if(!trigger)return
  trigger.addEventListener('click', toggleNightMode);
});

// Apply the stored theme on load
applyTheme();
