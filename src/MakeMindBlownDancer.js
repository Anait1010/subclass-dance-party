var MakeMindBlownDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeMindBlownDancer.prototype = Object.create(MakeDancer.prototype); 
MakeMindBlownDancer.prototype.constructor = MakeMindBlownDancer;

MakeMindBlownDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.fadeToggle();
};
