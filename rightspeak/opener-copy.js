window.scrollTo(0,0);
let tl = gsap.timeline()
let slides = document.getElementsByClassName("main-text")
console.log(slides)
let dots = document.getElementsByClassName("slide-number")
let slideIndex = 0;


tl.set("h1", {opacity:0})
tl.set("header", {y:-100, opacity: 0})

tl.to(".image-loader img", {duration: 1.25, delay:.5, display: "block", stagger:.25, ease: "none"})
tl.to(".image-loader img", {duration: .1, display: "none"})
tl.to(".image-loader", {duration: .75 , opacity: 0, display: "none"})
tl.to("h1", {delay: .5, duration: 1.5, opacity:1, ease:"power4.out"})
tl.to("h1", {delay: .75, duration: 1, opacity:0, ease:"power4.out"})
tl.from("blockquote span", {duration: 1.5, opacity:0, stagger: 2, ease:"power4.out"})
tl.from("blockquote p", {delay: 1, duration: 1, opacity:0, ease:"power4.out"})
tl.to("blockquote", {delay: .75, duration: 2, opacity:0, ease:"power4.out"})

tl.to("header", {duration: 1.5, y:0, opacity:1, ease:"power4.out"})
tl.from(".essay", {duration: 1.5, opacity:0, ease:"power4.out"})


//On click move slides forward or back

for (i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', function(event){
        console.log("click event registered")
            slideIndex += 1
        console.log("Slide index is " + slideIndex)
        
        if (slideIndex > slides.length-1) {
            console.log("REset to beginning of index")
            slideIndex = 0
            showSlides(slideIndex)
        } else if(slideIndex < 0){
            console.log("REset to end of index")
            slideIndex = slides.length-1
            showSlides(slideIndex)
        }
        else{
            showSlides(slideIndex)
        }
    })
}

function showSlides(n) {
  let i;
    
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("selected")  
    slides[i].style.animation = ""
  }
    slides[slideIndex].style.animation = "fade 1s"
  
    dots[slideIndex].classList.add("selected")
//    dotP = dots[slideIndex].firstChild

//    dotP.classList.add("selected")
    
  slides[slideIndex].style.display = "block";
} //END showSlides function

showSlides(slideIndex);

for (let i = 0; i < dots.length; i++){
    dots[i].addEventListener('click', function(){
        slideIndex = i
        showSlides(i)
    })
}
