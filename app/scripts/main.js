(function (w, d) {
  //I can re-set an entire collection at once by passing a models array!!

  var task = new Backbone.Model({
    title: 'My first task!'
  });

  var tasks = new Backbone.Collection([task])
    .on('reset', function(todos, options) {
      console.log(options.previousModels);
      console.log([task]);
      console.log(options.previousModels[0] === task); // true
      debugger;
    });

  console.log('I am gonna reset the task model');
  tasks.reset([]);


})(window, document);
