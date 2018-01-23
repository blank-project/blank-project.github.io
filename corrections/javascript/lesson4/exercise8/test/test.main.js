describe('sumArray', function() {

  it('should be a function', function() {
    sumArray.should.be.a('function');
  });

  it('should return 20 for the array [20]', function() {
    sumArray([20]).should.be.equal(20);
  });

  it('should return 25 for the array [20, 5]', function() {
    sumArray([20, 5]).should.be.equal(25);
  });

  it('should return 241 for the array [200, 40, 1]', function() {
    sumArray([200, 40, 1).should.be.equal(241);
  });

});

describe('bonus', function() {
  it('should not sum up elements of the table that are not numbers', funciton() {
    sumArray(['olé']).should.be.equal(0);
    sumArray(['true', 20, true, false]).should.be.equal(20);
  });
});
