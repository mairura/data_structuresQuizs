//A function that calculates the average of the numbers in a given list
//Empty array should return 0

function find_average(array) {
    // your code here
    let sum;
    let average;
    for(let i = 0; i < array.length; i++) {
      if(array[i] == 0){
        return 0;
      }else if(array[i] == " ") {
        return 1;
      }else{
        sum += array[i];
        average = sum / array.length;
        console.log(average);
      }
    }
  }

  find_average([1,2,3,4]);