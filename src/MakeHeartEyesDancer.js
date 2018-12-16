var MakeHeartEyesDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="heartEyesDancer"></span>');
  this.setPosition(top, left);
};

MakeHeartEyesDancer.prototype = Object.create(MakeDancer.prototype); 
MakeHeartEyesDancer.prototype.constructor = MakeHeartEyesDancer;

MakeHeartEyesDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({ width: "50%" }, 7000 );
  this.$node.animate({ width: "-50%" }, 7000 );
};
