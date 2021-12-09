const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("section.panner")
const coverTag = document.querySelector("section.cover")
const headerTag = document.querySelector("header .tag")

const drawer = document.querySelector(".tag-drawer")
const drawerTags = document.querySelectorAll(".drawer-item .tag")
const drawerDescriptions = document.querySelectorAll(".drawer-description")

const itemTags = document.querySelectorAll(".index-item .tag")
const fearTag = document.querySelector(`.tag[data-tag="fear-of-difference"]`)

console.log(drawerTags)

//When the toggle is clicked, toggle class open in main tag

toggleTag.addEventListener("click", function(){
  mainTag.classList.toggle("open")
    coverTag.classList.toggle("open")
    
//Close tag drawer if open
    drawer.classList.remove("open-description")
    
  if (mainTag.classList.contains("open")){
    toggleTag.innerHTML = '<img src = "assets/close.svg">'   
    } else {
    toggleTag.innerHTML = '<img src = "assets/menu.svg">'}
  })

headerTag.addEventListener("click", openDrawer)

function openDrawer(){
    drawerDescriptions.forEach(description => {
        description.classList.remove("open-description")
    })
    drawer.classList.toggle("open-description")
}

//Add event listeners to all tags in tag drawer
drawerTags.forEach(tag => {
    tag.addEventListener("click", function(){
        console.log(tag.nextElementSibling)
        drawerTags.forEach(tag => {
            tag.classList.remove("selected")
            tag.nextElementSibling.classList.remove("open-description")
        })
        tag.classList.toggle("selected")
        tag.nextElementSibling.classList.toggle("open-description")
    })  
})

//Function for opening descriptions in drawer
function openDescription(indexTag){
     let tagValue = "" + indexTag.dataset.tag + ""
         
     
    drawerTags.forEach(drawerTag => {
            drawerTag.classList.remove("selected")
            drawerTag.nextElementSibling.classList.remove("open-description")
    })
    
    let drawerDescription =  document.querySelector(`.drawer-description[data-tag= ${tagValue}]`)
    
    drawerDescription.classList.add("open-description")
    drawerDescription.previousElementSibling.classList.add("selected")
}//End openDescription function

//Add event listeners for tags in the index
itemTags.forEach(tag => {
    tag.addEventListener("click", function(){
        drawer.classList.add("open-description")
        openDescription(tag)
    })
})

//tag.addEventListener("click", function(){
//    description.classList.toggle("open-description")
//})

//fearTag.addEventListener("click", function(){
//    drawer.classList.toggle("open-description")
//    description.classList.toggle("open-description")
//})