window.onload = function() {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(['.box1','.box2-1'], {
        x: 200,
        duration: 1.5,
    });
    gsap.from(['.box2','.box3'], {
        y: 200,
        duration: 1.5
    });
    gsap.from('.box4', {
        scrollTrigger: {
            trigger: '.box4',
            start: "5px 90%"
        },
        y: 200,
        duration: 1.5
    });

    gsap.from('.box2-2', {
        scrollTrigger: {
            trigger: '.box2-2',
            start: "5px 90%"
        },
        x: -200,
        duration: 1.5
    });

    gsap.from('.box2-3', {
        scrollTrigger: {
            trigger: '.box2-3',
            start: "5px 90%"
        },
        x: 200,
        opacity:0,
        duration: 1.5
    });

    gsap.from('.box2-4', {
        scrollTrigger: {
            trigger: '.box2-4',
            start: "5px 90%"
        },
        y: 200,
        duration: 1.5
    });

    gsap.from('.box2-5', {
        scrollTrigger: {
            trigger: '.box2-5',
            start: "5px 90%"
        },
        x: -200,
        opacity: 0,
        duration: 1.5
    });

    gsap.from('.box3-1', {
        scrollTrigger: {
            trigger: '.box3-1',
            start: "5px 90%"
        },
        opacity: 0,
        duration: 1.5
    });

    gsap.from('.box3-2', {
        scrollTrigger: {
            trigger: '.box3-2',
            start: "5px 90%"
        },
        opacity: 0,
        duration: 1.1
    });

    gsap.from(['.box3-3','.box3-5'], {
        scrollTrigger: {
            trigger: '.box3-3',
            start: "5px 90%"
        },
        y: 200,
        duration: 1.5
    });

    gsap.from('.box4-1', {
        scrollTrigger: {
            trigger: '.box4-1',
            start: "5px 90%"
        },
        x: 200,
        duration: 1.5
    });

    gsap.from('.box4-2', {
        scrollTrigger: {
            trigger: '.box4-2',
            start: "5px 90%"
        },
        y: -200,
        duration: 1.5
    });

    gsap.from('.box4-3', {
        scrollTrigger: {
            trigger: '.box4-3',
            start: "5px 90%"
        },
        x: 200,
        duration: 1.5
    });

    gsap.from(['.box4-4','.box4-6'], {
        scrollTrigger: {
            trigger: '.box4-4',
            start: "5px 90%"
        },
        x: -200,
        duration: 1.5
    });

    gsap.from('.box4-5', {
        scrollTrigger: {
            trigger: '.box4-5',
            start: "5px 90%"
        },
        y: 200,
        duration: 1.5
    });

    gsap.from('.box5-1', {
        scrollTrigger: {
            trigger: '.box5-1',
            start: "5px 90%"
        },
        y: -100,
        opacity: 0,
        duration: 1.5
    });

    gsap.from('.box5-2', {
        scrollTrigger: {
            trigger: '.box5-2',
            start: "5px 90%"
        },
        x: -200,
        duration: 1.5
    });

    gsap.from('.box5-3', {
        scrollTrigger: {
            trigger: '.box5-3',
            start: "5px 90%"
        },
        x: 200,
        duration: 1.5
    });

    gsap.from('.box5-4', {
        scrollTrigger: {
            trigger: '.box5-4',
            start: "5px 90%"
        },
        x: -200,
        duration: 1.5
    });

    gsap.from('.box5-5', {
        scrollTrigger: {
            trigger: '.box5-5',
            start: "5px 90%"
        },
        x: -200,
        duration: 1.5
    });

    gsap.from('.box6-1', {
        scrollTrigger: {
            trigger: '.box6-1',
            start: "5px 90%"
        },
        opacity: 0,
        y: 200,
        duration: 1.5
    });

    gsap.from('.box6-2', {
        scrollTrigger: {
            trigger: '.box6-2',
            start: "5px 90%"
        },
        y: 200,
        duration: 1.5
    });

    gsap.from(['.box6-6','.box6-3'], {
        scrollTrigger: {
            trigger: '.box6-6',
            start: "5px 90%"
        },
        y: 200,
        duration: 1.5
    });

    gsap.from('.box6-5', {
        scrollTrigger: {
            trigger: '.box6-5',
            start: "5px 90%"
        },
        x: -200,
        duration: 1.5
    });

    gsap.from('.box7-1', {
        scrollTrigger: {
            trigger: '.box7-1',
            start: "5px 90%"
        },
        opacity: 0,
        y: 200,
        duration: 1.5
    });

    gsap.from('.box7-2', {
        scrollTrigger: {
            trigger: '.box7-2',
            start: "5px 90%"
        },
        x: 200,
        duration: 1.5
    });

    gsap.from('.box7-3', {
        scrollTrigger: {
            trigger: '.box7-3',
            start: "5px 90%"
        },
        y: 200,
        duration: 1.5
    });

    gsap.from('.box7-4', {
        scrollTrigger: {
            trigger: '.box7-4',
            start: "5px 90%"
        },
        opacity: 0,
        x: 200,
        duration: 1.5
    });

    gsap.from('.box7-5', {
        scrollTrigger: {
            trigger: '.box7-5',
            start: "5px 90%"
        },
        opacity: 0,
        x: 200,
        duration: 1.5
    });

    gsap.from('.box2 .text-overlay', {
        scrollTrigger: {
            trigger: '.box2 .text-overlay',
            start: "5px 90%"
        },
        opacity: 0,
        y: -200,
        duration: 1.5,
        delay: 0.5
    });

    gsap.from('.box2-2 .text-overlay', {
        scrollTrigger: {
            trigger: '.box2-2 .text-overlay',
            start: "5px 90%"
        },
        opacity: 0,
        y: -200,
        duration: 1.5,
        delay: 0.5
    });

    gsap.from('.box3-4 .text-overlay', {
        scrollTrigger: {
            trigger: '.box3-4 .text-overlay',
            start: "5px 90%"
        },
        opacity: 0,
        y: -200,
        duration: 1.5,
        delay: 0.5
    });

    gsap.from('.box4-3 .text-overlay', {
        scrollTrigger: {
            trigger: '.box4-3 .text-overlay',
            start: "5px 90%"
        },
        opacity: 0,
        x: -400,
        duration: 1.5,
        delay: 0.5
    });

    gsap.from('.box5-3 .text-overlay', {
        scrollTrigger: {
            trigger: '.box5-3 .text-overlay',
            start: "5px 90%"
        },
        opacity: 0,
        x: 200,
        duration: 1.5
    });

    gsap.from('.box6-4 .text-overlay', {
        scrollTrigger: {
            trigger: '.box6-4 .text-overlay',
            start: "5px 90%"
        },
        opacity: 0,
        x: 200,
        duration: 1.5,
        delay: 0.5
    });

    gsap.from('.box7-4 .text-overlay', {
        scrollTrigger: {
            trigger: '.box7-4 .text-overlay',
            start: "5px 90%"
        },
        opacity: 0,
        x: -200,
        duration: 1.5,
        delay: 0.5
    });
};

