describe('heartEyesDancer', function() {

  var heartEyesDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    heartEyesDancer = new MakeHeartEyesDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    console.log(heartEyesDancer);
    expect(heartEyesDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(heartEyesDancer.$node, 'fadeTo');
    heartEyesDancer.step();
    expect(heartEyesDancer.$node.fadeTo.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(heartEyesDancer, 'step');
      expect(heartEyesDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(heartEyesDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(heartEyesDancer.step.callCount).to.be.equal(2);
    });
  });
});