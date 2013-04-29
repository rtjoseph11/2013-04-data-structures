describe("stack", function() {
  var stack;

  // Before each test runs, create a new Stack
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });

  // Any stack implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).to.be.a('function');
    expect(stack.remove).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });
  //Organize your tests with nested describe() statements
  //Use '#methodName()' to denote tests that focus on a certain method
  describe('#add()', function() {
    it('should take one argument', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      expect(stack.add.length).to.equal(1);
    });
    it('should add an item to the stack when calling add', function(){
      stack.add('a');
      expect(stack.size()).to.equal(1);
      expect(stack.storage[1]).to.equal('a');
    });
    it('should add two items to the stack', function() {
      stack.add('b');
      stack.add('a');
      expect(stack.size()).to.equal(2);
    });
    it('should add non-primitive objects to the stack',function(){
      stack.add({key: 'value', array: [1,2,3]});
      expect(stack.storage[1]).to.be.a('object');
      expect(stack.storage[1]['array']).to.eql([1,2,3]);
    });
  });
  describe('#remove()', function(){
    beforeEach(function(){
      stack.add('a');
      stack.add('b');
      stack.add('c');
    });
    it('should take no arguments', function(){
      expect(stack.remove.length).to.equal(0);
    });
    it('should remove the last item entered', function(){
      stack.remove();
      expect(stack.storage).to.eql({1: 'a', 2: 'b'});
      stack.remove();
      expect(stack.storage).to.eql({1: 'a'});
    });
    it('should decrease the stack size', function(){
      expect(stack.size()).to.equal(3);
      stack.remove();
      expect(stack.size()).equal(2);
    });
    it('should not remove an item from an empty stack', function(){
      for (var i = 0; i < 4; i++){
        stack.remove();
      }
      expect(stack.size()).to.equal(0);
    });
  });
  describe('#size()', function(){
    it('should return a stack size of 0 for an empty stack', function(){
      expect(stack.size()).to.equal(0);
    });
  });

  // Hey! Add more tests here to test the functionality of stack
});
