document.addEventListener("DOMContentLoaded", () => {
    const bannerh1 = new SplitType(".banner-content h1", { types: "words" });
    const bannerp = new SplitType(".banner-content p", { types: "words" });
    const aboutp = new SplitType(".about-para", { types: "words" });
    const repairHead = new SplitType(".repair-head", { types: "words" });
    const repairParaMain = new SplitType(".repair-para-main", { types: "words" });
    const repairParas = document.querySelectorAll(".repair-para");
    const whyParas = document.querySelectorAll(".why-we-do-discription p");
    const serviceTitle = new SplitType(".our-services-title", { types: "words" });
    const maximizeH5 = new SplitType(".maximize-section .text-box h5", { types: "words" });
    const copyRight = new SplitType(".copy-right", { types: "words" });

    repairParas.forEach((para, i) => {
        new SplitType(para, { types: "words" });
    });

    whyParas.forEach((para) => {
        new SplitType(para, { types: "words" });
    });

    gsap.set(".banner-content h1 .word, .banner-content p .word ", {
        opacity: 0
    });

    gsap.set(".about-para .word ", {
        opacity: 0
    });

    gsap.set(".repair-head .word, .repair-para-main .word, .repair-para .word", {
        opacity: 0,
    });

    gsap.set(".why-we-do-discription .word", {
        opacity: 0,
    });

    gsap.set(".our-services-title .word ", {
        opacity: 0,
    });

    gsap.set(".maximize-section .text-box h5 .word", {
        opacity: 0,
    });

    gsap.set(".copy-right .word", {
        opacity: 0,
        scale: 1.1
    });


    ScrollTrigger.create({
        trigger: ".banner-content",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.to(".banner-content h1 .word", {
                opacity: 1,
                stagger: 0.2,
                ease: "power1.out",
                duration: 0.8
            });

            gsap.to(".banner-content p .word", {
                opacity: 1,
                stagger: 0.1,
                delay: 0.8,
                ease: "power1.out",
                duration: 0.8
            });


        }
    });

    ScrollTrigger.create({
        trigger: ".about-section",
        start: "top 70%",
        once: true,
        onEnter: () => {
            gsap.to(".about-para .word", {
                opacity: 1,
                stagger: 0.1,
                delay: 0.4,
                ease: "power1.out",
                duration: 0.6
            });
        }
    });

    ScrollTrigger.create({
        trigger: ".repair-section",
        start: "top 50%",
        once: true,
        onEnter: () => {
            gsap.to(".repair-head .word", {
                opacity: 1,
                stagger: 0.1,
                duration: 0.6,
                ease: "power2.out",
            });

            gsap.to(".repair-para-main .word", {
                opacity: 1,
                stagger: 0.1,
                delay: 0.5,
                duration: 0.7,
                ease: "power2.out",
            });

            gsap.to(".repair-para .word", {
                opacity: 1,
                stagger: 0.1,
                delay: 0.8,
                duration: 0.6,
                ease: "power2.out",
            });
        },
    });

    ScrollTrigger.create({
        trigger: ".why-we-do",
        start: "top 60%",
        once: true,
        onEnter: () => {
            gsap.to(".why-we-do-discription .word", {
                opacity: 1,
                stagger: 0.1,
                delay: 0.8,
                duration: 0.6,
                ease: "power2.out"
            });
        }
    });

    ScrollTrigger.create({
        trigger: ".our-services",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.to(".our-services-title .word", {
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out"
            });
        }
    });

    ScrollTrigger.create({
        trigger: ".maximize-section .text-box h5",
        start: "top 70%",
        once: true,
        onEnter: () => {
            gsap.to(".maximize-section .text-box h5 .word", {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "power2.out"
            });
        }
    });

    ScrollTrigger.create({
        trigger: ".footer",
        start: "top 70%",
        once: true,
        onEnter: () => {
            gsap.to(".copy-right .word", {
                opacity: 1,
                scale: 1,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out"
            });
        }
    });

});

AOS.init();