(function (w, d) {

  //Collection.fetch gets a set of models from the server in a JSON format array to the URL set in the collection URL property.

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
  var tasks = new TasksList();
  tasks.fetch();
})(window, document);
