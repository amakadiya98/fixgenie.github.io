document.addEventListener("DOMContentLoaded", () => {
    const bannerh1 = new SplitType(".banner-content h1", { types: "chars" });
    const bannerp = new SplitType(".banner-content p", { types: "chars" });
    const aboutp = new SplitType(".about-para", { types: "chars" });
    const repairHead = new SplitType(".repair-head", { types: "chars" });
    const repairParaMain = new SplitType(".repair-para-main", { types: "chars" });

    gsap.set(".banner-content h1 .char, .banner-content p .char, .about-para .char, .repair-head .char, .repair-para-main .char", {
        opacity: 0
    });

    ScrollTrigger.create({
        trigger: ".banner-content",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.to(".banner-content h1 .char", {
                opacity: 1,
                stagger: 0.1,
                ease: "power1.out",
                duration: 0.5
            });

            gsap.to(".banner-content p .char", {
                opacity: 1,
                stagger: 0.04,
                delay: 0.8,
                ease: "power1.out",
                duration: 0.4
            });

            gsap.to(".about-para .char", {
                opacity: 1,
                stagger: 0.025,
                delay: 0.4,
                ease: "power1.out",
                duration: 0.3
            });

            gsap.to(".repair-head .char", {
                opacity: 1,
                stagger: 0.025,
                delay: 0.4,
                ease: "power1.out",
                duration: 0.3
            });

            gsap.to(".repair-para-main .char", {
                opacity: 1,
                stagger: 0.025,
                delay: 0.4,
                ease: "power1.out",
                duration: 0.3
            });
        }
    });

});

AOS.init();