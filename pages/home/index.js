
document.addEventListener("DOMContentLoaded", function () {
    const heroImg = document.querySelector('[data-animation="header-img"]');
    const headerNavBtns = document.querySelectorAll('[data-animation="header-top-nav-btn"]');
    const headerTopLeftBtn = document.querySelector('[data-animation="header-top-icon-left"]');
    const headerTopRightBtn = document.querySelector('[data-animation="header-top-icon-right"]');
    const headerTopIcons = document.querySelectorAll('[data-animation="header-top-icon"]');
    const headerTopLogoText = document.querySelector('[data-animation="header-top-logo-text"]');
    const headerTopLogoImgPartLeft = document.querySelector('[data-animation="header-top-logo-img-part-left"]');
    const headerTopLogoImgPartRight = document.querySelector('[data-animation="header-top-logo-img-part-right"]');
    const headerHeroText = document.querySelector('[data-animation="header-hero-text"]');
    const headerHeroTitle = document.querySelector('[data-animation="header-hero-title"]');
    const headerHeroTitleSpan = document.querySelector('[data-animation="header-hero-title-span"]');
    const headerHeroBtns = document.querySelectorAll('[data-animation="header-hero-btn"]');
    const headerHeroIcons = document.querySelectorAll('[data-animation="header-hero-icon"]');
    const headerHeroImgLeft = document.querySelector('[data-animation="header-hero-img-left"]');
    const headerHeroImgRight = document.querySelector('[data-animation="header-hero-img-right"]');
    const headerHeroTeam = document.querySelector('[data-animation="header-hero-team"]');
    const headerHeroTeamCircle = document.querySelector('[data-animation="header-hero-team-circle"]');
    const headerHeroTeamItem = document.querySelector('[data-animation="header-hero-team-item"]');
    const mainTitle = document.querySelector('[data-animation="main-title"]');
    const mainTitlePurple = document.querySelector('[data-animation="main-title-purple"]');
    const mainTitleGreen = document.querySelector('[data-animation="main-title-green"]');
    const cardFollow = document.querySelector('[data-animation="card-follow"]');
    const cardFollowTextSpan = document.querySelector('[data-animation="card-follow-text-span"]');
    const cardFollowIcons = document.querySelectorAll('[data-animation="card-follow-icon"]');
    const cardJoin = document.querySelector('[data-animation="card-join"]');
    const cardJoinBtn = document.querySelector('[data-animation="card-join-btn"]');
    const cardJoinAbsoluteBtns = document.querySelectorAll('[data-animation="card-join-absolut-btn"]');
    const cardJoinTitleSpan = document.querySelector('[data-animation="card-join-title-span"]');
    const cardGif = document.querySelector('[data-animation="card-gif"]');
    const cardGifLogo1 = document.querySelector('[data-animation="card-gif-logo-1"]');
    const cardGifLogo2 = document.querySelector('[data-animation="card-gif-logo-2"]');
    const ticker = document.querySelector('[data-animation="ticker"]');

    //register plugins

    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger)


    //end


    //animation header img

    var headerImgTL = gsap.timeline();

    headerImgTL.to(heroImg, {
        startAt: {opacity: 0, width: 0, height: 0},
        duration: 0.1,
        autoAlpha: 0,
        borderRadius: "0%",
        width: "0%",
        height: "5%",
        ease: "power1.inOut"
    })
        .to(heroImg, {
            duration: 0.1,
            autoAlpha: 1,
            borderRadius: "50%",
            width: "15%",
            height: "10%",
            ease: "power1.inOut"
        })
        .to(heroImg, {
            duration: 0.1,
            borderRadius: "30%",
            width: "45%",
            height: "40%",
            ease: "power1.inOut"
        })
        .to(heroImg, {
            duration: 0.1,
            borderRadius: "20%",
            width: "85%",
            height: "80%",
            ease: "power1.inOut"
        })
        .to(heroImg, {
            duration: 0.2,
            borderRadius: "2%",
            width: "100%",
            height: "100%",
            ease: "power1.inOut"
        });

    //end

    //animation header btns

    gsap.from(headerNavBtns, {
        delay: .4,
        duration: .7,
        opacity: 0,
        scale: 0,
        stagger: .2,
        autoAlpha: 0,
        transformOrigin: "100% 50%",
        ease: "back"
    })

    //end

    //animation top btns

    gsap.from(headerTopLeftBtn, {
        y: -100,
        opacity: 0,
        autoAlpha: 0,
        duration: .5
    })

    gsap.from(headerTopRightBtn, {
        y: 100,
        opacity: 0,
        autoAlpha: 0,
        duration: .5
    })

    gsap.from(headerTopIcons, {
        scale: 0,
        opacity: 0,
        autoAlpha: 0,
        duration: .5
    })

    //end

    //animation logo

    gsap.from(headerTopLogoText, {
        y: 50,
        opacity: 0,
        autoAlpha: 0,
        duration: .8
    })

    gsap.from(headerTopLogoImgPartLeft, {
        y: 20,
        x: 20,
        scale: 0,
        autoAlpha: 0,
        duration: .8
    })

    gsap.from(headerTopLogoImgPartRight, {
        scale: 0,
        autoAlpha: 0,
        duration: 1
    })

    //end

    //animation hero text

    const headerHeroTitleTl = gsap.timeline();

    gsap.from(headerHeroText, {
        y: 50,
        duration: .5
    })

    const headerHeroTitleSplit = new SplitText(headerHeroTitle, {type: "words,chars"});

    headerHeroTitleTl.from(headerHeroTitleSplit.chars, {
        duration: 0.6,
        scale: 0,
        autoAlpha: 0,
        transformOrigin: "100% 50%",
        ease: "back",
        stagger: 0.02
    });

    gsap.from(headerHeroTitleSpan, { color: "#000", ease: "back", duration: 0.8, delay: .6});

    //end

    //animation header hero btns

    gsap.from(headerHeroBtns, {
        duration: .9,
        opacity: 0,
        scale: 0,
        autoAlpha: 0,
        transformOrigin: "100% 50%",
        ease: "back"
    })

    //end


    //animation header Hero Icons

    gsap.from(headerHeroIcons, {
        duration: .5,
        rotate: -90,
        opacity: 0,
        scale: 0,
        autoAlpha: 0,
        transformOrigin: "100% 50%",
        ease: "back",
        stagger: .3
    })

    //end


    //animation header Hero Imgs

    gsap.from(headerHeroImgLeft, {
        duration: 1,
        y: -200,
        x: -200,
        rotate: -90,
        opacity: 0,
        scale: 0,
        autoAlpha: 0,
        transformOrigin: "100% 50%",
        ease: "back"
    })
    gsap.from(headerHeroImgRight, {
        duration: 1,
        y: 200,
        x: 200,
        rotate: -90,
        opacity: 0,
        scale: 0,
        autoAlpha: 0,
        transformOrigin: "50% 100%",
        ease: "back"
    })

    //end

    //animation header Hero Team

    gsap.from(headerHeroTeam, {
        duration: 1.3,
        x: 100,
        y: 100,
        scale: 0,
        opacity: .5,
        autoAlpha: 0,
        rotate: -90,
        ease: "circ",
        delay: .2
    });

    gsap.from(headerHeroTeamCircle, {
        duration: .8,
        y: 100,
        x: -120,
        scale: 0,
        opacity: .3,
        autoAlpha: 0,
        ease: "circ",
        delay: .2
    });

    gsap.from(headerHeroTeamItem, {
        duration: .8,
        x: -50,
        ease: "circ",
        delay: .5,
        stagger: .2});

    //end


    //animation main title

    const mainTitleSplitText = new SplitText(mainTitle, { type: "words,chars" });
    const chars = mainTitleSplitText.chars;

    gsap.from(chars, {
        scrollTrigger: mainTitle,
        duration: 0.8,
        opacity: 0,
        scale: 0,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
        delay: .5,
        onStart: function () {
            gsap.from(mainTitlePurple, { color: "#000", ease: "back", duration: 2 });
            gsap.from(mainTitleGreen, { color: "#000", ease: "back", duration: 3 });
        }
    });

    //end


    //animation card follow

    gsap.from(cardFollow, {
        scrollTrigger: cardFollow,
        duration: 0.8,
        autoAlpha: 0,
        y: 50,
        opacity: 0,
        scale: 0,
        ease: "circ",
        onStart: function () {
            gsap.from(cardFollowTextSpan, { duration: 0.8, y: 100, display: "block", autoAlpha: 0, opacity: 0, delay: .3 });
            gsap.from(cardFollowIcons, { duration: 1, rotate: -100, borderColor: "rgba(255,255,255, 0)", ease: "back", delay: .3, stagger: .4 })
        }
    })

    //end

    //animation card join

    gsap.from(cardJoin, {
        scrollTrigger: cardJoin,
        duration: 0.8,
        autoAlpha: 0,
        y: 50,
        opacity: 0,
        scale: 0,
        ease: "circ",
        onStart: function () {
            gsap.from(cardJoinTitleSpan, { duration: 0.8, y: 100, display: "block", autoAlpha: 0, opacity: 0, delay: .3 });
            gsap.from(cardJoinBtn, { duration: 1, scale: 0,  autoAlpha: 0, opacity: 0, delay: .3, ease: "back" })
        }
    });

    //end


    //animation card gif

    gsap.from(cardGif, {
        scrollTrigger: cardGif,
        duration: 0.8,
        autoAlpha: 0,
        y: 50,
        opacity: 0,
        scale: 0,
        ease: "circ",
        onStart: function () {
            gsap.from(cardGifLogo1, { duration: 0.8, scale: 0, delay: .3  });
            gsap.from(cardGifLogo2, { duration: 0.8, y: 50, x: 50, scale: 0, delay: .3  });
        }
    });

    //end

    //animation ticker

    gsap.to(ticker, {
        rotate: -3,
        ease: "none",
        scrollTrigger: {
            trigger: ticker,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
                if (self.progress === 0) {
                    gsap.to(ticker, {rotate: 0});
                }
            }
        }
    });

    //end

});


