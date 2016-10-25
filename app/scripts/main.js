(function (w, d) {
  var counter = 0;
  //Backbone supports once(), that will ensure that callback only fires one time when the notification arrives. You can use once instead of having to unbind object manually

// I define an object with two props
  var TodoCounter = {
    prop1: 0,
    prop2: 0
  };
// Mix in Backbone Events
  _.extend(TodoCounter, Backbone.Events);

// Increment counterA, triggering an event
  var add1 = function(){
    TodoCounter.prop1 += 1;

    console.log(TodoCounter);
    debugger;
    //This trigger won't change the properties values!!
    TodoCounter.trigger('event');
  };

// Increment counterB
  var add2 = function(){
    TodoCounter.prop2 += 1;
  };

  TodoCounter.once('event', add1);
  TodoCounter.once('event', add2);

  $('#todoItems').on('click', function() {
    // Trigger the event for the first time
    TodoCounter.trigger('event');
  });

})(window, document);
