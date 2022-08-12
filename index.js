import {randomNum, delay} from './js_elements/utils.js'
// ---- Slider (element count) ----

let elSlider = document.getElementById("element-slider");
let elOutput = document.getElementById("value");
elOutput.innerHTML = elSlider.value;
document.getElementById("element-slider").oninput = function() {
  elOutput.innerHTML = this.value;
}

// ---- Slider (speed) ----

let speedSlider = document.getElementById("speed-slider");
let speedOutput = document.getElementById("speed");
speedOutput.innerHTML = speedSlider.value;
document.getElementById("speed-slider").oninput = function() {
  speedOutput.innerHTML = this.value;
}
speedSlider.style.display="none"
speedOutput.style.display="none"
const sortBtn = document.getElementById("sort-btn")
sortBtn.style.display="none"


let divs = []
let rows = true
// ---- Generate button ----

const arrayElements = document.getElementById("array-el")

function render(arr){
for(let j=0;j<arr.length;j++){
  arrayElements.insertAdjacentHTML("beforeend", arr[j].htmlEl)
  const generatedDiv = document.getElementById("generated-el@" + arr[j].id)
  if(rows){
    arrayElements.style.flexDirection="column"
    generatedDiv.style.width = `${arr[j].val/5}%`
    generatedDiv.style.maxHeight = `20%`
    generatedDiv.style.height = 90/elSlider.value+"%"
    generatedDiv.style.fontSize = 10/elSlider.value+"rem"
    generatedDiv.style.marginTop="1px"
    generatedDiv.style.position="relative"
  }
  else{
    arrayElements.style.flexDirection="row"
    generatedDiv.style.height = `${arr[j].val/5}%`
    generatedDiv.style.maxWidth = `20%`
    generatedDiv.style.width = 90/elSlider.value+"%"
    generatedDiv.style.fontSize = 10/elSlider.value+"rem"
    generatedDiv.style.marginRight="1px"
    generatedDiv.style.position="relative"
  }
  
}
}

function fillArray(){
for(let i=0;i<elSlider.value;i++){
  const newRandom = randomNum()
  
    const generatedDiv = {htmlEl:`<div id="generated-el@${i}" class="generated-elements"><p>${newRandom}</p></div>`,
                          val: newRandom,
                          id: i}
    divs.push(generatedDiv)
}}
function removeElements(){
  const arrayElCount = arrayElements.childElementCount
  for(let k=0;k<arrayElCount;k++){
    const deleteEl = document.getElementById("generated-el@" + k)
    deleteEl.remove()
  }}

  function copyArray(from,to){
    for(let i=0;i<from.length;i++){
      to[i]=from[i]
    }

  }
const generateBtn = document.getElementById("generate-btn")
generateBtn.addEventListener("click", function(){
  divs = []
  removeElements()
  fillArray()
  render(divs)
  generateBtn.style.display="none"
  sortBtn.style.display="inline-block"
  elSlider.style.display="inline-block"
  elOutput.style.display="inline-block"
  
  }
)

// ---- Sort button ----

document.getElementById("sort-btn").addEventListener('click', async function(){

    for(let i = 0; i < divs.length; i++){
      for(let j = 0; j < ( divs.length - i -1 ); j++){
        const current = document.getElementById("generated-el@" + divs[j].id)
        const next = document.getElementById("generated-el@" + (divs[j+1].id))
          current.style.backgroundImage="linear-gradient(to right, green,#303234,green)"
          next.style.backgroundImage="linear-gradient(to right, green,#303234,green)"
          await delay(10)
          current.style.backgroundImage="linear-gradient(to right,#00BFFF,#9400D3)"
          next.style.backgroundImage="linear-gradient(to right,#00BFFF,#9400D3)"
            if(divs[j].val < divs[j+1].val){
                let temp = divs[j]
                divs[j]=divs[j+1]
                divs[j+1]=temp
                removeElements()
                render(divs)
                
              }
            }
    }
   
})

// ---- Rotate button ----

let mode=1;

document.getElementById("rotate").addEventListener("click", function(){
  mode++
  mode > 3 ? mode = 1: 
  console.log(mode)
  switch (mode){
    case 1: arrayElements.style.alignItems="flex-end" 
    break;
    case 2: arrayElements.style.alignItems="center" 
    break;
    case 3: arrayElements.style.alignItems="flex-start" 
    break;
  } 

})


