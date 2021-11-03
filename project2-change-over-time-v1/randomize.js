let layer1 = document.querySelector(`div.layer1`)
let layer2 = document.querySelector(`div.layer2`)
let layer3 = document.querySelector(`div.layer3`)
let startScreenTag = document.querySelector(`.start-screen`)
let startButtonTag =document.querySelector(`.start-screen button`) 

let bellSound = document.getElementById(`bell`)
let introTag = document.getElementById(`intro`)
let outroTag = document.getElementById(`outro`)

//
//// Code from the youtube api that is meant to play the embedded youtube player, but it throws me a ton of errors 
//      var tag = document.createElement('script');
//
//      tag.src = "https://www.youtube.com/iframe_api";
//      var firstScriptTag = document.getElementsByTagName('script')[0];
//      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
//  var player;
//  function onYouTubeIframeAPIReady() {
//    player = new YT.Player('music1', {
//        events: {
//          'onReady': onPlayerReady,
//          'onStateChange': onPlayerStateChange
//        }
//    });
//  }
//
//  function onPlayerReady(event) {
//    event.target.playVideo();
//  }


let timeLeft = true
let layer1On = true


//LAYER 1 INITIAL SETUP
let layer1h1 = Math.random() * 360

//Find a random number between 50 and 100
let layer1s1 = 50 + Math.random() * 50

//Find a random number between 40 and 90
let layer1l1 = 40 + Math.random() * 50

let layer1c1 = `hsl(${layer1h1}, ${layer1s1}%, ${layer1l1}%)` //The ${} notation tells JS you are using a variable and not a string. This works with the backtick marks

//Find a random number between 0 and 360
let layer1h2 = Math.random() * 360

//Find a random number between 50 and 100
let layer1s2 = 50 + Math.random() * 50

//Find a random number between 40 and 90
let layer1l2 = 40 + Math.random() * 50

let layer1c2 = `hsl(${layer1h2}, ${layer1s2}%, ${layer1l2}%)` //The ${} notation tells JS you are using a variable and not a string. This works with the backtick marks


//Set bg for layer 1
  let layer1angle = Math.random() * 360
  layer1.style.backgroundImage = `linear-gradient(${layer1angle}deg, ${layer1c1}, ${layer1c2})`
    console.log("Original layer 1 c1, c2, angle is" + layer1c1 + "," + layer1c2 + "," + layer1angle)

//LAYER 2 INITIAL SETUP
let layer2h1 = Math.random() * 360

//Find a random number between 50 and 100
let layer2s1 = 50 + Math.random() * 50

//Find a random number between 40 and 90
let layer2l1 = 40 + Math.random() * 50

let layer2c1 = `hsl(${layer2h1}, ${layer2s1}%, ${layer2l1}%)` //The ${} notation tells JS you are using a variable and not a string. This works with the backtick marks

//Find a random number between 0 and 360
let layer2h2 = Math.random() * 360

//Find a random number between 50 and 100
let layer2s2 = 50 + Math.random() * 50

//Find a random number between 40 and 90
let layer2l2 = 40 + Math.random() * 50

let layer2c2 = `hsl(${layer2h2}, ${layer2s2}%, ${layer2l2}%)` //The ${} notation tells JS you are using a variable and not a string. This works with the backtick marks


//Set bg for layer 2
  let layer2angle = Math.random() * 360
  layer2.style.backgroundImage = `linear-gradient(${layer2angle}deg, ${layer2c1}, ${layer2c2})`
    console.log("Original layer 2 c1, c2, angle is" + layer2c1 + "," + layer2c2 + "," + layer2angle)

let shiftBg 

function bgChange(){
    shiftBg = setInterval(function(){

  if(layer1On == true){
        //Layer 2 Color 1
    if(layer2h1<=360){
        layer2h1 += Math.random()*10
    }else{
        layer2h1 = Math.random()*5
    }

    if(layer2s1<=100){
       layer2s1 += Math.random()*10
    }else{
        layer2s1 =  50 + Math.random() * 50
    }            

    layer2c1 = `hsl(${layer2h1}, ${layer2s1}%, ${layer2l1}%)`
    
      //Layer 2 Color 2
    
    if(layer2h2<=360){
        layer2h2 += Math.random()*10
    }else{
        layer2h2 = Math.random()*5
    }

    if(layer2s2<=100){
       layer2s2 += Math.random()*10
    }else{
        layer2s2 =  50 + Math.random() * 50
    }            

    layer2c2 = `hsl(${layer2h2}, ${layer2s2}%, ${layer2l2}%)`

    if(layer2angle<=360){
        layer2angle += Math.random()*10
    }else{
        layer2angle = Math.random()*360
    }
    
    layer2.style.backgroundImage = `linear-gradient(${layer2angle}deg, ${layer2c1}, ${layer2c2})`  

        layer1.style.opacity = .3
        layer2.style.opacity = .7
        layer1On = false

    console.log("Updated layer 2 c1, c2, angle is" + layer2c1 + "," + layer2c2 + "," + layer2angle)
  
      
    }else{    
    //Layer 1 Color 1

    if(layer1h1<=360){
        layer1h1 += Math.random()*10
    }else{
        layer1h1 = Math.random()*5
    }
    //    layer1s1 =   50 + Math.random() * 50

    if(layer1s1<=100){
       layer1s1 += Math.random()*10
    }else{
        layer1s1 =  50 + Math.random() * 50
    }            

    layer1c1 = `hsl(${layer1h1}, ${layer1s1}%, ${layer1l1}%)`

    
      //Layer 1 Color 2
    
    if(layer1h2<=360){
        layer1h2 += Math.random()*10
    }else{
        layer1h2 = Math.random()*5
    }
    //    layer1s1 =   50 + Math.random() * 50

    if(layer1s2<=100){
       layer1s2 += Math.random()*10
    }else{
        layer1s2 =  50 + Math.random() * 50
    }            

    layer1c2 = `hsl(${layer1h2}, ${layer1s2}%, ${layer1l2}%)`

    if(layer1angle<=360){
        layer1angle += Math.random()*10
    }else{
        layer1angle = Math.random()*360
    }
    
    layer1.style.backgroundImage = `linear-gradient(${layer1angle}deg, ${layer1c1}, ${layer1c2})`
    
    layer1.style.opacity = .7
    layer2.style.opacity = .3
    layer1On = true
        
    console.log("Updated layer 1 c1, c2, angle is" + layer1c1 + "," + layer1c2 + "," + layer1angle)
    
    }//End layer 1 else statement   
    

}, 3000)}//End bgChange function
  
function stopBgChange(){
    clearInterval(shiftBg)
    console.log("bgchange stopped")
}




//Set a 10 minute timer and repeat every hour
let startTime 

//10 minute timer
function tenMinTimer(){
    introTag.classList.toggle('fade')
    bgChange()
    startTime = new Date().getTime()
    timeLeft = true
    let calcTimeLeft = setInterval(function(){
        let now = Date.now()
        let timeLeft = now-startTime
        console.log(timeLeft)
 
//When the timer runs out, pause the gradient switching and set it to black
        if(timeLeft >= 30000){
            clearInterval(calcTimeLeft)
            timeLeft = false
            console.log("10 min Timer done!" + timeLeft)
            stopBgChange()
//            layer1.style.backgroundImage = `linear-gradient(0, rgb(0,0,0), rgb(0,0,0))`
            layer1.style.opacity = 0
            layer2.style.opacity = 0

            layer3.style.opacity = 1
            introTag.classList.toggle('fade')
            hourTimer()
            }
    }
, 1000)//End setInterval

}//End tenMinTimer function

////1 hour timer
function hourTimer(){
    startTime = new Date().getTime()
    
//    bellSound.play()
     let calcTimeLeft = setInterval(function(){
        let now = Date.now()
        let timeLeft = now-startTime
//        console.log("time left is" + timeLeft)
        outroTag.innerHTML = "Take 10 minutes to breathe every hour. Your next breather starts in " + Math.floor((3600-(timeLeft/1000))/60) + " minutes and " + Math.floor((3600-(timeLeft/1000))%60) + " seconds" 
        outroTag.style.opacity = 1
//When the timer runs out, pause the gradient switching and set it to black? Pause the circle. Display a message telling the user they are done. Play bell sound.
    if(timeLeft >= 60000){
        clearInterval(calcTimeLeft)
        timeLeft = false
        console.log("One hour Timer done!")
        layer1.style.opacity = .5
        layer2.style.opacity = .5
        layer3.style.opacity = 0
        outroTag.style.opacity = 0

        tenMinTimer()
//        bellSound.play()

        }
    }

, 1000)//End setInterval

}


//bellSound.play()

//Clear start screen when user clicks start
startButtonTag.addEventListener("click", function(){
    startScreenTag.style.opacity = 0;
    //Execute 10 minute timer
    tenMinTimer()
})