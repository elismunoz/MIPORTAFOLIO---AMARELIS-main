/***************************************************
==================== JS INDEX ======================
****************************************************
01. data-background
02. smooth-wrapper
03. Counter Js
04. Sidebar Js
05. mobile-menu-active
06. Nice Select Js
07. magnificPopup video view
08. magnific-Popup-image-active
09. search-toggle
10. hover reveal start
11. cm-video-img-wrap
12. portfolio animation start
13. back-to-top
14. cm-project-pin-wrap
15. cm-project-pin-thumb-wrap
16. big-text
17. cm-TimelineMax-video
18. td-project-2-area
19. project-panel-area
20. Reveal Animation
21. cm-split-text
22. Image Reveal Animation
23. cm-zoom-img
24. scrool-mill-up
26. mil-scale-img
27. cm-rubber
28. cm-service-ai-title-wrap
29. hover-img-animetion
30. has_fade_anim
31. sidebar-menu-start
32. cm-video-img-wrap
33. Text Invert With Scroll 
34. cm-perspective-slider
35. Isotope	Active  
36. zoom in
37. Sticky Header Js
 ****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. data-background
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	windowOn.on('load', function () {
		var body = $('body');
		body.addClass('loaded');
		setTimeout(function () {
			body.removeClass('loaded');
		}, 1500);
	});

	////////////////////////////////////////////////////
	// 02. smooth-wrapper
	if($('#smooth-wrapper').length && $('#smooth-content').length){
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
	
		gsap.config({
			nullTargetWarn: false,
		});
	
		let smoother = ScrollSmoother.create({
			smooth: 2,
			effects: true,
			smoothTouch: 0.1,
			normalizeScroll: false,
			ignoreMobileResize: true,
		});
	}

	////////////////////////////////////////////////////
	// 03. Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});

	////////////////////////////////////////////////////
	// 04. Sidebar Js
	$(".cm-menu-bar").on("click", function () {
		$(".cmoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	$(".close-btn").on("click", function () {
		$(".cmoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});
	$(".body-overlay").on("click", function () {
		$(".cmoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});

	////////////////////////////////////////////////////
	// 05. mobile-menu-active
	if($('.cm-main-menu-content').length && $('.cm-main-menu-mobile').length){
		let navContent = document.querySelector(".cm-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".cm-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;


		let arrow = $(".cm-main-menu-mobile .has-dropdown > a");

		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

			self.append(function () {
			return arrowBtn;
			});

			self.find("button").on("click", function (e) {
			e.preventDefault();
			let self = $(this);
			self.toggleClass("dropdown-opened");
			self.parent().toggleClass("expanded");
			self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
			self.parent().parent().children(".cm-submenu").slideToggle();
			});

		});
	}

	////////////////////////////////////////////////////
	// 06. Nice Select Js
	$('select').niceSelect();


	////////////////////////////////////////////////////
	// 07. magnificPopup video view
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	////////////////////////////////////////////////////
	// 08. magnific-Popup-image-active
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		mainClass: 'mfp-with-zoom',
		removalDelay: 500,
	});

	////////////////////////////////////////////////////
	// 09. search-toggle
	$(".cm-search-click").on("click", function () {
		$(".cm-search-form-toggle,.cm-search-body-overlay").addClass("active");
	});

	$(".cm-search-close,.cm-search-body-overlay").on("click", function () {
		$(".cm-search-form-toggle,.cm-search-body-overlay").removeClass("active");
	});

	////////////////////////////////////////////////////
	// 10. hover reveal start
	const hoverItem = document.querySelectorAll(".cm-service-reveal-item");
	function moveImage(e, hoverItem, index) {
		const item = hoverItem.getBoundingClientRect();
		const x = e.clientX - item.x;
		const y = e.clientY - item.y;
		if (hoverItem.children[index]) {
			hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
		}
	}
	hoverItem.forEach((item, i) => {
		item.addEventListener("mousemove", (e) => {
			setInterval(moveImage(e, item, 1), 50);
		});
	});

	////////////////////////////////////////////////////
	// 11. cm-video-img-wrap
	if ($('.cm-video-img-wrap').length > 0) {
		let ms = gsap.matchMedia();
		ms.add("(min-width: 768px)", () => {
			let cm_video = gsap.timeline({
				scrollTrigger: {
					trigger: ".cm-video-img-wrap",
					start: "top 70",
					pin: true,
					markers: false,
					scrub: 1,
					pinSpacing: false,
					end: "bottom 50%",
				}
			});
			cm_video.to(".cm-video-img-inner", {
				width: "100%",
			});
		});
	}


	////////////////////////////////////////////////////
	// 12. portfolio animation start

	if ($('.cm-team-item').length > 0) {
		gsap.set('.cm-team-item.marque', {
			x: '25%'
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: '.cm-team-area ',
				start: '-1000 10%',
				end: 'bottom 20%',
				scrub: true,
				invalidateOnRefresh: true
			}
		})
			.to('.cm-team-item.marque ', {
				x: '-100%'
			});
	}

	////////////////////////////////////////////////////
	// 13. back-to-top

	var btn = $('#back_to_top');
	var btn_wrapper = $('.back-to-top-wrapper');

	windowOn.scroll(function() {
	if (windowOn.scrollTop() > 300) {
		btn_wrapper.addClass('back-to-top-btn-show');
	} else {
		btn_wrapper.removeClass('back-to-top-btn-show');
	}
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});

	////////////////////////////////////////////////////
	// 14. cm-project-pin-wrap

	if ($('.cm-project-pin-wrap').length > 0) {
		let project_text = gsap.timeline({
			scrollTrigger: {
				trigger: ".cm-project-pin-wrap",
				start: 'top center-=250',
				end: "bottom 100%",
				pin: ".cm-project-pin-title",
				markers: false,
				pinSpacing: false,
				scrub: 1,
			}
		})
		project_text.set(".cm-project-pin-title", {
			scale: .6,
			duration: 2
		})
		project_text.to(".cm-project-pin-title", {
			scale: 1,
			duration: 2
		})
		project_text.to(".cm-project-pin-title", {
			scale: 1,
			duration: 2
		}, "+=2")
	}

	////////////////////////////////////////////////////
	// 16. big-text
	if ($('.cta-text').length > 0) {

		let cta = gsap.timeline({
			repeat: -1,
			delay: 0.5,
			scrollTrigger: {
				trigger: '.cta-text',
				start: 'bottom 100%-=50px'
			}
		});
		gsap.set('.cta-text', {
			opacity: 0
		});
		gsap.to('.cta-text', {
			opacity: 1,
			duration: 1,
			ease: 'power1.out',
			scrollTrigger: {
				trigger: '.cta-text',
				start: 'bottom 100%-=50px',
				once: true
			}
		});
	
		let mySplitText = new SplitText(".cta-text", { type: "words,chars" });
		let chars = mySplitText.chars;
		let endGradient = chroma.scale(['#F87171', '#F87171', '#FACC15', '#C8F31D', '#38BDF8']);
		cta.to(chars, {
			duration: 0.5,
			scaleY: 0.6,
			ease: "power1.out",
			stagger: 0.04,
			transformOrigin: 'center bottom'
		});
		cta.to(chars, {
			yPercent: -20,
			ease: "elastic",
			stagger: 0.03,
			duration: 0.8
		}, 0.5);
		cta.to(chars, {
			scaleY: 1,
			ease: "elastic.out",
			stagger: 0.03,
			duration: 1.5
		}, 0.5);
		cta.to(chars, {
			color: (i, el, arr) => {
				return endGradient(i / arr.length).hex();
			},
			ease: "power1.out",
			stagger: 0.03,
			duration: 0.3
		}, 0.5);
		cta.to(chars, {
			yPercent: 0,
			ease: "back",
			stagger: 0.03,
			duration: 0.8
		}, 0.7);
		cta.to(chars, {
			color: '#000',
			duration: 1.4,
			stagger: 0.05
		});
	}

	////////////////////////////////////////////////////
	// 16. cm-hover-btn-wrapper
	var hoverBtns = gsap.utils.toArray(".cm-hover-btn-wrapper");

	const hoverBtnItem = gsap.utils.toArray(".cm-hover-btn-item");
	hoverBtns.forEach((btn, i) => {
		$(btn).mousemove(function (e) {
			callParallax(e);
		});
		function callParallax(e) {
			parallaxIt(e, hoverBtnItem[i], 60);
		}

		function parallaxIt(e, target, movement) {
			var $this = $(btn);
			var relX = e.pageX - $this.offset().left;
			var relY = e.pageY - $this.offset().top;

			gsap.to(target, 1, {
				x: ((relX - $this.width() / 2) / $this.width()) * movement,
				y: ((relY - $this.height() / 2) / $this.height()) * movement,
				ease: Power2.easeOut,
			});
		}
		$(btn).mouseleave(function (e) {
			gsap.to(hoverBtnItem[i], 1, {
				x: 0,
				y: 0,
				ease: Power2.easeOut,
			});
		});
	});

	////////////////////////////////////////////////////
	// 16. cm-hover-btn-wrapper
	if ($('.cm-btn-trigger').length > 0) {

		gsap.set(".cm-btn-bounce", { y: -100, opacity: 0 });
		var mybtn = gsap.utils.toArray(".cm-btn-bounce");
		mybtn.forEach((btn) => {
			var $this = $(btn);
			gsap.to(btn, {
				scrollTrigger: {
					trigger: $this.closest('.cm-btn-trigger'),
					start: "top center",
					markers: false
				},
				duration: 1,
				ease: "bounce.out",
				y: 0,
				opacity: 1,
			})
		});
	}

	////////////////////////////////////////////////////
	// 17. cm-TimelineMax-video
	var tl = new TimelineMax(),
    $videoContainer = $('.cb-video-container'),
    $video = $videoContainer.find('.video'),
    $playPauseClickArea = $videoContainer.find('.play-pause--click-area'),
    $playPauseContainer = $videoContainer.find('.play-pause--container'),
    $playIcon = $videoContainer.find('.play-icon'),
    $pauseIcon = $videoContainer.find('.pause-icon'),

    iconIsToggled = false,
    iconEase = Back.easeInOut.config(1.7),
    iconDuration = 0.3;

	setupVideo();

	// functions 
	function setupVideo() {
	TweenMax.set($pauseIcon, {autoAlpha:0, scale:0});
	};

	function showPaused() {
	iconIsToggled = true;

	tl.play();
	tl.to($playIcon, iconDuration, {autoAlpha:0, scale:0, ease:iconEase}, 0);
	tl.to($pauseIcon, iconDuration, {autoAlpha:1, scale:1, ease:iconEase}, 0);


	console.log('playing - show pause');
	$video.get(0).play();
	}

	function showPlay() {
	iconIsToggled = false;

	tl.reverse();
	$video.get(0).pause();
	}

	// event handlers
	$playPauseClickArea.on('click', function(){
	!iconIsToggled ? showPaused() : showPlay();
	});

	$playPauseClickArea.on('mouseleave', function() {
	if (iconIsToggled === true) TweenMax.to($playPauseContainer, iconDuration, {autoAlpha:0}, 0);
	console.log('mouseleave');
	});

	$playPauseClickArea.on('mouseenter', function() {
	TweenMax.to($playPauseContainer, iconDuration, {autoAlpha:1}, 0);
	console.log('mouseenter');
	});

	$video.on('ended',function(){ 
	// TODO: showReplay()
	console.log('video ended')
	});

	////////////////////////////////////////////////////
	// 18. td-project-2-area
	let pj = gsap.matchMedia();
	pj.add("(min-width: 992px)", () => {
		if ($('.cm-project-crtv-area').length > 0) {

			let sections = gsap.utils.toArray(".cm-project-crtv-area");
			let listItem = gsap.utils.toArray(".cmprojectslide");
			sections.forEach((section, index) => {
				ScrollTrigger.create({
					trigger: section,
					markers: false,
					start: 'bottom 115%',
					end: 'bottom -100%',
					toggleClass: { targets: listItem[index], className: "addclass" }
				});
			});

		}
	});

	let pp = gsap.matchMedia();
	pp.add("(min-width: 1200px)", () => {
		const panelsSections = gsap.utils.toArray(".panels");
		for (var i = 0; i < panelsSections.length; i++) {

			var thePanelsSection = panelsSections[i];
			const panels = gsap.utils.toArray(".panels-container .panel", thePanelsSection);
			const panelsContainer = thePanelsSection.querySelector(".panels-container");

			gsap.set(panelsContainer, { height: window.innerHeight });
			gsap.set(panels, { height: window.innerHeight });

			var totalPanelsWidth = 0;
			panels.forEach(function (panel) {
				totalPanelsWidth += $(panel).width();
			});

			gsap.set(panelsContainer, { width: totalPanelsWidth });
			gsap.to(panels, {
				x: - totalPanelsWidth + innerWidth,
				ease: "none",
				scrollTrigger: {
					trigger: panelsContainer,
					pin: true,
					start: "top 140",
					scrub: 1,
					end: (st) => "+=" + (st.vars.trigger.offsetWidth - innerWidth),
				}
			});

		}
	});

	////////////////////////////////////////////////////
	// 19. project-panel-area
	function removeWow() {
		if (window.screen.availWidth > 576) {
			let otherSections = document.querySelectorAll('.project-panel')

			otherSections.forEach((section, index) => {
		
				gsap.set(otherSections, {
					scale: 1
				});
		
				tl.to(section, {
					scale: .8,
					scrollTrigger: {
						trigger: section,
						pin: section,
						scrub: 1,
						start: 'top 10%',
						end: "bottom 60%",
						endTrigger: '.project-panel-area',
						pinSpacing: false,
						markers: false,
					},
				})
			})
		}

		if (window.screen.availWidth > 576) {
			let otherSections = document.querySelectorAll('.project-panel-2')

			otherSections.forEach((section, index) => {
		
				gsap.set(otherSections, {
					scale: 1
				});
		
				tl.to(section, {
					scale: .8,
					scrollTrigger: {
						trigger: section,
						pin: section,
						scrub: 1,
						start: 'top 11%',
						end: "bottom 60%",
						endTrigger: '.project-panel-area-2',
						pinSpacing: false,
						markers: false,
					},
				})
			})
		}
	}

	removeWow();
	window.addEventListener('resize', removeWow);

	////////////////////////////////////////////////////
	// 20. Reveal Animation 

	const anim_reveal = document.querySelectorAll(".cm-reveal-anim");
	anim_reveal.forEach(areveal => {

		var duration_value = 1.5;
		var onscroll_value = 1;
		var stagger_value = 0.02;
		var data_delay = 0.05;

		if (areveal.getAttribute("data-duration")) {
			duration_value = areveal.getAttribute("data-duration");
		}
		if (areveal.getAttribute("data-on-scroll")) {
			onscroll_value = areveal.getAttribute("data-on-scroll");
		}
		if (areveal.getAttribute("data-stagger")) {
			stagger_value = areveal.getAttribute("data-stagger");
		}
		if (areveal.getAttribute("data-delay")) {
			data_delay = areveal.getAttribute("data-delay");
		}

		areveal.split = new SplitText(areveal, {
			type: "lines,words,chars",
			linesClass: "cm-reveal-line"
		});

		if (onscroll_value == 1) {
			areveal.anim = gsap.from(areveal.split.chars, {
				scrollTrigger: {
					trigger: areveal,
					start: 'top 85%',
					end: 'bottom 15%',
					toggleActions: 'play reverse play reverse'
				},
				duration: duration_value,
				delay: data_delay,
				ease: "circ.out",
				y: 200,
				stagger: stagger_value,
				opacity: 0,
			});
		} else {
			areveal.anim = gsap.from(areveal.split.chars, {
				duration: duration_value,
				delay: data_delay,
				ease: "circ.out",
				y: 200,
				stagger: stagger_value,
				opacity: 0,
			});
		}

	});

	const anim_reveal2 = document.querySelectorAll(".cm_reveal_anim-2");
	anim_reveal2.forEach(areveal => {

		var duration_value = 2
		var onscroll_value = 1
		var stagger_value = 0.05
		var data_delay = 0.1

		if (areveal.getAttribute("data-duration")) {
			duration_value = areveal.getAttribute("data-duration");
		}
		if (areveal.getAttribute("data-on-scroll")) {
			onscroll_value = areveal.getAttribute("data-on-scroll");
		}
		if (areveal.getAttribute("data-stagger")) {
			stagger_value = areveal.getAttribute("data-stagger");
		}
		if (areveal.getAttribute("data-delay")) {
			data_delay = areveal.getAttribute("data-delay");
		}

		areveal.split = new SplitText(areveal, {
			type: "lines,words,chars",
			linesClass: "cm-reveal-line-2"
		});

		if (onscroll_value == 1) {
			areveal.anim = gsap.from(areveal.split.chars, {
				scrollTrigger: {
					trigger: areveal,
					start: 'top 85%',
				},
				duration: duration_value,
				delay: data_delay,
				ease: "circ.out",
				y: 200,
				stagger: stagger_value,
				opacity: 0,
			});
		} else {
			areveal.anim = gsap.from(areveal.split.chars, {
				duration: duration_value,
				delay: data_delay,
				ease: "circ.out",
				y: 200,
				stagger: stagger_value,
				opacity: 0,
			});
		}

	});	

	////////////////////////////////////////////////////
	// 21. cm-split-text
	$(document).ready(function() {
		var st = $(".cm-split-text");
        if(st.length == 0) return;
        gsap.registerPlugin(SplitText);
        st.each(function(index, el) {
            el.split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "cm-split-line"
            });
            gsap.set(el, { perspective: 400 });

            if( $(el).hasClass('cm-split-in-right') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "50",
                    ease: "Back.easeOut",
                });
            }
            if( $(el).hasClass('cm-split-in-left') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "-50",
                    ease: "circ.out",
                });
            }
            if( $(el).hasClass('cm-split-in-up') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "80",
                    ease: "circ.out",
                });
            }
            if( $(el).hasClass('cm-split-in-down') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "-80",
                    ease: "circ.out",
                });
            }
            el.anim = gsap.to(el.split.chars, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                },
                x: "0",
                y: "0",
                rotateX: "0",
                scale: 1,
                opacity: 1,
                duration: 0.8,
                stagger: 0.03,
            });
        });
	});

	/////////////////////////////////////////////////////
	// 22. Image Reveal Animation
	let tp_img_reveal = document.querySelectorAll(".cm_img_reveal");

	tp_img_reveal.forEach((img_reveal) => {
		let image = img_reveal.querySelector("img");
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: img_reveal,
				start: "top 70%",
			}
		});

		tl.set(img_reveal, { autoAlpha: 1 });
		tl.from(img_reveal, 1.5, {
			xPercent: -100,
			ease: Power2.out
		});
		tl.from(image, 1.5, {
			xPercent: 100,
			scale: 1.5,
			delay: -1.5,
			ease: Power2.out
		});
	});

	///////////////////////////////////////////////////
	// 23. cm-zoom-img
	let zm = gsap.matchMedia();
	zm.add("(min-width: 1200px)", () => {
		if ($('.cm-zoom-area').length > 0) {
			// Testimonial 3 Image Animation
			gsap.set(".cm-zoom-img", { scale: 0, opacity: 0 });

			gsap.to(".cm-zoom-img", {
				scrollTrigger: {
					trigger: ".cm-zoom-img",
					start: "center center",
					markers: false
				},
				duration: 1,
				ease: "none",
				scale: 1,
				opacity: 1,
			})

		}
	});

	///////////////////////////////////////////////////
	// 24. text-animetion-jsap
	if ($('.cm-title-anim').length > 0) {
		let splitTitleLines = gsap.utils.toArray(".cm-title-anim");
		splitTitleLines.forEach(splitTextLine => {
			const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
			gsap.set(splitTextLine, { perspective: 300});
			itemSplitted.split({ type: "lines" })
			tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -50, force3D: true, transformOrigin: "top center -50", stagger: 0.2 });
		});	
	}

	///////////////////////////////////////////////////
	// 25. scrool-mill-up
    const appearance = document.querySelectorAll(".mil-up");
    appearance.forEach((section) => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 70,
            scale: 1.05,
            ease: 'sine',
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
				start: 'top 90%',
				end: 'bottom 60%',
				delay: -1.5,
            }
        });
    });

	///////////////////////////////////////////////////
	// 26. mil-scale-img

    const scaleImage = document.querySelectorAll(".mil-scale-img");

    scaleImage.forEach((section) => {
        var value1 = section.getAttribute("data-value-1");
        var value2 = section.getAttribute("data-value-2");

        if (window.innerWidth < 1200) {
            value1 = Math.max(.95, value1);
        }

        gsap.fromTo(section, {
            ease: 'sine',
            scale: value1,
        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

	///////////////////////////////////////////////////
	// 27. cm-rubber

	const headings = document.querySelectorAll('.cm-rubber');

    headings.forEach(heading => {
        const textNodes = [];

        heading.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.textContent.split(' ').forEach((word, index, array) => {
                    const wordSpan = document.createElement('span');
                    wordSpan.classList.add('cm-word-span');
                    word.split('').forEach(letter => {
                        const letterSpan = document.createElement('span');
                        letterSpan.classList.add('cm-letter-span');
                        letterSpan.textContent = letter;
                        wordSpan.appendChild(letterSpan);
                    });
                    textNodes.push(wordSpan);
                    if (index < array.length - 1) {
                        textNodes.push(document.createTextNode(' '));
                    }
                });
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                textNodes.push(node.cloneNode(true));
            }
        });

        heading.innerHTML = '';
        textNodes.forEach(node => heading.appendChild(node));

        const letters = heading.querySelectorAll('.cm-letter-span');
        letters.forEach(letter => {
            letter.addEventListener('mouseenter', () => {
                gsap.to(letter, {
                    scaleY: 1.2,
                    y: '-10%',
                    duration: 0.2,
                    ease: 'sine'
                });
            });

            letter.addEventListener('mouseleave', () => {
                gsap.to(letter, {
                    scaleY: 1,
                    y: '0%',
                    duration: 0.2,
                    ease: 'sine'
                });
            });
        });
    });

	///////////////////////////////////////////////////
	// 28. cm-service-ai-title-wrap

	$('.cm-service-ai-title-wrap .cm-service-ai-title-box').on("mouseenter", function () {
		$('#cm-service-ai-thumb-wrap').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});



	///////////////////////////////////////////////////
	// 29. hover-img-animetion
		const imageContainer = document.querySelectorAll(".image-container");
		const imageElement = document.querySelectorAll(".my-image");

		imageContainer.forEach(function(el, i){
			let easeFactor = 0.02;
			let scene, camera, renderer, planeMesh;
			let mousePosition = { x: 0.5, y: 0.5 };
			let targetMousePosition = { x: 0.5, y: 0.5 };
			let mouseStopTimeout;
			let aberrationIntensity = 0.0;
			let lastPosition = { x: 0.5, y: 0.5 };
			let prevPosition = { x: 0.5, y: 0.5 };

			// shaders
			const vertexShader = `
				varying vec2 vUv;
				void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				}
			`;

			const fragmentShader = `
				varying vec2 vUv;
				uniform sampler2D u_texture;    
				uniform vec2 u_mouse;
				uniform vec2 u_prevMouse;
				uniform float u_aberrationIntensity;

				void main() {
					vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
					vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
					
					vec2 mouseDirection = u_mouse - u_prevMouse;
					
					vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
					float pixelDistanceToMouse = length(pixelToMouseDirection);
					float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);
			
					vec2 uvOffset = strength * - mouseDirection * 0.2;
					vec2 uv = vUv - uvOffset;

					vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
					vec4 colorG = texture2D(u_texture, uv);
					vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

					gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
				}
			`;

			function initializeScene(texture) {
			//   scene creation
			scene = new THREE.Scene();

			// camera setup
			camera = new THREE.PerspectiveCamera(
				80,
				imageElement[i].offsetWidth / imageElement[i].offsetHeight,
				0.01,
				10
			);
			camera.position.z = 1;

			camera = new THREE.PerspectiveCamera(
				80,
				imageElement[i].offsetWidth / imageElement[i].offsetHeight,
				0.01,
				10
			);
			camera.position.z = 1;

			//   uniforms
			let shaderUniforms = {
				u_mouse: { type: "v2", value: new THREE.Vector2() },
				u_prevMouse: { type: "v2", value: new THREE.Vector2() },
				u_aberrationIntensity: { type: "f", value: 0.0 },
				u_texture: { type: "t", value: texture }
			};

			//   creating a plane mesh with materials
			planeMesh = new THREE.Mesh(
				new THREE.PlaneGeometry(2, 2),
				new THREE.ShaderMaterial({
				uniforms: shaderUniforms,
				vertexShader,
				fragmentShader
				})
			);

			//   add mesh to scene
			scene.add(planeMesh);

			//   render
			renderer = new THREE.WebGLRenderer();
			renderer.setSize(imageElement[i].offsetWidth, imageElement[i].offsetHeight);

			//   create a canvas
			el.appendChild(renderer.domElement);
			}

			// use the existing image from html in the canvas
			initializeScene(new THREE.TextureLoader().load(imageElement[i].src));

			animateScene();

			function animateScene() {
			requestAnimationFrame(animateScene);

			mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
			mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

			planeMesh.material.uniforms.u_mouse.value.set(
				mousePosition.x,
				1.0 - mousePosition.y
			);

			planeMesh.material.uniforms.u_prevMouse.value.set(
				prevPosition.x,
				1.0 - prevPosition.y
			);

			aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);

			planeMesh.material.uniforms.u_aberrationIntensity.value = aberrationIntensity;

			renderer.render(scene, camera);
			}

			// event listeners
			el.addEventListener("mousemove", handleMouseMove);
			el.addEventListener("mouseenter", handleMouseEnter);
			el.addEventListener("mouseleave", handleMouseLeave);

			function handleMouseMove(event) {
				easeFactor = 0.02;
				let rect = el.getBoundingClientRect();
				prevPosition = { ...targetMousePosition };

				targetMousePosition.x = (event.clientX - rect.left) / rect.width;
				targetMousePosition.y = (event.clientY - rect.top) / rect.height;

				aberrationIntensity = 1;
			}

			function handleMouseEnter(event) {
				easeFactor = 0.02;
				let rect = el.getBoundingClientRect();

				mousePosition.x = targetMousePosition.x = (event.clientX - rect.left) / rect.width;
				mousePosition.y = targetMousePosition.y = (event.clientY - rect.top) / rect.height;
			}

			function handleMouseLeave() {
				easeFactor = 0.05;
				targetMousePosition = { ...prevPosition };
			}
		})

		///////////////////////////////////////////////////
		// 30. has_fade_anim
		let fadeArray_items = document.querySelectorAll(".has_fade_anim");
		if (fadeArray_items.length > 0) {
			let t = gsap.utils.toArray(".has_fade_anim");
			t.forEach((t, a) => {
				var e = "bottom",
					r = 1,
					o = 1.15,
					i = 50,
					s = 0.15,
					d = "power2.out";
				t.getAttribute("data-fade-offset") && (i = t.getAttribute("data-fade-offset")),
					t.getAttribute("data-duration") && (o = t.getAttribute("data-duration")),
					t.getAttribute("data-fade-from") && (e = t.getAttribute("data-fade-from")),
					t.getAttribute("data-on-scroll") && (r = t.getAttribute("data-on-scroll")),
					t.getAttribute("data-delay") && (s = t.getAttribute("data-delay")),
					t.getAttribute("data-ease") && (d = t.getAttribute("data-ease"));
				let g = { opacity: 0, ease: d, duration: o, delay: s };
				"top" == e && (g.y = -i), "left" == e && (g.x = -i), "bottom" == e && (g.y = i), "right" == e && (g.x = i), 1 == r && (g.scrollTrigger = { trigger: t, start: "top 85%" }), gsap.from(t, g);
			});
		}

		
	////////////////////////////////////////////////////
	// 31. sidebar-menu-start
		$(".cm-offcanvas-open-btn").on("click", function () {
			$(".cm-offcanvas-area").addClass("opened");
		
			setTimeout(() => {
				$('.cm-text-hover-effect-word').addClass('animated-text');
			}, 900);
		});
		
		$(".cm-offcanvas-close-btn").on("click", function () {
		
			setTimeout(() => {
				$('.cm-text-hover-effect-word').removeClass('animated-text');
			}, 1200);
		
			$(".cm-offcanvas-area").removeClass("opened");
		
		});		
		
		$('.menu-hover-active nav ul li').on("mouseenter", function () {
			$(this).addClass('active').siblings().removeClass('active');
		});
		
		$('.menu-hover-active nav ul li').on("mouseleave", function () {
			$(this).removeClass('active').addClass('active');
		});
		$('.menu-hover-active > nav > ul > li').addClass('active');
		
		$('.menu-hover-active').on("mouseleave", function () {
			$('.menu-hover-active > nav > ul > li').addClass('active');
		});	

	////////////////////////////////////////////////////
	// 32. cm-video-img-wrap
	if ($('.cm-video-img-wrap-2').length > 0) {
		let ms = gsap.matchMedia();
		ms.add("(min-width: 768px)", () => {
			gsap.fromTo("#video video", 
				{
					scale: 0.14,     
					y: -334.66,                 
					borderRadius: '50rem'        
				}, 
				{
					scale: 1,   
					y: 0,  
					ease: "power2.out",
					borderRadius: '1.8145rem',
					scrollTrigger: {
						trigger: "#video",
						start: "top 80%",      
						end: "top 20%",
						scrub: true,    
					}
				}
			);
		});
	}
	
	////////////////////////////////////////////////////
	// 33. Text Invert With Scroll 

	const split = new SplitText(".cm-text-invert, .cm-text-invert-2, .cm-text-invert-3", { type: "lines" });

	split.lines.forEach((target) => {
		gsap.to(target, {
			backgroundPositionX: 0,
			ease: "none",
			scrollTrigger: {
				trigger: target,
				scrub: 1,
				start: 'top 85%',
				end: "bottom center"
			}
		});
	});


	////////////////////////////////////////////////////
	// 34. cm-perspective-slider 

	function perspective() {

		if ($('.cm-perspective-slider').length) {

			gsap.set('.cm-perspective-slider .cm-slider .cm-slider-inner', { perspective: 60 });

			$('.cm-perspective-slider .cm-slider .cm-slider-inner .cm-image').each(function () {
				var slide = $(this);

				gsap.fromTo(this, {
					rotationX: 1.8,
					scaleX: 1,
					z: '0vh'
				}, {
					rotationX: -.5,
					scaleX: 1,
					z: '-2vh',
					scrollTrigger: {
						trigger: slide,
						start: "top+=150px bottom",
						end: "bottom top",
						immediateRender: false,
						scrub: 0.1,
					}
				});
			});

		}
	}
	perspective();

	////////////////////////////////////////////////////
	// 35. Isotope	Active 

	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			layoutMode: 'fitRows',
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	////////////////////////////////////////////////////
	// 36. zoom in
	$(".anim-zoomin").each(function() {

		// Add wrap <div>.
		$(this).wrap('<div class="anim-zoomin-wrap"></div>');

		// Add overflow hidden.
		$(".anim-zoomin-wrap").css({ "overflow": "hidden" })

		var $this = $(this);
		var $asiWrap = $this.parents(".anim-zoomin-wrap");

		let cm_ZoomIn = gsap.timeline({
			scrollTrigger: {
				trigger: $asiWrap,
				start: "top 90%",
				markers: false,
			}
		});
		cm_ZoomIn.from($this, { duration: 1.5, autoAlpha: 0, scale: 1.4, ease: Power2.easeOut, clearProps:"all" });
	});

	///////////////////////////////////////////////////
	// 37. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 20) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});


    /* =============================================================================
    -------------------------------  Preloader svg   -------------------------------
    ============================================================================= */


    const svg = document.getElementById("svg");
    const tls = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tls.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 1.5,
        y: -100,
        opacity: 0,
    });
    tls.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
    }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
    });
    tls.to(".loader-wrap", {
        y: -1500,
    });
    tls.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
    });
	tls.from(
        ".pre-header",
        {
            y: 200,
        },
        "-=1.5"
    );
    tls.from(
        ".pre-header .containers",
        {
            y: 40,
            opacity: 0,
            delay: 0.1,
        },
        "-=1.5"
    );

})(jQuery);


