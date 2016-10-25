(function (w, d) {

  var TasksList = Backbone.Collection.extend({
    filterById: function(ids){
      return this.filter(
        function(c) {
          return _.contains(ids, c.id);
        })
    }
  });


  //I'm gona use this collection.
  var tasks = new TasksList();
  tasks.add([
    {
      id: 1,
      title: 'Try Backbone',
      completed: true
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

  //Chainable API.

  //chain() mehtod allows to chain calls to the Underscore methods on the collections.
  //chain() method returns an object with all Underscore functions as a method.
  //chain ends calling to value(), and it returns the final array of values with the Underscore functions 'applied'.

  //This statement returns a wrapper around collections model
  var filteredTasks = tasks.chain();
  console.log(filteredTasks);

  //Like this, I'm filtering to get only the task(s) whose completed is true, but I'm still getting the wrapper object (nor an array of models), cause I'm not appliying the value() function.
  console.log(filteredTasks.filter(function(task) {
    return task.get('completed') == true;
  }));

  console.log('Same code than below. Unique difference is that I close the chain using value(), so I get an array of models whose completed property is true.');
  console.log(filteredTasks.filter(function(task) {
    return task.get('completed') == true;
  }).value());

  //This should return an array of titles of the tasks whose completed property is true!!
  console.log(filteredTasks
    .filter(function(task) {
      return task.get('completed') == true;
    })
    .map(function(task) {
      return task.get('title');
    }).value());


  //We can add som of the Backbone-specific methods. Such as add, set, and remove methods.
  //It's not working for me, right now :/

  tasks
    .add({
      title: 'New task 1',
      completed: false
    })
    .add({
      title: 'New Task 2'
    });

  console.log(tasks.models);
  debugger;

})(window, document);
