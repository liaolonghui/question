var longestConsecutive = function(nums) {
  if(nums.length == 0) return 0;
  nums.sort((a,b)=>a-b);
  for(let i=0;i<nums.length;i++){
      if(nums[i] == nums[i+1]){
          nums.splice(i,1);
          i--;
      }
  }
  let begin = 0;
  let length = 0;
  let now_length = 1;
  for(let i=1;i<nums.length;i++){
      if(nums[i] == nums[begin] + i - begin){
          now_length++;
      } else {
          length = length > now_length ? length : now_length;
          begin = i;
          //i += 1;
          now_length = 1;
      }
  }
  length = length > now_length ? length : now_length;
  return length;
};