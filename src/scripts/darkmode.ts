const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const transitionElements = document.querySelectorAll(".transition")
const stars = document.querySelectorAll(".star")
const skills = document.querySelectorAll(".skill-background")
const descriptions = document.querySelectorAll(".skill-description")

stars.forEach((star, index) => {
  console.log(`Star ${index + 1}:`, star);
  console.log(`Star ${index + 1} class:`, star.className);
});
let lightMode = true;

if (sun && moon) {
    console.log(sun);

    [sun, moon].forEach((trigger) => {
        trigger.addEventListener('click', () => {
            console.log(trigger);
            sun.classList.toggle("hide")
            moon.classList.toggle('hide')
            lightMode = !lightMode
            if (lightMode) {
                // gsap.from('.sun', { x: '100%', y:"100%", duration: 1, ease: "power1" });
                document.body.classList.remove('night');
                transitionElements.forEach(container => container.classList.remove('dark'))
                stars.forEach(container => container.classList.add("hide"))
                // skills.forEach(container => container.classList.remove("dark-skills"))
                descriptions.forEach(container => container.classList.remove("dark-descriptions"))
                
                
              } else {
                // gsap.from('.moon', { x: '100%', y:"100%", duration: 1, ease: "power1" });
                document.body.classList.add('night');
                transitionElements.forEach(container => container.classList.add('dark'))
                stars.forEach(container => container.classList.remove("hide"))
                // skills.forEach(container => container.classList.add("dark-skills"))
                descriptions.forEach(container => container.classList.add("dark-descriptions"))
              }
        });
    });
}
