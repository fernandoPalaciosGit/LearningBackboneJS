(function (w, d) {
  var customObject = {};

  //We can use a "all" event, for listening any event that occurs in on the object.
  function MyHandler(evt) {
    //This handler will be executed three times, because 3 events were fired!
    console.log('Event: ');
  }
  _.extend(customObject, Backbone.Events);

  //Event listeners
  customObject.on("click", MyHandler);
  customObject.on("tap", MyHandler);
  customObject.on("over", MyHandler);


  $('#todoItems').on('click', function(evt) {
    // We can trigger multiple events
    customObject.trigger("click tap over", evt);
  });





})(window, document);
