var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var queueSize=0; // Hint: set an initial value here

  // Implement the methods below
  var queue = {};
  queue.queueSize = queueSize;
  queue.storage = storage;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  add: function(value){
    this.storage[this.queueSize] = value;
    this.queueSize++;
  },
  remove: function(){
    if (this.queueSize > 0){
      var storage = this.storage;
      var removedItem = storage[0];
      delete storage[0];
      this.queueSize--;
      for (var key in storage){
        if(storage.hasOwnProperty(key)){
          storage[key-1] = storage[key];
        }
      }
      delete storage[this.queueSize];
      return removedItem;
    }
  },
  size: function(){
    return this.queueSize;
  },
  getStorage : function() {
    return this.storage;
  }
};
// Hey! Copy your code from src/functional/queue.js and paste it here