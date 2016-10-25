(function (w, d) {
  //foreach is for iterate over collections.
  var tasks = new Backbone.Collection();
  tasks.add([
    {
      title: 'Go to buy some clothes',
      completed: false
    },
    {
      title: 'Learn English',
      completed: false
    },
    {
      title: 'Try Backbone',
      completed: false
    }
  ]);

  //It should log a list of al my tasks!!
  tasks.forEach(function(model) {
    console.log('Task title: ' + model.get('title'));
  });

})(window, document);
