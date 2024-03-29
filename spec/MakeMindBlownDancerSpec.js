describe('makeMindBlownDancer', function() {

  var makeMindBlownDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    makeMindBlownDancer = new MakeMindBlownDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    console.log(makeMindBlownDancer);
    expect(makeMindBlownDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node move back and forth', function() {
    sinon.spy(makeMindBlownDancer.$node, 'animate');
    makeMindBlownDancer.step();
    expect(makeMindBlownDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(makeMindBlownDancer, 'step');
      expect(makeMindBlownDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(makeMindBlownDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(makeMindBlownDancer.step.callCount).to.be.equal(2);
    });
  });
});
