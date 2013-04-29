var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size=0; // Hint: set an initial value here

  // Implement the methods below
  var queue = {
    size: size,
    storage: storage
  };

  queue.add = function(value){
    storage[size] = value;
    size++;
  };

  queue.remove = function(){
    if (size > 0){
      delete storage[0];
      size--;
      for (var key in storage){
        if(storage.hasOwnProperty(key)){
          storage[key-1] = storage[key];
        }
      }
      delete storage[size];
    }
  };

  queue.size = function(){
    return size;
  };

  return queue;
};
