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

  TodosCollection.on('add', function(todo) {
    //Does it fires add event for each model We add, or just once, In the moment We add to the collection?? Let's find it out!!
    counter++;
    //console.log('I should ' + todo.get('title') + '. Have I done it before? '  + (todo.get('completed') ? 'Yeah!' : 'No.'));
    console.log(counter); // 1 //2 //3

    //It fires the add event of the collection once for each model added.
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
