var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var stackSize = 0; // Hint: set an initial value here
  var stack = {
    stackSize: stackSize,
    storage: storage
  };
  _.extend(stack,stackMethods);
  return stack;
  // Implement the methods below
};

var stackMethods = {
  add : function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },
  remove : function(){
    if (this.stackSize > 0){
    this.stackSize--;
    var returnObject = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return returnObject;
    }
  },
  size : function(){
    return this.stackSize;
  },
  getStorage : function(){
    return this.storage;
  }
};
// Hey! Copy your code from src/functional/stack.js and paste it here