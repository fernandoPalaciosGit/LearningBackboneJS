(function (w, d) {

  //The set() method of the Collections can be used for updating in a smart way the models.
  //It means:
  // If I use this method passing an array of models:
  //      The properties of the models that are present in the collection, are merged.
  //      If a model is not in the collection, it will be added
  //      If a model is in the collection, but is not in the list, it will be removed from the collection

  // Define a model of type task with title void, and completed false
  var Task = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    }
  });

// Create five tasks
  var task1 = new Task({
    title: 'Go to the store',
    completed: false
  });

  var task2 = new Task({
    title: 'Go to the gym',
    completed: true
  });

  var task3 = new Task({
    title: 'Homework',
    completed: false
  });

// Create a collection using our models
  var tasksList = new Backbone.Collection([task1, task2, task3]);

  var task4 = new Task({
    title: 'Buy oranges',
    completed: false
  });

  tasksList.on('add', function(model) {
    console.log('task with title: ' + model.get('title') + ' was added');
  });

  tasksList.on('remove', function(model) {
    console.log('task with title: ' + model.get('title') + ' was removed');
  });


  tasksList.on('change', function(model) {
    console.log('task with title: ' + model.get('title') + ' was changed');
  });


  task1.set({
    title: 'New title task1'
  });

  task2.set({
    title: 'New title task2'
  });

// Update the collection
  tasksList.set([task1,task2,task4]);

  //This last statement, will fire:
    //Add for: task4.
    //Change for task1 and task2
    //Removed for task3

})(window, document);
