(function (w, d) {
  var customObject = {};

  //We can use a "all" event, for listening any event that occurs in on the object.
  function MyHandler(evt) {
    console.log('Event: ' + evt);
  }
  _.extend(customObject, Backbone.Events);

  customObject.on('all', MyHandler);


  $('#todoItems').on('click', function() {
      //Trigger custom events on click to a DOM Element
    customObject.trigger('customEvent:click', 'click!!');
  });

  $('#todoItems2').on('mouseover', function() {
    //Trigger custom events on click to a DOM Element
    customObject.trigger('customEvent:over', 'Hover!!');
  });

  //This time, We'll receive this event, cause We are listening ALL events over customObject
  customObject.trigger('customEvent', 'Message!!');


})(window, document);
