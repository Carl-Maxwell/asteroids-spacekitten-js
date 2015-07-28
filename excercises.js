var sum = function () {
  var arg_arr = Array.prototype.slice.call(arguments);
  return arg_arr.reduce( function(sum, el) { return sum + el; } );
}

Function.prototype.myBind = function (obj) {
  var arg_arr = Array.prototype.slice.call(arguments, 1);
  var func = this;
  return function () {
    if (arg_arr.length == 0) {
      arg_arr = Array.prototype.slice.call(arguments);
    }
    func.apply(obj, arg_arr);
  }
}

function Cat(name) {
  this.name = name;
};

Cat.prototype.says = function (sound) {
  console.log(this.name + " says " + sound + "!");
}

markov = new Cat("Markov");
breakfast = new Cat("Breakfast");

markov.says("meow");
// Markov says meow!

markov.says.myBind(breakfast, "meow")();
// Breakfast says meow!

markov.says.myBind(breakfast)("meow");
// Breakfast says meow!

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow");
// Breakfast says meow!
