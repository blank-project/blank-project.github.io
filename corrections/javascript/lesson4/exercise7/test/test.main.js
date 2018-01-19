describe('anneeBissextile', function() {

  it('should be a function', function() {
    anneeBissextile.should.be.a('function');
  });

  it('should return true for 2000', function() {
    anneeBissextile(2000).should.be.true;
  });

  it('should return true for 2004', function() {
    anneeBissextile(2004).should.be.true;
  });

  it('should return true for 2001', function() {
    anneeBissextile(2001).should.be.false;
  });

});

describe('nombreDeJour', function() {

  it('should be a function', function() {
    nombreDeJour.should.be.a('function');
  });

  it('should return 31 for January', function() {
    nombreDeJour(01, 2001).should.be.equal(31);
  });

  it('should return 28 for February 2001', function() {
    nombreDeJour(02, 2001).should.be.equal(28);
  });

  it('should return 29 for February 2000', function() {
    nombreDeJour(02, 2000).should.be.equal(29);
  });

  it('should return 31 for March', function() {
    nombreDeJour(03, 2001).should.be.equal(31);
  });

  it('should return 30 for April', function() {
    nombreDeJour(04, 2001).should.be.equal(30);
  });

  it('should return 31 for May', function() {
    nombreDeJour(05, 2001).should.be.equal(31);
  });

  it('should return 30 for June', function() {
    nombreDeJour(06, 2001).should.be.equal(30);
  });

  it('should return 31 for July', function() {
    nombreDeJour(07, 2001).should.be.equal(31);
  });

  it('should return 31 for August', function() {
    nombreDeJour(08, 2001).should.be.equal(31);
  });

  it('should return 30 for September', function() {
    nombreDeJour(09, 2001).should.be.equal(30);
  });

  it('should return 31 for October', function() {
    nombreDeJour(10, 2001).should.be.equal(31);
  });

  it('should return 30 for November', function() {
    nombreDeJour(04, 2001).should.be.equal(30);
  });

  it('should return 31 for December', function() {
    nombreDeJour(12, 2001).should.be.equal(31);
  });

});
