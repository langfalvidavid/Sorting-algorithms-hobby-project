import {randomNum, delay} from './js_elements/utils.js'
// ---- Slider ----

let slider = document.getElementById("element-slider");
let output = document.getElementById("value");
output.innerHTML = slider.value;
document.getElementById("element-slider").oninput = function() {
  output.innerHTML = this.value;
}



let divs = []

// ---- Generate button ----

const arrayElements = document.getElementById("array-el")

function render(arr){
for(let j=0;j<arr.length;j++){
  arrayElements.insertAdjacentHTML("beforeend", arr[j].htmlEl)
  const generatedDiv = document.getElementById("generated-el-" + j)
  generatedDiv.style.width = `${arr[j].val/5}%`
  generatedDiv.style.maxHeight = `20%`
  generatedDiv.style.height = 90/slider.value+"%"
  generatedDiv.style.fontSize = 10/slider.value+"em"
  generatedDiv.style.marginTop="1px"
}  }

function fillArray(){
for(let i=0;i<slider.value;i++){
  const newRandom = randomNum()
  
    const generatedDiv = {htmlEl:`<div id="generated-el-${i}" class="generated-elements">${newRandom}</div>`,
                          val: newRandom}
    divs.push(generatedDiv)
}}
function removeElements(){
  const arrayElCount = arrayElements.childElementCount
  for(let k=0;k<arrayElCount;k++){
    const deleteEl = document.getElementById("generated-el-" + k)
    deleteEl.remove()
  }}

document.getElementById("generate-btn").addEventListener("click", function(){
  divs = []
  removeElements()
  fillArray()
  render(divs)
  console.log(divs)
  }
)

// ---- Sort button ----

document.getElementById("sort-btn").addEventListener('click', async function(){

    for(let i = 0; i < divs.length; i++){
      for(let j = 0; j < ( divs.length - i -1 ); j++){
        const current = document.getElementById("generated-el-" + j)
        const next = document.getElementById("generated-el-" + (j+1))
        

      if(Number(current.innerText) < Number(next.innerText)){
          //current.before(next)
          next.after(current)
          console.log(current.innerText)
          console.log(next.innerText)
        }
        await delay(50)
      }
    }
   
})


