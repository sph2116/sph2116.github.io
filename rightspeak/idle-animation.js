let number = 0 
let sticker = true
let image

const stamps = [
  `assets/normal-pepe.png`,
  `assets/pikachu-pepe.png`,
  `assets/smoking-pepe.png`,
  `assets/smug-pepe.png`,
  `assets/wojack-pepe.png`
]

const stampsTag = document.querySelector(`div.stamps`)

let idleTimer

function addStamps(){
    
    idleTimer = setInterval(function(){
        const img = document.createElement(`img`)
        img.setAttribute(`src`, stamps[number]);  
    
        let maxWidth = window.innerWidth - 200
        let x = Math.floor(Math.random() * maxWidth)
        
        let maxHeight = window.innerHeight - 200
        let y = Math.floor(Math.random() * maxHeight)
        
        img.style.left = x + `px`
        img.style.top = y + `px`
        
        console.log("image at" + x + ", " + y)
        
        stampsTag.appendChild(img)
    
        number += 1
        if (number > stamps.length - 1){
            number = 0
        }
    
    }, 30000)

}//END ADD STAMPS FUNCTION



let startTime

////1 hour timer
function timer(){
    startTime = new Date().getTime()
    let timeElapsed
    
    let calcTimeLeft = setInterval(function(){
        let now = Date.now()
        timeElapsed = now-startTime
//        console.log("time left is" + timeElapsed)

    if(timeElapsed >= 300000){
        clearInterval(calcTimeLeft)
        console.log("5 secs has elapsed")
//        timeLeft = false
    }//End if statement
}, 1000)//End setInterval
    
    console.log("we will start adding stamps")
    addStamps()
        
//        idleTimer = setInterval(function(){
//            const img = document.createElement(`img`)
//            img.setAttribute(`src`, stamps[number]);  
//
//            let maxWidth = window.innerWidth
//            let x = Math.floor(Math.random() * maxWidth)
//
//            let maxHeight = window.innerHeight
//            let y = Math.floor(Math.random() * maxHeight)
//
//            img.style.left = x + `px`
//            img.style.top = y + `px`
//
//            console.log("image at" + x + ", " + y)
//
//            stampsTag.appendChild(img)
//
//            number += 1
//            if (number > stamps.length - 1){
//                number = 0
//            }
//
//        }, 10000)//End idleTimer set interval
//        
}//END TIMER FUNCTION

timer()

document.addEventListener("mousemove", function(){
    clearInterval(idleTimer)
//    console.log("clearing stamp setInterval")
    console.log("clearing all stamps and restarting timer")
    while(stampsTag.firstChild){
        stampsTag.removeChild(stampsTag.firstChild);
    }//End while loop

    timer()
})
