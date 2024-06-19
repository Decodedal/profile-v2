const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const transitionElements = document.querySelectorAll(".transition")

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
                document.body.classList.remove('night');
                transitionElements.forEach(container => container.classList.remove('dark'))
              } else {
                document.body.classList.add('night');
                transitionElements.forEach(container => container.classList.add('dark'))
              }
        });
    });
}
