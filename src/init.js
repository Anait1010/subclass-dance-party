$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //do we have to add new before dancerMakerFunction?
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

//added lineup button click action
  $('.lineUpButton').on('click', function() {
    var top = 400;
    var left = 0;
    for (var i  = 0; i < window.dancers.length; i++) {
      //use call or bind? maybe call?
      window.dancers[i].setPosition(top, left);
      left += 50;
    }
  });
  $('.interactButton').on('click', function() {
    var random1 = Math.floor(Math.random() * (window.dancers.length - 1)) + 1;
    var random2 = Math.floor(Math.random() * (window.dancers.length - 1)) + 1;
    window.dancers[random1].setPosition(350,550);
    window.dancers[random2].setPosition(350,600);
  });
});
