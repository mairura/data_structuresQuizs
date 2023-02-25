var runningSum = function (nums) {
  //Initialise an empty array to store our results
  let sumNums = [];
  //The final array length should be same as the initial array length
  sumNums.length = nums.length;
  //The first element would always remain the same since there is no previous number to add to it
  sumNums[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sumNums[i] = nums[i] + sumNums[i - 1];
  }
  return sumNums;
  console.log("Returned result:", sumNums);
};
runningSum([5]);
