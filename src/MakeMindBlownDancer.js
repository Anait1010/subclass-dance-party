var MakeMindBlownDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="mindBlownDancer"></span>');
  this.setPosition(top, left);
};

MakeMindBlownDancer.prototype = Object.create(MakeDancer.prototype); 
MakeMindBlownDancer.prototype.constructor = MakeMindBlownDancer;

MakeMindBlownDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.fadeToggle();
};
