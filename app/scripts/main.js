(function (w, d) {
  //How to retrieve a model from a collection:
  var Todo = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    }
  });

  var TodosCollection = Backbone.Collection.extend({
    model: Todo
  });

  var myTodo = new Todo({
    title: 'Read the whole book', id: 2
  });

  //I pass an array of models to the collection when instantiating.
  var todos = new TodosCollection([myTodo]);
  //I can use the Collection.get() method. It accepts the model id.
  var todo2 = todos.get(2);
  //Since models are objects, they're passed by reference.
  console.log(todo2 === myTodo); // true
})(window, document);
