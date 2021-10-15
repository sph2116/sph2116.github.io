//Start detail page scripts
const animalLinkTags = document.querySelectorAll('span.animal-link')
const orangutanArticle = document.getElementById('orangutan-article')
const tigerArticle = document.getElementById('tiger-article')
const rhinoArticle = document.getElementById('rhino-article')
const navTag = document.querySelector(`nav.detail-nav`)
const titleTag = document.querySelector(`nav.detail-nav p`)



animalLinkTags.forEach(tag => {
    tag.addEventListener("click", function(){
        //Get the tag's ID -- won't include the hashtag
        let tagName = tag.id
        
         if(tagName == "orangutan-link"){
            orangutanArticle.classList.toggle("none") 
            orangutanArticle.classList.toggle("show") 
         } 
        
        else if(tagName == "tiger-link"){
            tigerArticle.classList.toggle("none") 
            tigerArticle.classList.toggle("show") 
        } 
        
        else if(tagName == "rhino-link"){
            rhinoArticle.classList.toggle("none") 
            rhinoArticle.classList.toggle("show") 
        }    

    })//End addEventListener function
})//End outer forEach loop

//Close button
const closeTags = document.querySelectorAll('div.close')
console.log(closeTags )

closeTags.forEach(tag => {
    
    tag.addEventListener("click", function(){
        let tagName = tag.id
        console.log(tagName )
            if(tagName == "orangutan-close" && orangutanArticle.classList.contains('show')){
            orangutanArticle.classList.toggle("none") 
            orangutanArticle.classList.toggle("show") 
         }
        
        else if (tagName == "tiger-close" && tigerArticle.classList.contains('show')){
            
            tigerArticle.classList.toggle("none") 
            tigerArticle.classList.toggle("show")    
                 
        }
        
        else if(tagName == "rhino-close" && rhinoArticle.classList.contains('show')){
            rhinoArticle.classList.toggle("none") 
            rhinoArticle.classList.toggle("show")      
        }
    })
})

//Nav scroll effect



document.addEventListener(`scroll`, function(){
    const pixelsScrolled = window.pageYOffset;
    

      if(pixelsScrolled > window.innerHeight-100){
        navTag.style.backgroundColor =  `rgba(128,114,78,.85)`;
          navTag.style.boxShadow = "0 4px 3px 2px rgba(0,0,0,0.5)"
        navTag.style.backdropFilter = "blur(10px)"
        titleTag.style.opacity= 1;
      }
    
    else if (pixelsScrolled < window.innerHeight-100 ) {
        navTag.style.backgroundColor =  `transparent`;
        navTag.style.backdropFilter = "none"
        navTag.style.boxShadow = "none"

        titleTag.style.opacity= 0;
      }//End else tag
    

})
