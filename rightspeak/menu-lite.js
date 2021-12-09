const toggleTag = document.querySelector("a.toggle-nav")
const mainWrapper = document.querySelector("div.main-wrapper")
const nav = document.querySelector("nav")

//When the toggle is clicked, toggle class open in main tag

toggleTag.addEventListener("click", function(){
  mainWrapper.classList.toggle("open")
    nav.classList.toggle("nav-open")   
    
  if (mainWrapper.classList.contains("open")){
    toggleTag.innerHTML = '<img src = "assets/close.svg">'   
    } else {
    toggleTag.innerHTML = '<img src = "assets/menu.svg">'}
  })