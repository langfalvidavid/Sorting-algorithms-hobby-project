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
  console.log(generatedDiv)
  generatedDiv.style.width = `${arr[j].val/5}%`
  generatedDiv.style.maxHeight = `20%`
  generatedDiv.style.height = 90/slider.value+"%"
  generatedDiv.style.fontSize = 10/slider.value+"em"
  generatedDiv.style.marginTop="1px"
}
}

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

  function copyArray(from,to){
    for(let i=0;i<from.length;i++){
      to[i]=from[i]
    }

  }

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
        

      if(divs[j].val < divs[j+1].val){
        console.log("swapped")
          current.style.backgroundImage="linear-gradient(to right, green,#303234,green)"
          next.style.backgroundImage="linear-gradient(to right, green,#303234,green)"
          await delay(1000)
          current.style.backgroundImage="linear-gradient(to right,#00BFFF,#9400D3)"
          next.style.backgroundImage="linear-gradient(to right,#00BFFF,#9400D3)"
          let temp = divs[j]
          divs[j]=divs[j+1]
          divs[j+1]=temp
          let tempArr = []
          copyArray(divs, tempArr)
          removeElements()
          copyArray(tempArr, divs)
          console.log(divs)
          tempArr = []
          render(divs)
          
        }
            }
    }
   
})


