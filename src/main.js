import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

import { DotLottie } from "@lottiefiles/dotlottie-web";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Lottie Animations

// ScrollTrigger pour l'animation Lottie dans la section 4
const lottieS4 = new DotLottie({
  canvas: document.querySelector("#section4__canvas"),
  src: "https://lottie.host/fe3c633a-d9de-4d71-bd69-6c28c8954c53/m1CXojessW.lottie",
  autoplay: false,
  loop: false,
});

lottieS4.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#section4__canvas",
    start: "top center",
    end: "bottom center",
    onEnter: () => lottieS4.play(),
    onLeave: () => lottieS4.pause(),
    onEnterBack: () => lottieS4.play(),
    onLeaveBack: () => lottieS4.pause(),
  });
});

// ScrollTrigger pour l'animation Lottie dans la section 5
const lottieS5 = new DotLottie({
  canvas: document.querySelector("#section5__canvas"),
  src: "https://lottie.host/6e588730-7ceb-4c61-9499-4ac79c66d550/QmtXSz33Yo.lottie",
  autoplay: false,
  loop: false,
});

lottieS5.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#section5__canvas",
    start: "top center",
    end: "bottom center",
    onEnter: () => lottieS5.play(),
    onLeave: () => lottieS5.pause(),
    onEnterBack: () => lottieS5.play(),
    onLeaveBack: () => lottieS5.pause(),
  });
});

// ScrollTrigger pour l'animation Lottie dans la section 6
const lottieS6 = new DotLottie({
  canvas: document.querySelector("#section6__canvas"),
  src: "https://lottie.host/a98a6491-ce63-400e-bd3e-3ac4958cbe44/coFHul8Mng.lottie",
  autoplay: false,
  loop: false,
});

lottieS6.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#section6__canvas",
    start: "top center",
    end: "bottom center",
    onEnter: () => lottieS6.play(),
    onLeave: () => lottieS6.pause(),
    onEnterBack: () => lottieS6.play(),
    onLeaveBack: () => lottieS6.pause(),
  });
});

// ScrollTrigger pour l'animation Lottie dans la section 7
const lottieS7 = new DotLottie({
  canvas: document.querySelector("#section7__canvas"),
  src: "https://lottie.host/35e5f6a4-1118-4850-af16-d05e1e3c76ea/l6kIJRiD3T.lottie",
  autoplay: false,
  loop: false,
});

lottieS7.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#section7__canvas",
    start: "top bottom",
    end: "bottom bottom",
    onEnter: () => lottieS7.play(),
    onLeave: () => lottieS7.play(),
    onEnterBack: () => lottieS7.play(),
    onLeaveBack: () => lottieS7.play(),
  });
});

// ScrollTrigger pour l'animation Lottie dans la section 8
const lottieS8 = new DotLottie({
  canvas: document.querySelector("#section8__canvas"),
  src: "https://lottie.host/217b70fa-7b65-41d6-a08b-1c5bc11b4b65/81PDEK9KR7.lottie", // à changer URGENT
  autoplay: false,
  loop: false,
});

lottieS8.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#section8__canvas",
    start: "top bottom",
    end: "bottom bottom",
    markers: false,
    onEnter: () => lottieS8.play(),
    onLeave: () => lottieS8.play(),
    onEnterBack: () => lottieS8.play(),
    onLeaveBack: () => lottieS8.play(),
  });
});

// ScrollTrigger pour l'animation Lottie dans la section 9
const lottieS9 = new DotLottie({
  canvas: document.querySelector("#section9__canvas"),
  src: "https://lottie.host/a87ccc74-cb30-4a34-b13c-ed4b67466e1c/yRwfmgBoh2.lottie", // à changer URGENT
  autoplay: false,
  loop: false,
});

lottieS9.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#section9__canvas",
    start: "top bottom",
    end: "bottom bottom",
    markers: false,
    onEnter: () => lottieS9.play(),
    onLeave: () => lottieS9.play(),
    onEnterBack: () => lottieS9.play(),
    onLeaveBack: () => lottieS9.play(),
  });
});

// ScrollTrigger pour l'animation Lottie dans la section 10
const lottieS10 = new DotLottie({
  canvas: document.querySelector("#section10__canvas"),
  src: "https://lottie.host/174aa3a1-b6e5-4b28-8d67-8ade48a7f563/SoDKwQC7Ri.lottie",
  autoplay: false,
  loop: false,
});

lottieS10.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#section10__canvas",
    start: "top bottom",
    end: "bottom bottom",
    markers: false,
    onEnter: () => lottieS10.play(),
    onLeave: () => lottieS10.play(),
    onEnterBack: () => lottieS10.play(),
    onLeaveBack: () => lottieS10.play(),
  });
});

// ScrollTrigger pour l'animation Lottie dans la section 14
const lottieS14 = new DotLottie({
  canvas: document.querySelector("#section14__canvas"),
  src: "https://lottie.host/3bba4859-da47-4253-8c84-c6f8b7bc342f/3Awbfhje35.lottie",
  autoplay: false,
  loop: false,
});

lottieS14.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#section14__canvas",
    start: "top bottom",
    end: "bottom bottom",
    markers: false,
    onEnter: () => lottieS14.play(),
    onLeave: () => lottieS14.play(),
    onEnterBack: () => lottieS14.play(),
    onLeaveBack: () => lottieS14.play(),
  });
});

//GSAP Animations
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

  const size = 800; // Taille de la flaque

  header.addEventListener("mousemove", (e) => {
    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left - size / 2; // Centre la flaque horizontalement
    const y = e.clientY - rect.top - size / 2; // Centre la flaque verticalement

    gsap.to(layer, {
      overwrite: "auto",
      duration: 0.08,
      webkitMaskPosition: `0 0, ${x}px ${y}px`,
      maskPosition: `0 0, ${x}px ${y}px`,
      ease: "",
    });
  });
});

// Animation Section 1
// Flaque qui apparaît au scroll
gsap.from("#s1 .section__flaque", {
  y: 50,
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#s1",
    start: "top 80%",
  },
});

// Terre qui tourne au scroll
gsap.to("#s1 .dataviz--1 .dataviz__img", {
  rotation: 360,
  duration: 2,
  scrollTrigger: {
    trigger: "#s1",
    scrub: true,
  },
});

// Animation Section 2 en ScrollTrigger
const section2Bg = document.querySelector("#s2 .section__big");

gsap.to(section2Bg, {
  backgroundSize: "100% 60%, 100% 100%", // 60% = hauteur
  scrollTrigger: {
    trigger: "#s2 .section__big",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
});

// Animation Dataviz3 Glace
const crackTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#s3 .section__content",
    start: "50% 70%",
    toggleActions: "play none none none",
  },
});

// petit choc sur la glace
crackTl.fromTo(
  "#s3 .dataviz--3 .dataviz__img",
  { rotation: 0, scale: 1 },
  {
    rotation: -1.5,
    scale: 1.02,
    duration: 0.12,
    ease: "power2.out",
    yoyo: true,
    repeat: 3,
  }
);

// apparition du 3/4
crackTl.fromTo(
  "#s3 .dataviz--3 .dataviz__desc",
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
  "#s3 .dataviz--3 .dataviz__desc",
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
gsap.to("#s5 .dataviz--5 .dataviz__img--blur", {
  clipPath: "inset(13% 0 0 0)",
  opacity: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "#s5",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});

gsap.to("#s5 .dataviz--5", {
  "--blur-fill": "50%",
  ease: "none",
  scrollTrigger: {
    trigger: "#s5",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});

// Animation section 11 - T shirt et Jean qui apparaissent sur le côté
gsap.from("#jean", {
  x: 400,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#s11",
    start: "top 80%",
  },
});

gsap.from("#tshirt", {
  x: -400,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#s11",
    start: "top 80%",
  },
});
