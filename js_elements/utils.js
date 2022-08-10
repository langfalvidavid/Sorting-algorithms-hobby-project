function delay(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("timeout");
        resolve();
      }, time);
    });
  }

 function randomNum () {
    return Math.floor(Math.random()*500 + 1)
  }

  

 export {delay, randomNum} 