(function (w, d) {
  var counter = 0;
  //How to retrieve a model from a collection:
  var Todo = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    }
  });

  var TodosCollection = new Backbone.Collection();

// I bind a change event when the title property changes ¿in any model of the collection?
  TodosCollection.on('change:title', function(model) {
    //
    console.log('I catched the event. Models been changed  to ' + model.get('title'));
  });

  TodosCollection.add([
    {
      title: 'go to Jamaica.',
      completed: false, id: 3
    }
  ]);

  console.log('Before changing the model title name, it has the value: ' + TodosCollection.get(3).attributes.title);
  debugger;

  $('.toggle').on('click', function() {
    var myTodo = TodosCollection.get(3);
    //When setting a property, an event gets fired.
    myTodo.set('title', 'Learn Backbonejs');
  });
})(window, document);
