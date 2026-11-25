/***************************************************
==================== JS INDEX ======================
****************************************************

01. cm-hero-slider
02. cm-testimonial-slider-active
03. tp-team-slider-active
04. cm-text-slider-slider
05. cm-gallery-port-slide-active
06. cm-text-port-slide-active
07. cm-testimonial-port-active
08. cm-testimonial-crtv-slider-active
09. cm-project-ai-slider-active
10. cm-instagram-ai-slide
11. cm-portfolio-slicer-active
12. postbox__thumb-slider-active
 ****************************************************/

(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// 01. cm-hero-slider
	if ($('#showcase-slider-wrappper').length > 0) {

		const showcaseSwiper = new Swiper('#showcase-slider', {
			direction: "horizontal",
			loop: true,
			slidesPerView: 'auto',
			touchStartPreventDefault: false,
			speed:1000,
			autoplay:{
				delay:5000
			},
			effect: 'fade',
			simulateTouch : true,
			parallax:true,
			pagination: {
				el: '.cm-hero-slider-dot',
				clickable: true,
			},						
			on: {
				slidePrevTransitionStart: function () {	
		
					$('.cm-hero-slider-dot').find('.swiper-pagination-bullet').each(function() {
						if (!$(this).hasClass("swiper-pagination-bullet-active")) {
							$('#trigger-slides .swiper-slide-active').find('div').first().each(function() {
								if (!$(this).hasClass("active")) {
									$(this).trigger('click');
								}
							});
							
							$('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function() {
								if (!$(this).hasClass("active")) {
									$(this).trigger('click');
								}
							}); 
						}
					});
											
				},
				slideNextTransitionStart: function () {	
		
					$('.cm-hero-slider-dot').find('.swiper-pagination-bullet').each(function() {
						if (!$(this).hasClass("swiper-pagination-bullet-active")) {
							$('#trigger-slides .swiper-slide-active').find('div').first().each(function() {
								if (!$(this).hasClass("active")) {
									$(this).trigger('click');
								}
							});
							
							$('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function() {
								if (!$(this).hasClass("active")) {
									$(this).trigger('click');
								}
							}); 
						}
					});
											
				}
				},
		});	
		
		var vertex = 'varying vec2 vUv; void main() {  vUv = uv;  gl_Position = projectionMatrix  modelViewMatrix  vec4( position, 1.0 );	}';
		var fragment = `
			varying vec2 vUv;
		
			uniform sampler2D currentImage;
			uniform sampler2D nextImage;
			uniform sampler2D disp;
			uniform float dispFactor;
			uniform float effectFactor;
			uniform vec4 resolution;
		
			void main() {
		
				vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
		
				vec4 disp = texture2D(disp, uv);
				vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
				vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
				vec4 _currentImage = texture2D(currentImage, distortedPosition);
				vec4 _nextImage = texture2D(nextImage, distortedPosition2);
				vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
		
				gl_FragColor = finalTexture; }
		
			`;
		
		var gl_canvas = new WebGL({
			vertex: vertex,
			fragment: fragment,
		});
				
		var addEvents = function(){
		
			var triggerSlide = Array.from(document.getElementById('trigger-slides').querySelectorAll('.slide-wrap'));
			gl_canvas.isRunning = false;
		
			triggerSlide.forEach( (el) => {
		
				el.addEventListener('click', function() {
		
						if( !gl_canvas.isRunning ) {
		
							gl_canvas.isRunning = true;
		
							document.getElementById('trigger-slides').querySelectorAll('.active')[0].className = '';
							this.className = 'active';
		
							var slideId = parseInt( this.dataset.slide, 10 );
		
							gl_canvas.material.uniforms.nextImage.value = gl_canvas.textures[slideId];
							gl_canvas.material.uniforms.nextImage.needsUpdate = true;
		
							gsap.to( gl_canvas.material.uniforms.dispFactor, {
								duration: 1,
								value: 1,
								ease: 'Sine.easeInOut',
								onComplete: function () {
									gl_canvas.material.uniforms.currentImage.value = gl_canvas.textures[slideId];
									gl_canvas.material.uniforms.currentImage.needsUpdate = true;
									gl_canvas.material.uniforms.dispFactor.value = 0.0;
									gl_canvas.isRunning = false;
								}
							});
		
						}
		
				});
		
			});
		
		};
		
		addEvents();
	}

	////////////////////////////////////////////////////
	// 02. cm-testimonial-slider-active
	var slider = new Swiper('.cm-testimonial-slider-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		speed:1500,
		loop: true,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
		  },
	})


	////////////////////////////////////////////////////
	// 03. tp-team-slider-active
	var team = new Swiper('.cm-team-slider-active', {
		slidesPerView: 6,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 30,
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
	});

	////////////////////////////////////////////////////
	// 04. cm-text-slider-slider

	var cm_text_slide = new Swiper(".cm-hero-text-slide-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 7000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////////////////////////////////////////////////////
	// 05. cm-gallery-port-slide-active

	var cm_gallery_slide = new Swiper(".cm-gallery-port-slide-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 15,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 6000,
		autoplay: {
		  delay: false,
		  disableOnInteraction: false,
		  pauseOnMouseEnter: true,
		},
	});

	var cm_gallery_2_slide = new Swiper(".cm-gallery-port-slide-active-2", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 15,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 6000,
		autoplay: {
		  delay: false,
		  disableOnInteraction: false,
		  pauseOnMouseEnter: true,
		},
	});

	////////////////////////////////////////////////////
	// 06. cm-text-port-slide-active

	var cm_port_slide = new Swiper(".cm-text-port-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 7000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});


	////////////////////////////////////////////////////
	// 07. cm-testimonial-port-active
	var testimonial = new Swiper('.cm-testimonial-port-active', {
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 30,

		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
	});

	////////////////////////////////////////////////////
	// 08. cm-testimonial-crtv-slider-active
	var testimonial_crtv = new Swiper(".cm-testimonial-crtv-slider-active", {
		slidesPerView: 1,
		speed:1000,
		spaceBetween: 20,
		loop: true,
		a11y: false,
		navigation: {
			prevEl: '.cm-testimonial-prev',
			nextEl: '.cm-testimonial-next',
		},
	});

	////////////////////////////////////////////////////
	// 09. cm-project-ai-slider-active
	var project_ai = new Swiper('.cm-project-ai-slider-active', {
		loop: true,
		freemode: true,
		slidesPerView: 1,
		spaceBetween: 30,
		centeredSlides: false,
		allowTouchMove: false,
		speed: 5000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
	});


	////////////////////////////////////////////////////
	// 10. cm-instagram-ai-slide
	var cm_instagram_ai = new Swiper(".cm-instagram-ai-slide", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},
			'991': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	////////////////////////////////////////////////////
	// 11. cm-portfolio-slicer-active
	const swiper = new Swiper('.cm-portfolio-slicer-active', {
		// pass EffectSlicer module to modules
		modules: [EffectSlicer],
		// specify "slicer" effect
		effect: 'slicer',
		slicerEffect: {
		  split: 5,
		},
		direction: 'vertical',
		speed: 600,
		grabCursor: true,
		navigation: {
		  nextEl: '.cm-portfolio-slicer-button-next',
		  prevEl: '.cm-portfolio-slicer-button-prev',
		},
		pagination: {
		  el: '.cm-portfolio-slicer-pagination',
		},
	  });

	////////////////////////////////////////////////////
	// 12. postbox__thumb-slider-active
	  var slider = new Swiper('.postbox__thumb-slider-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		speed:1000,
		loop: true,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
		},
	})

})(jQuery);