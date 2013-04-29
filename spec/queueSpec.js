describe("queue", function() {
  var queue;

  // Before each test runs, create a new Queue
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });

  // Any queue implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(queue.add).to.be.a('function');
    expect(queue.remove).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#size()', function() {
    it('should return the size of an empty queue',function(){
      expect(queue.size()).to.equal(0);
    });
  });

  describe('#add()', function() {
    it('should take one argument', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      expect(queue.add.length).to.equal(1);
    });
    it('should increment the size',function(){
      queue.add('a');
      expect(queue.size).to.equal(1);
    });
    it('should accept different data types',function(){
      queue.add({a:[1,2,3],b:'b'});
      expect(queue.storage[0]).to.be.a('object');
      expect(queue.storage[0]['b']).to.eql('b');
    });
    describe('Adding to the queue',function(){
      beforeEach(function(){
        queue.add('a');
        queue.add('b');
        queue.add('c');
      });
      it('should add multiple items to the queue',function(){
        expect(queue.size).to.equal(3);
      });
      it('should increment keys sequentially',function(){
        expect(queue.storage[3]).to.be.a('undefined');
        expect(queue.storage[2]).to.equal('c');
      });
    });
  });
  describe('#remove()',function(){
    beforeEach(function(){
      queue.add('a');
      queue.add('b');
      queue.add('c');
      queue.add('d');
    });
    it('should remove an element from the queue',function(){
      expect(queue.size()).to.equal(4);
      queue.remove();
      expect(queue.size()).to.equal(3);
    });
    it('should rekey the remaining the elements',function(){
      queue.remove();
      expect(queue.storage[0]).to.equal('b');
      expect(queue.storage[1]).to.equal('c');
      expect(queue.storage[2]).to.equal('d');
      expect(queue.storage[3]).to.equal(undefined);
    });
    it('should not remove an element from an empty queue',function(){
      for (var i = 0; i < 5; i++){
        queue.remove();
      }
      expect(queue.size()).to.equal(0);
    });
  });

  // Hey! Add more tests here to test the functionality of queue
});
