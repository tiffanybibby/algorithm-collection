function findMedian(arr) {
  // Write your code here
  let len = arr.length;
  let sorted = arr.sort((a,b)=>{return a-b});
  let median;
  if(len % 2 == 0){
      var elem1 =  arr[parseInt(len/2)];
      var elem2 = arr[(parseInt(len/2)) + 1]
      median = parseInt((elem1+elem2) / 2);
  }
  else{
      median = sorted[parseInt(len/2)]
  }
  return median
}

// console.log(findMedian([0, -1, -2, -3, 4, 5, 6, 7, 2]))