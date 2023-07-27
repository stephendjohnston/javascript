const productExceptSelf = function (nums) {
  let products = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    products[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    products[i] *= postfix;
  }

  return products;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
