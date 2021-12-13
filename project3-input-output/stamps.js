let number = 0 
let sticker = true
const stamps = [
  `assets/flower1.svg`,
  `assets/tree1.svg`,
  `assets/flower2.svg`,
  `assets/flower3.svg`,
  `assets/tree2.svg`,
  `assets/flower4.svg`
]

const stampsTag = document.querySelector(`div.stamps`)

function addStamps(x,y){
  const img = document.createElement(`img`)
  img.setAttribute(`src`, stamps[number]);
  
//    if(number < stamps.length - 1){
//     img.setAttribute(`src`, stamps[number]);
//        console.log(stamps[number])
//     number++;
//    } else{
//      number = 0
//  }
 
  //The x, y that the stamps are positioned are relative to the stamps.div container, which starts at 50% of the window width which will cause the stamps to go off the page, unless you adjust by subtracting half of the width of the viewport
  img.style.left = x + `px`
  img.style.top = y + `px`
  
  
  stampsTag.appendChild(img)
    
    number += 1
    if (number > stamps.length - 1){
        number = 0
    }
  
  //Add audio
  const audio = document.createElement("audio")
  audio.setAttribute(`src`, `assets/plop.mp3`)
  audio.play()
}

document.addEventListener(`click`, function(event){
    if(sticker == true){
        addStamps(event.pageX, event.pageY)
        console.log(event.pageX + "," + event.pageY)}
})



let nav = document.querySelector('nav')

nav.addEventListener('mouseenter', function(){
    sticker = false
    console.log(sticker)
})

nav.addEventListener('mouseleave', function(){
    sticker = true
    console.log(sticker)
})

//let tryButton = document.getElementById('try')
//console.log(tryButton)
//
//tryButton.addEventListener('mouseenter', function(){
//    sticker = false
//    console.log(sticker)
//})
//
//tryButton.addEventListener('mouseleave', function(){
//    sticker = true
//    console.log(sticker)
//})

let slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("gallery-item");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
