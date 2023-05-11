Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(int => {
    return !values_list.includes(int);
  });
}

const l = new Array;

let integer_list =  [1, 1, 2 ,3 ,1 ,2 ,3 ,4]
let values_list = [1, 3]
console.log(l.remove_(integer_list, values_list)); // [2, 2, 4]