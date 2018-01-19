describe('anneeBissextile', function() {
  it('should be defined', function() {
    should.exist(anneeBissextile);
  });

  it('should be a function', function() {
    anneeBissextile.should.be.a('function');
  });

  it('should return true for 2000', function() {
    anneeBissextile(2000).should.be.true;
  });

});
