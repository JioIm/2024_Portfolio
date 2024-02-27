function mainVisualLine() {
    gsap.to('.mainVisual .tit p em', {
        width: 600,
        duration: 2,
        delay: 1
    })

    gsap.to(".animate-anything-css", {
        duration: 10,
        ease: "none",
        repeat: -1,
        rotation: 360,
    })
}

mainVisualLine()
