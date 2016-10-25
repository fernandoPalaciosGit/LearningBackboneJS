(function (w, d) {

  var Task = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    }
  });

  var TasksList = Backbone.Collection.extend({
    model: Task,
    url: '/tasks'
  });

  //Asks the models set.
  var tasks = new TasksList();
  tasks.fetch();

  //Asks for the model with the id 2
  var task2 = tasks.get(2);
  task2.set ('title', 'New task to do!');
  task2.save(); //Sends an HTTP PUT Request to /tasks/2

  //This statement sends a HTTP POST Request to /tasks, and adds to the collection
  tasks.create({
    title: 'New task to do 2!'
  });

})(window, document);
