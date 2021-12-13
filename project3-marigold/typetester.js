const buttonTag = document.getElementById("newTextbox");
const outputTag = document.getElementById("output");
const mainTag = document.querySelector("main");
const bodyTag = document.querySelector("body");
let parentRect = outputTag.getBoundingClientRect();
const test = document.querySelector("textarea.test")
let textBoxes = []
let selectedTextbox
let selectedBoxRotation = ""

let shift = false
const glyphLibDivs = document.querySelectorAll(".glyph")
console.log(glyphLibDivs)
const glyphDetailDiv = document.querySelector(".glyph-detail")


const typeSizeTag = document.querySelector(`input[name="typesize"]`)
const typeSizeOutputTag = document.querySelector(`p.typesize-output`)

const widthTag = document.querySelector(`input[name="width"]`)
const widthOutputTag = document.querySelector(`p.width-output`)

const lineHeightTag = document.querySelector(`input[name="line-height"]`)
const heightOutputTag = document.querySelector(`p.height-output`)

const rotateTag = document.querySelector(`input[name="rotation"]`)
const rotateOutputTag = document.querySelector(`p.rotation-output`)

const colorTags = document.querySelectorAll(`div.colors div`)



//Add event listeners to input elements
//Size slider
typeSizeTag.addEventListener(`input`, function(){
  selectedTextbox.focus();
  selectedTextbox.style.fontSize = this.value + `px`
  typeSizeOutputTag.innerHTML = this.value + ` px`
})

//Width slider
widthTag.addEventListener(`input`, function(){
  selectedTextbox.focus();
  selectedTextbox.style.width = this.value + `px`
  widthOutputTag.innerHTML = this.value + ` px`
})

////Line height number picker
//lineHeightTag.addEventListener(`input`, function(){
//  selectedTextbox.focus();
//  selectedTextbox.style.lineHeight = this.value
//})

//Line height slider
lineHeightTag.addEventListener(`input`, function(){
  selectedTextbox.focus();
  selectedTextbox.style.lineHeight = this.value
  heightOutputTag.innerHTML = this.value
})

//Rotateslider
rotateTag.addEventListener(`input`, function(){
  selectedTextbox.focus();
  selectedTextbox.style.transform = "rotate(" + this.value + "deg)"
  rotateOutputTag.innerHTML = this.value
})

////Rotate number picker
//rotateTag.addEventListener(`input`, function(){
//  selectedTextbox.focus();
//  selectedTextbox.style.transform = "rotate(" + this.value + "deg)"
//})

//COLOR PICKER. Go through all of my color tags and when one is selected change the bkg color and text color and highlight the tag in selected state
let r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  let rs = getComputedStyle(r);
  // Alert the value of the --font-color1 variable
  console.log("The value of --font-color1 is: " + rs.getPropertyValue('--font-color1'));
}

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --font-color1 to another value (in this case "lightblue")
  r.style.setProperty('--font-color1', 'lightblue');
}

colorTags.forEach(tag => {
  tag.addEventListener('click', function(){
   bodyTag.style.backgroundColor = this.style.backgroundColor
    r.style.setProperty('--font-color1', `${this.style.color}`);
    r.style.setProperty('--hover-color1', `${this.style.color}`); 
      
    glyphDetailDiv.style.backgroundColor = this.style.backgroundColor
//      outputTag.style.backgroundColor = "#000"
      console.log("background color " + this.style.backgroundColor)
//    outputTag.style.color = this.style.color
    
    //reset the classes
    colorTags.forEach(tag => {
      tag.classList.remove("selected") 
    })
    
    //Highlight the clicked color tag with the style specified for selected class
    this.classList.add("selected")
  })
})

//Glyph library section

glyphLibDivs.forEach(g => {
    g.addEventListener('mouseenter', function(){
        glyphDetailDiv.style.opacity = 1; 
        glyphDetailDiv.style.zIndex = 1005; 
        let glyphLibraryRight = document.getElementById('glyph-library').getBoundingClientRect().right; 
        console.log(glyphLibraryRight)
        glyphDetailDiv.style.left =  (glyphLibraryRight + 24) + 'px';
        glyphDetailDiv.children[0].innerHTML = g.dataset.letter 
        glyphDetailDiv.children[1].innerHTML = g.dataset.letter 
        glyphDetailDiv.children[2].innerHTML = g.dataset.description

    })
    
    g.addEventListener('mouseleave', function(){
        glyphDetailDiv.style.opacity = 0; 
        glyphDetailDiv.style.zIndex = 1; 
    })
})


//Draggable text box. Code from https://javascript.info/mouse-drag-and-drop#comments
function drag(event, box) {
    box.ondragstart = function() {
        return false;
    };
    
    
    let shiftX = event.clientX - box.getBoundingClientRect().left;
    let shiftY = event.clientY - box.getBoundingClientRect().top;

    box.style.position = 'absolute';
    box.style.zIndex = 1000;
    document.body.append(box);

    moveAt(event.pageX, event.pageY);

  // moves the test at (pageX, pageY) coordinates
  // taking initial shifts into account
      function moveAt(pageX, pageY) {
        box.style.left = pageX - shiftX + 'px';
        box.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
          
        console.log("Test for mousemove before if statement")
          console.log("width " + box.getBoundingClientRect().width)
        if(event.clientX >= parentRect.left + shiftX && event.clientX <= parentRect.right - (box.getBoundingClientRect().width - shiftX) && event.clientY >= parentRect.top + shiftY && event.clientY <=  document.getElementById('options').getBoundingClientRect().top - (box.getBoundingClientRect().height - shiftY)){
            moveAt(event.pageX, event.pageY);
            console.log("mousemove event firing")} //End If statement
//        else {
//             //if mouse went out of bounds in Horizontal dir.
//            if(event.clientX+box.width >= parentRect.right){
//               box.style.left = `${parentRect.right-box.width}px`;
//            }
//            //if mouse went out of bounds in Vertical dir.
//            if(event.clientY+box.height >= parentRect.bottom){
//               box.style.top = `${parentRect.bottom-box.height}px`;
//            }
//        }//End else
      }//End onMOusemove

      // move the test on mousemove
      document.addEventListener('mousemove', onMouseMove);

      // drop the test, remove unneeded handlers. Changed from original script to be document.onmouseup vs ball.onmouseup
      document.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
        console.log("removing mousemove frombox")

    //        box.ondragstart = function() {
    //      return false;
    //    };
      };
}

//UPDATED VERSION
function newTextbox() {
    let textBox = document.createElement("textarea");
    outputTag.appendChild(textBox);
    
//Initialize textbox values
    textBox.style.fontSize = 75 + "px";
    typeSizeOutputTag.innerHTML = "75px"
    typeSizeTag.value = 75
    
    textBox.style.width = 200 + "px"
    widthOutputTag.innerHTML = "200px"
    widthTag.value = 200
    
    textBox.style.lineHeight = 1
    heightOutputTag.innerHTML = "1"
    lineHeightTag.value = 1
//    selectedTextbox.style.transform = "rotate(0)"
    
    textBox.style.transform = "rotate(" + 0 + "deg)"
    rotateOutputTag.innerHTML = "0"
    rotateTag.value = 0

    
    textBox.focus();
    
    textBox.addEventListener("mousedown", function(){
        drag(event,textBox)
    })//end event listner
    textBoxes.push(textBox)
    console.log(textBoxes)
   
    textBox.addEventListener("focus", function(){
        selectedTextbox = textBox;
       selectedBoxRotation = ""
        console.log("selected" + selectedTextbox)
        console.log("Selected value is" + selectedTextbox.value)
        
//        if(selectedTextbox.value == ""){
//            console.log("slider value is " + typeSizeTag.value)
//            console.log("typesize is " + selectedTextbox.style.fontSize)
//            typeSizeOutputTag.innerHTML = typeSizeTag.value
//        }
            typeSizeOutputTag.innerHTML = selectedTextbox.style.fontSize
            typeSizeTag.value = selectedTextbox.style.fontSize
        
            widthOutputTag.innerHTML = selectedTextbox.style.width
            widthTag.value = selectedTextbox.style.width
        
                
            heightOutputTag.innerHTML = selectedTextbox.style.lineHeight
            lineHeightTag.value = selectedTextbox.style.lineHeight
        
            let regexp = /[0-9]/g;
            let numbers = String(selectedTextbox.style.transform).match(regexp);
            console.log("rotation is" + numbers + "Array length is " + numbers.length);
        
            for(let i = 0; i < numbers.length; i++){
                
                selectedBoxRotation += numbers[i]
                console.log(selectedBoxRotation)
            }
        
            rotateTag.value = selectedBoxRotation
            rotateOutputTag.innerHTML = selectedBoxRotation

//        

//        
//            rotateTag.value = selectedTextbox.style.transform 


        
         textBox.addEventListener("keydown", function(event){
            if(event.shiftKey && event.key === "Backspace"){
                selectedTextbox.remove()
            }
            })//End focus event listener
        })
    }//End NewTextBox function  

buttonTag.addEventListener("click", newTextbox)

let exportButton = document.getElementById('export')

//exportButton.addEventListener("click", function(){
//    let a = document.body.appendChild(
//        document.createElement("a")
//    );
//    a.download = "export.html";
//    a.href = "data:text/html," + outputTag.innerHTML; // Grab the HTML
//    a.click(); // Trigger a click on the element
//})

exportButton.addEventListener("click", function(){
    html2canvas(document.getElementById("output")).then(function (canvas) {
        var anchorTag = document.createElement("a");
			document.body.appendChild(anchorTag);
//			document.getElementById("previewImg").appendChild(canvas);
			anchorTag.download = "filename.jpg";
			anchorTag.href = canvas.toDataURL();
			anchorTag.target = '_blank';
			anchorTag.click();
    })
})

//////DELETE HINT
//let hint = document.querySelector(`div.hint`)
//document.addEventListener("keydown", function(event){
//    if(event.key === "Delete" || event.key === "Backspace"){
//        hint.style.opacity = 1;
//        setTimeout(function(){ hint.style.opacity = 0;}, 2000);
//    }
//})//End hint event listener

