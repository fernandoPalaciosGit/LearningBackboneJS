(function (w, d) {

  //I'm gona use this collection.
  var tasks = new Backbone.Collection();
  tasks.add([
    {
      id: 1,
      title: 'Try Backbone',
      completed: false
    },
    {
      id: 2,
      title: 'Go to buy some clothes',
      completed: false
    },
    {
      id: 3,
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


  //min / max : Gets the item with min or max value for a property of the model.
  var lastItem = tasks.max(function(model) {
    return model.id
  }).id;
  var firstItem = tasks.min(function(model) {
    return model.id
  }).id;

  console.log('Max: ' + lastItem);
  console.log('Min: ' + firstItem);
  
})(window, document);
