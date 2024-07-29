
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
    const cardJoinTitleSpan = document.querySelector('[data-animation="card-join-title-span"]');
    const cardGif = document.querySelector('[data-animation="card-gif"]');
    const cardGifLogo1 = document.querySelector('[data-animation="card-gif-logo-1"]');
    const cardGifLogo2 = document.querySelector('[data-animation="card-gif-logo-2"]');

    const ticker = document.querySelector('[data-animation="ticker"]');

    const stickyOne = document.querySelector('[data-animation="sticky-one"]');
    const stickyTwo = document.querySelector('[data-animation="sticky-two"]');
    const stickyThree = document.querySelector('[data-animation="sticky-three"]');

    const stickyOneBtn = stickyOne.querySelector('[data-animation="sticky-btn"]');
    const stickyOneTitle = stickyOne.querySelector('[data-animation="sticky-left_title"]');
    const stickyOneText = stickyOne.querySelector('[data-animation="sticky-text"]');
    const stickyOneMainImg = stickyOne.querySelector('[data-animation="sticky-right-img-box"]');
    const stickyOneIcon = stickyOne.querySelector('[data-animation="sticky-right-icon"]');
    const stickyOneRightBtn = stickyOne.querySelector('[data-animation="sticky-right-btn"]');
    const stickyOneRightDetails = stickyOne.querySelector('[data-animation="sticky-right-absolute-details"]');
    const stickyOneRightAbsoluteImg = stickyOne.querySelector('[data-animation="sticky-one-right-absolute-img"]');
    const stickyOneRightAbsoluteBox = stickyOne.querySelector('[data-animation="sticky-one-right-absolute-box"]');

    const stickyTwoBtn = stickyTwo.querySelector('[data-animation="sticky-btn"]');
    const stickyTwoTitle = stickyTwo.querySelector('[data-animation="sticky-left_title"]');
    const stickyTwoText = stickyTwo.querySelector('[data-animation="sticky-text"]');
    const stickyTwoMainImg = stickyTwo.querySelector('[data-animation="sticky-right-img-box"]');
    const stickyTwoRightItem1 = stickyTwo.querySelector('[data-animation="sticky-two-right-item-1"]');
    const stickyTwoRightItem2 = stickyTwo.querySelector('[data-animation="sticky-two-right-item-2"]');
    const stickyTwoRightItem3 = stickyTwo.querySelector('[data-animation="sticky-two-right-item-3"]');
    const stickyTwoRightIcon = stickyTwo.querySelector('[data-animation="sticky-two-right-circl-icon"]');

    const stickyThreeBtn = stickyThree.querySelector('[data-animation="sticky-btn"]');
    const stickyThreeTitle = stickyThree.querySelector('[data-animation="sticky-left_title"]');
    const stickyThreeText = stickyThree.querySelector('[data-animation="sticky-text"]');
    const stickyThreeMainImg = stickyThree.querySelector('[data-animation="sticky-right-img-box"]');
    const stickyThreeRightAbsoluteBox = stickyThree.querySelector('[data-animation="sticky-three-right-absolute-box"]');
    const stickyThreeRightAbsoluteTextPrecents = stickyThree.querySelectorAll('[data-animation="sticky-three-right-absolut-precent"]');
    const stickyThreeRightIcons = stickyThree.querySelectorAll('[data-animation="sticky-three-right-icon"]');

    const stickyNumbListItems = document.querySelectorAll('[data-animation="sticky-numb-list-item"]');

    //set start value

    function setHideValues(element) {
        gsap.set(element, { autoAlpha: 0, opacity: 0})
    }

    setHideValues(cardJoin.querySelectorAll('[data-animation="card-join-absolut-btn"]'));

    setHideValues(stickyOneBtn);
    setHideValues(stickyOneTitle);
    setHideValues(stickyOneText);
    setHideValues(stickyOneMainImg);
    setHideValues(stickyOneIcon);
    setHideValues(stickyOneRightBtn);
    setHideValues(stickyOneRightDetails);
    setHideValues(stickyOneRightAbsoluteBox);

    setHideValues(stickyTwoBtn);
    setHideValues(stickyTwoTitle);
    setHideValues(stickyTwoText);
    setHideValues(stickyTwoMainImg);
    setHideValues(stickyTwoRightItem1);
    setHideValues(stickyTwoRightItem2);
    setHideValues(stickyTwoRightItem3);
    setHideValues(stickyTwoRightIcon);


    setHideValues(stickyThreeBtn);
    setHideValues(stickyThreeTitle);
    setHideValues(stickyThreeText);
    setHideValues(stickyThreeMainImg);
    setHideValues(stickyThreeRightAbsoluteBox);


    //end


    //register plugins

    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(InertiaPlugin);
    gsap.registerPlugin(Draggable);
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.registerPlugin(TextPlugin);

    //end


    //global functions

    function setActiveStickyItem(currentActiveItem) {
        stickyNumbListItems.forEach(items => items.classList.remove('sticky_numb-list_item--active'));
        stickyNumbListItems[currentActiveItem].classList.add('sticky_numb-list_item--active');
    }

    function animateShowFromOpacity(element, delay, stagger) {
        gsap.fromTo(element, { duration: .5, scale: 0, ease: "circ" }, { duration: .5,  autoAlpha: 1, opacity: 1, scale: 1, ease: "circ", ...{ ...delay && { delay }, ...{ ...stagger && { stagger }}}});
    }

    function animateStickyText(element) {
        const stickyTitleSplit = new SplitText(element, {type: "lines"});

        gsap.set(element, {autoAlpha: 1, opacity: 1});
        gsap.fromTo(stickyTitleSplit.lines, { duration: .5,  y: 100, ease: "back"}, {duration: .5, autoAlpha: 1, opacity: 1,  y: 0, ease: "back", stagger: .2})
    }

    function animateStickyMainImg(element, onEnter) {
        gsap.fromTo(element, { duration: .5, scale: 0, ease: "circ" }, { duration: .5,  autoAlpha: 1, opacity: 1, scale: 1, onEnter, ease: "circ"});
    }

    function showStickyRightItemText(parentElement, dataValue, delay) {
        const textEl = parentElement.querySelector(`[data-animation="${dataValue}`);
        const mtextElSplitText = new SplitText(textEl, { type: "words" });
        const words = mtextElSplitText.words;

        gsap.from(words, { duration:.5, scale: 0, stagger: .2, ease: "back", delay });
    }

    function showStickyRightItem (element, delay) {
        gsap.fromTo(element, { duration:.5, rotate: -90, y: 50, x: 50, scale: 0 }, { opacity: 1, autoAlpha: 1, rotate: 0, y: 0, x: 0, scale: 1, delay, ease: "back", onEnter: function () {
                showStickyRightItemText(element, 'sticky-two-right-item-text',  '.2');
                showStickyRightItemText(element, 'sticky-two-right-item-numb',  '.2');
            }});
    }

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
        },
        onComplete: function () {
            const friction = -0.5;
            const items = cardJoin.querySelectorAll('[data-animation="card-join-absolut-btn"]');
            gsap.set(items, { opacity: 1, autoAlpha: 1 });

            let container = cardJoin;
            let vw = container.clientWidth;
            let vh = container.clientHeight;

            items.forEach(item => {
                const radius = item.getBoundingClientRect().width / 2;
                const tracker = InertiaPlugin.track(item, "x,y")[0];

                gsap.set(item, {
                    xPercent: -50,
                    yPercent: -50,
                    x: Math.random() * (vw - radius * 2) + radius,
                    y: Math.random() * (vh - radius * 2) + radius
                });

                startRandomMovement(item, tracker, radius);

                Draggable.create(item, {
                    bounds: container,
                    onPress() {
                        gsap.killTweensOf(item);
                        this.update();
                    },
                    onDragEnd() {
                        startRandomMovement(item, tracker, radius);
                    }
                });
            });

            window.addEventListener("resize", () => {
                vw = container.clientWidth;
                vh = container.clientHeight;
            });

            function startRandomMovement(item, tracker, radius) {
                animateItem(item, tracker, radius);
            }

            function animateItem(item, tracker, radius) {
                gsap.to(item, {
                    duration: Math.random() * 5 + 2,
                    x: `+=${Math.random() * 200 - 100}`,
                    y: `+=${Math.random() * 200 - 100}`,
                    ease: "none",
                    overwrite: true,
                    onComplete: () => animateItem(item, tracker, radius),
                    onUpdate: () => checkBounds(item, tracker, radius)
                });
            }

            function checkBounds(item, tracker, radius) {
                let x = gsap.getProperty(item, "x");
                let y = gsap.getProperty(item, "y");
                let vx = tracker.get("x");
                let vy = tracker.get("y");
                let xPos = x;
                let yPos = y;
                let hitting = false;

                if (x + radius > vw) {
                    xPos = vw - radius;
                    vx *= friction;
                    hitting = true;
                } else if (x - radius < 0) {
                    xPos = radius;
                    vx *= friction;
                    hitting = true;
                }

                if (y + radius > vh) {
                    yPos = vh - radius;
                    vy *= friction;
                    hitting = true;
                } else if (y - radius < 0) {
                    yPos = radius;
                    vy *= friction;
                    hitting = true;
                }

                if (hitting) {
                    gsap.set(item, { x: xPos, y: yPos });
                    animateItem(item, tracker, radius);
                }

                items.forEach(otherItem => {
                    if (item !== otherItem && isColliding(item, otherItem)) {
                        handleCollision(item, otherItem, tracker, radius);
                    }
                });
            }

            function handleCollision(item1, item2, tracker, radius) {
                const angle = Math.atan2(gsap.getProperty(item2, "y") - gsap.getProperty(item1, "y"), gsap.getProperty(item2, "x") - gsap.getProperty(item1, "x"));
                const distance = 50;
                const xMove = Math.cos(angle) * distance;
                const yMove = Math.sin(angle) * distance;

                gsap.to(item1, {
                    x: `-=${xMove}`,
                    y: `-=${yMove}`,
                    rotation: "+=180",
                    duration: 1,
                    ease: "power2",
                    onComplete: () => startRandomMovement(item1, tracker, radius),
                    overwrite: true
                });

                gsap.to(item2, {
                    x: `+=${xMove}`,
                    y: `+=${yMove}`,
                    rotation: "-=60",
                    duration: 1,
                    ease: "power2",
                    onComplete: () => startRandomMovement(item2, tracker, radius),
                    overwrite: true
                });
            }

            function isColliding(elem1, elem2) {
                const rect1 = elem1.getBoundingClientRect();
                const rect2 = elem2.getBoundingClientRect();

                return !(
                    rect1.right < rect2.left ||
                    rect1.left > rect2.right ||
                    rect1.bottom < rect2.top ||
                    rect1.top > rect2.bottom
                );
            }

            items.forEach(item => {
                const radius = item.getBoundingClientRect().width / 2;
                const tracker = InertiaPlugin.track(item, "x,y")[0];
                animateItem(item, tracker, radius);
            });
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

    //animation sticky blocks

    gsap.to(stickyOne, {
        scrollTrigger: {
            trigger: stickyOne,
            start: "-500px top",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
                const scaleValue = 1 - 0.1 * self.progress;
                const r = Math.min(234 + 6, 255);
                const g = Math.min(248 + 6, 255);
                const b = Math.min(213 + 6, 255);

                gsap.to(stickyOne, { scale: scaleValue, background: `rgb(${r}, ${g}, ${b})`, immediateRender: true});

            },
            onEnter: () => {
                setActiveStickyItem(0);
                animateShowFromOpacity(stickyOneBtn);
                animateStickyText(stickyOneTitle);
                animateStickyText(stickyOneText);
                animateStickyMainImg(stickyOneMainImg, function () {
                    animateShowFromOpacity(stickyOneIcon);
                    animateShowFromOpacity(stickyOneRightBtn);
                    animateShowFromOpacity(stickyOneRightDetails);
                });


                gsap.fromTo(stickyOneRightAbsoluteBox, { duration: 3, opacity: 1, autoAlpha: 1, rotate: -180, y: 50, x: 50, scale: 0 }, { opacity: 1, autoAlpha: 1, rotate: 0, y: 0, x: 0, scale: 1, ease: "back", onEnter: function () {
                    gsap.fromTo("#line", { drawSVG: "0%" }, { duration: 1, drawSVG: "100%" });

                    const obj = { value: 80 };

                    gsap.to(obj, {
                        value: 90,
                        duration: 1,
                        ease: "none",
                        onUpdate: function () {
                            stickyOne.querySelector('[data-animation="numb"]').textContent = `${obj.value.toFixed(0)}%`;
                        }
                    });
                }});
            },
            onEnterBack: () => {
                setActiveStickyItem(0);
            }
        }
    })

    gsap.to(stickyTwo, {
        scrollTrigger: {
            trigger: stickyTwo,
            start: "-500px top",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
                const scaleValue = 1 - 0.05 * self.progress;
                const r = Math.min(234 + 4, 255);
                const g = Math.min(248 + 4, 255);
                const b = Math.min(213 + 4, 255);

                gsap.to(stickyTwo, { scale: scaleValue, background: `rgb(${r}, ${g}, ${b})`,  immediateRender: true});
            },
            onEnter: () => {
                setActiveStickyItem(1);
                animateShowFromOpacity(stickyTwoBtn);
                animateStickyText(stickyTwoTitle);
                animateStickyText(stickyTwoText);
                animateStickyMainImg(stickyTwoMainImg, function () {
                    showStickyRightItem(stickyTwoRightItem1, '.2');
                    showStickyRightItem(stickyTwoRightItem2);
                    showStickyRightItem(stickyTwoRightItem3);

                    gsap.fromTo(stickyTwoRightIcon, { opacity: 1, autoAlpha: 1 }, { rotation: "+=360", repeat: -1, duration: 5, ease: "linear"});

                });
            },
            onEnterBack: () => {
                setActiveStickyItem(1);
            }
        }
    })

    gsap.to(stickyThree, {
        scrollTrigger: {
            trigger: stickyThree,
            start: "-500px top",
            end: "bottom top",
            scrub: true,
            onEnter: () => {
                setActiveStickyItem(2);
                animateShowFromOpacity(stickyThreeBtn);
                animateStickyText(stickyThreeTitle);
                animateStickyText(stickyThreeText);
                animateStickyMainImg(stickyThreeMainImg, function () {
                    gsap.fromTo(stickyThreeRightAbsoluteBox, { duration:.5, rotate: -90, y: 50, x: 50, scale: 0 }, { opacity: 1, autoAlpha: 1, rotate: 0, y: 0, x: 0, scale: 1, ease: "back", onEnter: function () {
                        showStickyRightItemText(stickyThree, 'sticky-three-right-absolut-text-col-1', ".2");
                        showStickyRightItemText(stickyThree, 'sticky-three-right-absolut-text-col-2', ".2");
                        showStickyRightItemText(stickyThree, 'sticky-three-right-absolut-text-col-3', ".2");
                        animateShowFromOpacity(stickyThreeRightIcons, ".3", ".2");
                    }});
                });
            },
            onEnterBack: () => {
                setActiveStickyItem(2);
            }
        }
    })

    //end

});


