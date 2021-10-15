const palmNavTags = document.querySelectorAll('a.palm-group')
const palmSVGLines = document.querySelectorAll('svg.palm-group line')
//console.log("palm nav tags" +palmNavTags + "svgLines" +palmSVGLines )
//
//
//palmSVGLines.forEach(line => console.log(line))

const grazeNavTags = document.querySelectorAll('a.graze-group')
const grazeSVGLines = document.querySelectorAll('svg.graze-group line')

const trawlNavTags = document.querySelectorAll('a.trawl-group')
const trawlSVGLines = document.querySelectorAll('svg.trawl-group line')

let allTags = []
palmNavTags.forEach(palmTag =>
    allTags.push(palmTag)
)

grazeNavTags.forEach(grazeTag =>
    allTags.push(grazeTag)
)

trawlNavTags.forEach(trawlTag =>
    allTags.push(trawlTag)
)

console.log("Alltags" + allTags.length)

//const orangutanTag = document.querySelector('#orangutan')
//console.log(orangutanTag)
//
//const orangutanLine = document.querySelector('#orangutan + svg line')
//console.log(orangutanLine)
//
//
//drawLine(`#palm-oil`, orangutanTag, orangutanLine)




function drawLine(originID, targetObject, SVGObject){

    const originTag = document.querySelector(`${originID}`)
    const targetTag = targetObject
    const line = SVGObject 
//    const targetTag = document.querySelector(`${targetID}`)
//    const line = document.querySelector(`${SVGID line}`)  
    
    
    let originTagHeight = originTag.clientHeight;
    let originTagWidth = originTag.clientWidth;
    
    let originTagLeft = originTag.offsetLeft
    let originTagRight = originTag.offsetLeft + originTagWidth
    let originTagTop = originTag.offsetTop
    let originTagBottom = originTag.offsetTop + originTagHeight


    let targetTagHeight = targetTag.clientHeight;
    let targetTagWidth = targetTag.clientWidth;

    let targetTagLeft = targetTag.offsetLeft 
    let targetTagRight = targetTag.offsetLeft + targetTagWidth
    let targetTagTop = targetTag.offsetTop
    let targetTagBottom = targetTag.offsetTop + targetTagHeight


    
//If targetTag is to the right of originTag
    if (targetTagLeft > originTagRight){
        line.setAttribute("x1", originTagRight)
        line.setAttribute("y1", originTagBottom - (originTagHeight/2))
        line.setAttribute("x2", targetTagLeft)
        line.setAttribute("y2", targetTagBottom - (targetTagHeight/2))
        console.log("drawn to target tag right")
    }
    
//If targetTag is to the left of originTag
    
    else if (targetTagLeft < originTagLeft){
        line.setAttribute("x1", originTagLeft)
        line.setAttribute("y1", originTagBottom - (originTagHeight/2))
        line.setAttribute("x2", targetTagRight+2)
        line.setAttribute("y2", targetTagBottom - (targetTagHeight/2))

        console.log("drawn to target tag left")
    }

//If targetTag is centered over/under originTag

    
    else if (targetTagLeft >= originTagLeft && targetTagLeft <= originTagRight ){
//        console.log("tag is above!!" + targetID + targetTagBottom + "," + originTagTop )
        if (targetTagBottom <= originTagTop){
            line.setAttribute("x1", originTagLeft + (originTagWidth/2))
            line.setAttribute("y1", originTagTop)
            line.setAttribute("x2", targetTagLeft + (targetTagWidth/2))
            line.setAttribute("y2", targetTagBottom)
            console.log("drawn to target tag top center")
        } 
        

       if(targetTagTop >= originTagBottom){
//        console.log("tag is below!!" + targetID + targetTagTop + "," + originTagBottom)
             line.setAttribute("x1", originTagLeft + (originTagWidth/2))
             line.setAttribute("y1", originTagBottom)
             line.setAttribute("x2", targetTagLeft + (targetTagWidth/2))
             line.setAttribute("y2", targetTagTop)
            console.log("drawn to target tag top center") 
        }
    }
}//END DRAW FUNCTION




//Go through ALL nav tags
allTags.forEach(tag =>
    //If any tag is hovered, 
    tag.addEventListener("mouseover", function(){
    
        //Find out what the tag's class is
        let tagClass = tag.classList[0]
//        console.log("class is" + tagClass)


        let navTagGroup
        let centralNode
        
        if(tagClass == `palm-group`){
           navTagGroup = palmNavTags
            centralNode = 'palm-oil'
        } 
        
        else if(tagClass == `graze-group`){
            navTagGroup = grazeNavTags
            centralNode = 'overgrazing'
        } 
    
        else {
            navTagGroup = trawlNavTags
            centralNode = 'trawling'
        }
        
        //Cycle through all tags of that class and change all tag colors
        navTagGroup.forEach(tag2 => {
            tag2.style.color = "#F0622D";
            
            //Draw lines for all tags in the class except the central node
            if(tag2.getAttribute(`id`) != centralNode){
                //Convert ID strings into IDs with hashmarks
                let tagID = '#' + tag2.getAttribute(`id`)
                let centralNodeID = '#' + centralNode
                console.log(tagID)
                let line2 = document.querySelector(`${tagID} + svg line`)
                console.log(line2)
                drawLine(centralNodeID, tag2, line2)
                line2.setAttribute("stroke", "#F0622D")
            }
        })//End Second forEach tag2 loop
    
    //For all other tags, dim to 50%
        allTags.forEach(tag3 => {
            if(tag3.classList[0] != tagClass){
                tag3.style.opacity = .5
            }
        })
    
    })//End Add event listener
)//End for loop


//Return back to normal state when mouse leaves
allTags.forEach(tag =>
    tag.addEventListener("mouseleave", function(){
        let tagClass = tag.classList[0]
        let navTagGroup
        let SVGLineGroup
        
         if(tagClass == `palm-group`){
           navTagGroup = palmNavTags
            SVGLineGroup = palmSVGLines
        } 
        
        else if(tagClass == `graze-group`){
            navTagGroup = grazeNavTags
            SVGLineGroup = grazeSVGLines
        } 
    
        else {
            navTagGroup = trawlNavTags
            SVGLineGroup = trawlSVGLines
        }
        
        navTagGroup.forEach(tag =>
            tag.style.color = "#ffffff"
        )
    
//For all other tags, set opacity back to 1
        allTags.forEach(tag2 => {
            if(tag2.className != tagClass){
            tag2.style.opacity = 1
            }
        })

//
    SVGLineGroup.forEach(line => {
        line.setAttribute("stroke", "transparent")
    })

    })//End mouseleave loop
)//End for each loop


