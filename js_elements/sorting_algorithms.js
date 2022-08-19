import { delay } from "./utils.js"
import {removeElements, render} from "../index.js"

const sortBtn = document.getElementById("sort-btn")
const speedSlider = document.getElementById("speed-slider")
const speedOutput = document.getElementById("speed");
const generateBtn = document.getElementById("generate-btn")
let elSlider = document.getElementById("element-slider");
let elOutput = document.getElementById("value");

function navBarDisplay(){
    sortBtn.style.display="none"
    speedSlider.style.display="none"
    speedOutput.style.display="none"
    generateBtn.style.display="inline-block"
    elSlider.style.display="inline-block"
    elOutput.style.display="inline-block"
}

// ---- Bubble sort ----

async function bubbleSort(arr){
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < ( arr.length - i -1 ); j++){
        const current = document.getElementById("generated-el@" + arr[j].id)
        const next = document.getElementById("generated-el@" + (arr[j+1].id))
        current.style.backgroundImage="linear-gradient(to right, green,#303234,green)"
        next.style.backgroundImage="linear-gradient(to right, green,#303234,green)"
        await delay(speedSlider.value)
        current.style.backgroundImage="linear-gradient(to right,#00BFFF,#9400D3)"
        next.style.backgroundImage="linear-gradient(to right,#00BFFF,#9400D3)"
        removeElements()
              render(arr)
          if(arr[j].val < arr[j+1].val){
              let temp = arr[j]
              arr[j]=arr[j+1]
              arr[j+1]=temp
            }
          }
  }
  navBarDisplay()
}

// ---- Selection sort ----

async function selectionSort(arr) { 
  let n = arr.length;
      
  for(let i = 0; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for(let j = i+1; j < n; j++){
        const current = document.getElementById("generated-el@" + arr[min].id)
        const next = document.getElementById("generated-el@" + (arr[j].id))
          current.style.backgroundImage="linear-gradient(to right, orange,#303234,orange)"
          next.style.backgroundImage="linear-gradient(to right, green,#303234,green)"
          await delay(speedSlider.value)
          current.style.backgroundImage="linear-gradient(to right,#00BFFF,#9400D3)"
          next.style.backgroundImage="linear-gradient(to right,#00BFFF,#9400D3)"
        removeElements()
              render(arr)
          if(arr[j].val > arr[min].val) {
              min=j; 
          }
       }
       if (min != i) {
           // Swapping the elements
           let tmp = arr[i]; 
           arr[i] = arr[min];
           arr[min] = tmp;      
      }
  }
  console.log(arr)
  navBarDisplay()
}

// ---- Insertion sort ----

async function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j].val > currentValue.val; j--) {
      const current = document.getElementById("generated-el@" + arr[j].id)
    current.style.backgroundImage="linear-gradient(to right, green,#303234,green)"
    await delay(speedSlider.value)
    current.style.backgroundImage="linear-gradient(to right, green,#303234,green)"
    
      arr[j + 1] = arr[j]
      
    }
    
    arr[j + 1] = currentValue
    removeElements()
    render(arr)
  }
  console.log(arr)
  
  navBarDisplay()
}

// ---- Merge sort ----

function mergeArrays(leftArray, rightArray) {
  let ary = []
  while (leftArray.length && rightArray.length) {
      if (leftArray[0] < rightArray[0]) {
          ary.push(leftArray.shift())  
      } else {
          ary.push(rightArray.shift())
      }
  }
  return [ ...ary, ...leftArray, ...rightArray ]
}
function mergeSort(arr) {
  const midle_index = arr.length / 2
  if(arr.length < 2){
    return arr
  }
 
  const leftArray = arr.splice(0, midle_index)
  return mergeArrays(mergeSort(leftArray),mergeSort(arr))
}

export {bubbleSort, selectionSort, insertionSort, mergeSort}