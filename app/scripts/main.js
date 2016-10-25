(function (w, d) {
  //How to retrieve a model from a collection:
  var Todo = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    }
  });

  var TodosCollection = new Backbone.Collection();

  TodosCollection.on('add', function(todo) {
    console.log('I should ' + todo.get('title') + '. Have I done it before? '  + (todo.get('completed') ? 'Yeah!' : 'No.'));
  });

  $('.toggle').on('click', function() {
    TodosCollection.add([
      {
        title: 'go to Jamaica', completed: false
      },
      {
        title: 'go to China', completed: false
      },
      {
        title: 'go to Disneyland', completed: true
      }
    ]);
  });

// The above logs:
// I should go to Jamaica. Have I done it before? No.
// I should go to China. Have I done it before? No.
// I should go to Disneyland. Have I done it before? Yeah!
})(window, document);
