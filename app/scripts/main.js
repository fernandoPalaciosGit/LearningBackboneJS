(function (w, d) {
  var customObject = {};

  //If We have a lof of custom events Within our application, We can add namespaced custom events.
  function MyHandler(msg) {
    console.log('Handler: ' + msg);
  }

  _.extend(customObject, Backbone.Events);

  customObject.on('customEvent:click', MyHandler);
  customObject.on('customEvent:over', MyHandler);


  $('#todoItems').on('click', function() {
      //Trigger custom events on click to a DOM Element
    customObject.trigger('customEvent:click', 'click!!');
  });

  $('#todoItems2').on('mouseover', function() {
    //Trigger custom events on click to a DOM Element
    customObject.trigger('customEvent:over', 'Hover!!');
  });

  //This trigger does not trigger anything, since there isn't any listener listening for it.
  customObject.trigger('customEvent', 'Message!!');


})(window, document);
