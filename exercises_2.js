var currySum = function (num_nums) {
  var nums = [];
  var _curriedSum = function(num) {
    nums.push(num);
    if (nums.length === num_nums) {
      return nums.reduce(function(sum, el) { return sum + el });
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};

var sum = currySum(4);
console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(num_args) {
  var args = [];
  var func = this;
  var _curriedFunc = function(arg) {
    args.push(arg);
    if (args.length === num_args) {
      return func.apply(undefined, args);
    } else {
      return _curriedFunc;
    }
  };
  return _curriedFunc;
};

var sum = function () {
  var arg_arr = Array.prototype.slice.call(arguments);
  return arg_arr.reduce( function(sum, el) { return sum + el; } );
}

var func = sum.curry(4);
console.log(func(5)(30)(20)(1)); // => 56
