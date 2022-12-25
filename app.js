const t1 = gsap.timeline({defaults : {duration: 1}})


// Animating Header
t1.fromTo('.header-section__heading', {x: -150, opacity: 0}, {x : 0, opacity: 1})
t1.fromTo('.header-section__body', {x: -150, opacity: 0}, {x : 0, opacity: 1}, '<2%')



t1.fromTo('.rating_1', {x: 200, opacity: 0}, {x : 0, opacity: 1}, '<70%' )
t1.fromTo('.rating_2', {x: 200, opacity: 0}, {x : 0, opacity: 1}, '<30%')
t1.fromTo('.rating_3', {x: 200, opacity: 0}, {x : 0, opacity: 1}, '<20%')



t1.fromTo('.card__1', {scale: 0, opacity:0}, {scale: 1,  opacity:1, ease: "elastic.out(0.5, 0.4)"},  )
t1.fromTo('.card__2', {scale: 0}, {scale: 1,  ease: "elastic.out(0.3, 0.4)"}, '<50%' )
t1.fromTo('.card__3', {scale: 0}, {scale: 1,  ease: "elastic.out(0.3, 0.4)"}, '<50%'  )