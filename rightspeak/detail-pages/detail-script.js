const slides = document.getElementsByClassName("slideshow");
let slideIndex = 0;
console.log(slides)
//slides[0].style.display = "flex";

showSlides(slideIndex);
let forward


for(let i=slideIndex;i<slides.length;i++){
    console.log("For loop")

//Display forward and back arrows depending where the pointer is hovering
function cursorChange(){
//     console.log(event.pageX)

     if(event.pageX < slides[i].getBoundingClientRect().right - (slides[i].clientWidth / 2) && event.pageX > slides[i].getBoundingClientRect().left){   
//        document.body.style.cursor = "w-resize";
//Maybe try turning off cursor all together and displaying a custom div that traces the mouse position
        document.body.style.cursor = "url('../assets/arrow-left.png'), w-resize";
//         document.toggleClass("cursor-left")
        forward = -1
        }

    else if(event.pageX >= slides[i].getBoundingClientRect().right - (slides[i].clientWidth / 2) && event.pageX < slides[i].getBoundingClientRect().right) {

//        document.body.style.cursor = "e-resize";
        document.body.style.cursor = "url('../assets/arrow-right.png'), e-resize";
        forward = 1
    }

}//End CursorChange function
    
    
    slides[i].addEventListener('mouseenter', function(){
         console.log("in bounds")
        if(slides.length > 1 ){
            document.addEventListener('mousemove', cursorChange)
        }
 
    })
                               
    slides[i].addEventListener('mouseleave', function(){
        console.log("out bounds")
        document.removeEventListener('mousemove', cursorChange)
        document.body.style.cursor = "auto";
    })
    
//On click move slides forward or back
    slides[i].addEventListener('click', function(event){
        console.log("click event registered")
            slideIndex += forward
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
    slides[i].style.animation = ""

  }
    slides[slideIndex].style.animation = "fade .5s"
  
  slides[slideIndex].style.display = "flex";
} //END showSlides function

//let box = document.querySelector(".hover-extend")
//    let box = document.querySelector(".arrow_box")
//    let tip = document.querySelector("sup.tip")
//    let tipTop 
//    let tipleft 
    

//TOOlTIP
//function tooltip(tip){
////    let box = document.querySelector(".arrow_box")
//    
//    let idNo = tip.getAttribute('data-id')
//    console.log("ID No " + idNo)
//    let box = document.getElementById(`${idNo}`)
//    tipTop = tip.getBoundingClientRect().top
//    tipleft = tip.getBoundingClientRect().left
//    console.log(tipTop + "," + tipleft)
//    box.style.top = tipTop + "px"
//    box.style.left = tipleft + "px"
//
//    let translateAmt = -1 * (box.getBoundingClientRect().height)
//    console.log("translate " + translateAmt)
////    box.style.transform = "translateY(-90px)"
//    box.style.transform = "translateY(" + translateAmt + "px)"
//    box.style.opacity = 1
//    
//}//tooltip function
//
////tip.addEventListener('mouseenter', tooltip)
//
//
//
//let tips = document.querySelectorAll('.tip')
//    tips.forEach((tip)=>{
//        
////        tip.addEventListener('mouseenter', function(){
////            console.log("hi")
////        })
//        tip.addEventListener('mouseenter', tooltip(tip))
////        
////        tip.addEventListener('mouseleave', function(event){
////            let idNo = tip.getAttribute('data-id')
////            let box = document.getElementById(`${idNo}`)
////            box.style.opacity = 0
////        })
//    })

