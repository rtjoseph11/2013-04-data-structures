var Stack = function(){
  // Use an object with numeric keys to store values
  this.storage = {};
  this.stackSize = 0; // Hint: set an initial value here
  // Implement the methods below
};

Stack.prototype.add = function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;
};
Stack.prototype.remove = function(){
    if (this.stackSize > 0){
    this.stackSize--;
    var returnObject = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return returnObject;
    }
};
Stack.prototype.size = function(){
    return this.stackSize;
};
Stack.prototype.getStorage = function(){
    return this.storage;
};