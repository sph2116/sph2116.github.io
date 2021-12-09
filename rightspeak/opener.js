const videoLinks = document.querySelectorAll('.video-link')
const videoContainer = document.querySelector('video')
const essayWrapper = document.querySelector(`div.essay-wrapper`)
const header = document.querySelector(`header`)
videoContainer.muted = true
const r = document.querySelector(':root');
let rs = getComputedStyle(r);

videoLinks.forEach(link => {
    link.addEventListener('mouseover', function(){
        let videoSrc = link.getAttribute(`data-media`)
//        videoSrc = "'" + videoSrc + "'"
        console.log("Src is " + videoSrc)
        videoContainer.setAttribute(`src`, videoSrc)
        videoContainer.style.display = "block"
        essayWrapper.style.opacity = .1
        essayWrapper.style.backgroundColor = "transparent"
        header.style.opacity = .1
        header.style.backgroundColor = "transparent"
        videoContainer.play()
        console.log("mouseenter")
    })//End addEventListener mouseover
    
    link.addEventListener('mouseleave', function(){
        videoContainer.style.display = "none"
        essayWrapper.style.opacity = 1
        essayWrapper.style.backgroundColor = rs.getPropertyValue('--background-color1')
        header.style.opacity = 1
        header.style.backgroundColor = "#fff"
//    video.muted = true

    })//End addEventListener mouseleave
    
})//End forEach loop


      

//videoLink.addEventListener('mouseover', function(){
//    video.style.display = "block"
//    essayWrapper.style.opacity = .25
//    essayWrapper.style.backgroundColor = "transparent"
//    video.play()
//    console.log("mouseenter")
//})
//
//videoLink.addEventListener('mouseleave', function(){
//    video.style.display = "none"
//    essayWrapper.style.opacity = 1
//    essayWrapper.style.backgroundColor = rs.getPropertyValue('--background-color1')
////    video.muted = true
//
//})
