var Queue = function(){
  // Use an object with numeric keys to store values
  this._storage = {};
  this._queueSize = 0; // Hint: set an initial value here
};

Queue.prototype.add = function(value){
  this.storage[this.queueSize] = value;
  this.queueSize++;
};
Queue.prototype.remove = function(){
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
};
Queue.prototype.size = function(){
  return this.queueSize;
};
Queue.prototype.getStorage = function() {
  return this.storage;
};
