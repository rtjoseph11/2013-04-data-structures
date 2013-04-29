var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {
    storage: storage,
    size: size
  };

  stack.add = function(value){
    size++;
    storage[size] = value;
  };

  stack.remove = function(){
    if (size > 0){
    delete storage[size];
    size--;
    }
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
