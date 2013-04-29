
var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size=0; // Hint: set an initial value here

  // Implement the methods below
  var queue = {};

  queue.add = function(value){
    storage[size] = value;
    size++;
  };

  queue.remove = function(){
    if (size > 0){
      var removedItem = storage[0];
      delete storage[0];
      size--;
      for (var key in storage){
        if(storage.hasOwnProperty(key)){
          storage[key-1] = storage[key];
        }
      }
      delete storage[size];
      return removedItem;
    }
  };

  queue.size = function(){
    return size;
  };
  queue.getStorage = function(){
    return storage;
  };

  return queue;
};