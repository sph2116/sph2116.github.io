const toggleTag = document.querySelector("a.toggle-nav")
const main = document.querySelector("main")
const nav = document.querySelector("nav")

//When the toggle is clicked, toggle class open in main tag

toggleTag.addEventListener("click", function(){
  main.classList.toggle("open")
     nav.classList.toggle("nav-open")   

  if (main.classList.contains("open")){
    toggleTag.innerHTML = '<img src = "assets/close.svg">'
    } else {
    toggleTag.innerHTML = '<img src = "assets/menu.svg">'}
  })