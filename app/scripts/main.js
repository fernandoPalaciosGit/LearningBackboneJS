(function (w, d) {

  //On() and Off() added callbacks directly to an object.
  //listenTo() tells an object to listen for events on another object. It allows the listener to track the events for which it was listening.


  var obj1 = _.extend({}, Backbone.Events);
  var obj2 = _.extend({}, Backbone.Events);
  var obj3 = _.extend({}, Backbone.Events);

  obj1.listenTo(obj2, 'customEvent1', function() {
    console.log('customEvent1 in obj2');
  });

  obj2.trigger('customEvent1');

})(window, document);
