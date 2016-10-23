(function (w, d) {
  //Collections:
  var Todo = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    }
  });
  var TodosCollection = Backbone.Collection.extend({
    model: Todo
  });

  var task1 = new Todo({
    title: 'Learn Backbonejs', id: 1
  });
  console.log(task1.attributes);

  var todosList = new TodosCollection([task1]);

  //For now, obviously, there's 1 task (model) added.
  console.log('Tasks added: ' + todosList.length);
})(window, document);
