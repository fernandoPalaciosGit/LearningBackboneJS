(function (w, d) {
  var customObj = {};
// Mixin
  _.extend(customObj, Backbone.Events);

  //You can add a custom event
  customObj.on('myCustomEvent', function(msg){
    console.log('We triggered ' + msg);
  });

  //You can trigger the custom event
  customObj.trigger('myCustomEvent', 'Message');

})(window, document);
