

  //storage to store the values A and B
  let storage = [];
  // all styles to make it look cool

    //function to process units to LCM values
  function check(a, b){
      storage.push(Number(document.getElementById('word').value));
      //storage includes values
  storage.push(Number(document.getElementById('letters').value));
//check if user input is viable for processing
  if (Math.round(storage[0]) !== storage[0] || Math.round(storage[1]) !== storage[1]){

          storage.splice(0, storage.length);
      return;
    }
    else if(isNaN( storage[0]) === true || isNaN(storage[1]) === true){

          storage.splice(0, storage.length);
      return;
    }
else if (storage[0] <= 1 || storage[1] <= 1){

          storage.splice(0, storage.length);
      return;
}
else{
  //if a > b then storage value[0] (aka value A) and vice versa
    while(a !== b){
      if(a < b){
        a += storage[0];

      }
    else if(b < a){
        b += storage[1];
    }
     
    }
    //remove A  and  B values from storage
    storage.splice(0, storage.length);
    // show the LCM value
console.log(a)
  }
  }
  //visual effect (once user processes values it's not shown again)
let show = false;

