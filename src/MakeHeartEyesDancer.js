var MakeHeartEyesDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeHeartEyesDancer.prototype = Object.create(MakeDancer.prototype); 
MakeHeartEyesDancer.prototype.constructor = MakeHeartEyesDancer;

MakeHeartEyesDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.fadeTo('slow', 1);
};
