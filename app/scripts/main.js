(function (w, d) {

  //I'm gona use this collection.
  var tasks = new Backbone.Collection();
  tasks.add([
    {
      title: 'Try Backbone',
      completed: false
    },
    {
      title: 'Go to buy some clothes',
      completed: false
    },
    {
      title: 'Learn English',
      completed: false
    }
  ]);


  //foreach is for iterate over collections.

  //It should log a list of al my tasks!!
  tasks.forEach(function(model) {
    console.log('Task title: ' + model.get('title'));
  });

  //sortBy(): Sort a collection on a attribute.


  var sortedAlphabetically = tasks.sortBy(function(todo) {
    return todo.get("title").toLowerCase();
  });

  console.log("------ Collection should be sorted by alphabet now. ----");

  sortedAlphabetically.forEach(function(model) {
    console.log(model.get('title'));
  });

  //map: Iterates over a collection, and maps each value through a transformation function.
  var count = 1;
  console.log(tasks.map(function(model){
    return count++ + ". " + model.get('title');
  }));


})(window, document);
