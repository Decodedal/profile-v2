import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

console.log("Scroll trigger")

const screenWidth = window.innerWidth;

function resetTitleLayout() {
    gsap.set('.title-container', { clearProps: 'all' });
  }

console.log(screenWidth)


if (screenWidth >= 768) { // Check if screen width is greater than or equal to 768px (desktop)
  gsap.from('.title-container', { x: '-100%', duration: 1, ease: "power1" });
  gsap.to(".line", { opacity: 0, duration: 0.5, delay: 1 });
  gsap.to('.plane', { x: "1000%", duration: 1, ease: "expo.in", display: "none", delay: 1.5 });
  gsap.from(".pic-hero", { y: '200%', duration: 1.5, ease:"sine", opacity: 0, delay: 2});
  gsap.to(".ballons", { y: "-700", duration: 1.5, delay: 4 });
} else { // Screen width is less than 768px (mobile)
  gsap.from('.title-container', { x: '-100%', duration: 1, ease: "power1" });
  gsap.to('.plane-container', { display: "none", duration: 0, onComplete: resetTitleLayout, delay: 1 });
  gsap.from(".pic-hero", { y: '100%', duration: 1, ease: "power4.out", opacity: 0, delay: 1.5 });
}


gsap.to(".sky", {
  // background:"rgb(252,176,69)",
  scrollTrigger: {
    trigger: ".sky",
    pin: true,
    start:"top top", // when the top of .pic-hero hits the top of the viewport
    end: "+=2000", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing
    markers: true // for development, to see the start and end points
  }
});

// gsap.to(".sun", {
//   x: () => -window.innerWidth - 200, // Move to the left across the viewport
//   y:  600, // Move to the left across the viewport
  
//   scrollTrigger: {
//     trigger: "main",
//     start: "top top", // Start the animation when the top of the main element hits the top of the viewport
//     end: "bottom top", // End the animation when the bottom of the main element hits the top of the viewport
//     scrub: true // Smooth scrubbing
//   }
// });
