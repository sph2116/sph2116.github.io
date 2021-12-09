let tl = gsap.timeline()
                       
tl.set("h3", {opacity: 0})
tl.set(".essay-wrapper", {opacity: 0})

tl.to("h3", {delay:.6, duration:1, opacity: 1, ease:"power4.out"})
tl.to(".essay-wrapper", {duration: 1, opacity: 1, ease:"power4.out"}, ">-.5")