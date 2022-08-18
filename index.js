import { bubbleSort, selectionSort, insertionSort } from './js_elements/sorting_algorithms.js';
import {randomNum, delay} from './js_elements/utils.js'
export {removeElements, render}
// ---- Slider (element count) ----

let elSlider = document.getElementById("element-slider");
let elOutput = document.getElementById("value");
elOutput.innerHTML = elSlider.value;
document.getElementById("element-slider").oninput = function() {
  elOutput.innerHTML = this.value;
}

// ---- Slider (speed) ----

const speedSlider = document.getElementById("speed-slider");
const speedOutput = document.getElementById("speed");


// ---- Default settings ----

speedSlider.style.display="none"
speedOutput.style.display="none"
const sortBtn = document.getElementById("sort-btn")
sortBtn.style.display="none"

let divs = []

// ---- Column-row layout switch ----

let rows = true
const checkBox = document.getElementById("turn-90-deg")

checkBox.addEventListener("click",function(){
  rows = !rows
  removeElements()
  render(divs)
})

// ---- Generate button (functions) ----

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
    generatedDiv.style.backgroundImage="linear-gradient(to right,#00BFFF,#BD33A4)"
  }
  else{
    arrayElements.style.flexDirection="row"
    generatedDiv.style.height = `${arr[j].val/5}%`
    generatedDiv.style.maxWidth = `20%`
    generatedDiv.style.width = 90/elSlider.value+"%"
    generatedDiv.style.marginRight="1px"
    generatedDiv.style.backgroundImage="linear-gradient(to bottom,#00BFFF,#BD33A4)"
  }
  
}
}
function fillArray(){
for(let i=0;i<elSlider.value;i++){
  const newRandom = randomNum()
  
    const generatedDiv = {htmlEl:`<div id="generated-el@${i}" class="generated-elements"></div>`,
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

// ---- Generate button ----

const generateBtn = document.getElementById("generate-btn")
generateBtn.addEventListener("click", function(){
  clicked=false;
  divs = []
  removeElements()
  fillArray()
  render(divs)
  generateBtn.style.display="none"
  elSlider.style.display="none"
  elOutput.style.display="none"
  sortBtn.style.display="inline-block"
  speedSlider.style.display="inline-block"
  speedOutput.style.display="inline-block"
  
  
  }
)

// ---- Sort button ----
let clicked = false
let sortingEnded = false
document.getElementById("sort-btn").addEventListener('click', function(){
if(!clicked){
  clicked=true
  if(bubbleSortBtn.classList.contains("current")){
    bubbleSort(divs)
  }
  else if(selectionSortBtn.classList.contains("current")){
    selectionSort(divs, rows)
  }
  else if(insertionSortBtn.classList.contains("current")){
    insertionSort(divs, rows)
  }
  else if(mergeSortBtn.classList.contains("current")){
    
  }
  else if(quickSortBtn.classList.contains("current")){
    
  }
  else if(countingSortBtn.classList.contains("current")){
    
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
    case 1: arrayElements.style.alignItems="flex-start" 
    break;
    case 2: arrayElements.style.alignItems="center" 
    break;
    case 3: arrayElements.style.alignItems="flex-end" 
    break; 
  }
})

// ---- Switch between sorting algorithms ----
const sortingList = document.getElementById("sorting-list")
const bubbleSortBtn = document.getElementById("bubble-sort")
const selectionSortBtn = document.getElementById("selection-sort")
const insertionSortBtn = document.getElementById("insertion-sort")
const mergeSortBtn = document.getElementById("merge-sort")
const quickSortBtn = document.getElementById("quick-sort")
const countingSortBtn = document.getElementById("counting-sort")

function deleteCurrent(){
  const listItems = document.getElementsByTagName("li")
  const listCount = sortingList.childElementCount
for(let i=0;i<listCount;i++){
  listItems[i].removeAttribute("class")
}
}
function switchCurrent(button){
    button.addEventListener("click", function(){
    deleteCurrent()
    button.classList.add("current")
    })
}
switchCurrent(bubbleSortBtn)
switchCurrent(selectionSortBtn)
switchCurrent(insertionSortBtn)
switchCurrent(mergeSortBtn)
switchCurrent(quickSortBtn)
switchCurrent(countingSortBtn)


