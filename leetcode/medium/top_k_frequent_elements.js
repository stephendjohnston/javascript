let topKFrequent = function(nums, k) {
  let elementCount = {};
  let result = [];

  nums.forEach(n => {
    elementCount[n] = elementCount[n] ? elementCount[n] + 1 : 1;
  });

  let elementCountArr = Object.values(elementCount).sort((a, b) => b - a);
  elementCountArr =  elementCountArr.slice(0, k);

  Object.keys(elementCount).forEach(num => {
    if (elementCountArr.includes(elementCount[num])) {
      result.push(Number(num));
    }
  });

  return result;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));