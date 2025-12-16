import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

import { DotLottie } from "@lottiefiles/dotlottie-web";

const lottieS4 = new DotLottie({
  canvas: document.querySelector("#section4-canvas"),
  src: "https://lottie.host/fe3c633a-d9de-4d71-bd69-6c28c8954c53/m1CXojessW.lottie",
  autoplay: false,
  loop: false,
});

// ScrollTrigger pour l'animation Lottie dans la section 4
lottieS4.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#section4-canvas",
    start: "top center",
    end: "bottom center",
    onEnter: () => lottieS4.play(),
    onLeave: () => lottieS4.pause(),
    onEnterBack: () => lottieS4.play(),
    onLeaveBack: () => lottieS4.pause(),
  });
});

const LottieS6 = new DotLottie({
  canvas: document.querySelector("#section6-canvas"),
  src: "https://lottie.host/bbc39380-40f5-449c-8419-ac3b459b3459/Nvd3RfCLhV.lottie",
  autoplay: false,
  loop: false,
});

// ScrollTrigger pour l'animation Lottie dans la section 6
LottieS6.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#section6-canvas",
    start: "top center",
    end: "bottom center",
    onEnter: () => LottieS6.play(),
    onLeave: () => LottieS6.pause(),
    onEnterBack: () => LottieS6.play(),
    onLeaveBack: () => LottieS6.pause(),
  });
});

gsap.registerPlugin(ScrollTrigger, SplitText);

// Animations Desription
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-split-desc").forEach((el) => {
    const split = new SplitText(el, { type: "words" });

    gsap.from(split.words, {
      y: 24,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  });
});

// Animation Header
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const layer = document.querySelector(".color__layer");

  const size = 700; // Taille de la flaque

  header.addEventListener("mousemove", (e) => {
    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left - size / 2; // Centrer la flaque horizontalement
    const y = e.clientY - rect.top - size / 2; // Centrer la flaque verticalement

    gsap.to(layer, {
      overwrite: "auto",
      duration: 0.08, // Durée de l'animation
      webkitMaskPosition: `0 0, ${x}px ${y}px`, // Position du masque
      maskPosition: `0 0, ${x}px ${y}px`,
      ease: "",
    });
  });
});

// Animation Section 1
// Flaque qui apparaît au scroll
gsap.from(".section1__flaque", {
  y: 50,
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%",
  },
});

// Terre qui tourne au scroll
gsap.to(".dataviz__img", {
  rotation: 360,
  duration: 2,
  scrollTrigger: {
    trigger: ".section",
    scrub: true,
  },
});

// Animation Section 2 en ScrollTrigger

const section2Bg = document.querySelector(".section2__big");

gsap.to(section2Bg, {
  backgroundSize: "100% 60%, 100% 100%", // bleu à 70%
  scrollTrigger: {
    trigger: ".section2__big",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
});

// Animation Dataviz3 Glace
const crackTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3__content",
    start: "50% 70%",
    toggleActions: "play none none none",
  },
}); // Timeline pour l'animation de la glace

// petit choc sur la glace
crackTl.fromTo(
  ".dataviz3__img",
  { rotation: 0, scale: 1 },
  {
    rotation: -1.5,
    scale: 1.02,
    duration: 0.12,
    ease: "power2.out",
    yoyo: true,
    repeat: 3,
  },
  0
);

// apparition du 3/4
crackTl.fromTo(
  ".dataviz3__desc",
  { opacity: 0, scale: 2, filter: "blur(6px)" },
  {
    opacity: 1,
    scale: 1.5,
    filter: "blur(0px)",
    duration: 0.5,
    ease: "back.out(2.2)",
  },
  0.05
);

// Tremblement” du 3/4
crackTl.to(
  ".dataviz3__desc",
  {
    x: -2,
    y: 1,
    duration: 0.05,
    yoyo: true,
    repeat: 8,
    ease: "none",
  },
  0.25
);

// Animation Section 5 - Goutte qui se floutte

gsap.to(".dataviz5__img--blur", {
  clipPath: "inset(13% 0 0 0)",
  opacity: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".section5",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});

gsap.to(".dataviz5", {
  "--blur-fill": "50%",
  ease: "none",
  scrollTrigger: {
    trigger: ".section5",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});
