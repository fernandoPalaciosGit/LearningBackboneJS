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

  var myTodo = new Todo();

//I can use the .on jquery way to declare listeners
  myTodo.on({
    'change:title' : titleChanged,
    'change:completed' : stateChanged
  });

  function titleChanged(){
    console.log('The title was changed!');
  }

  function stateChanged(){
    console.log('The state was changed!');
  }


  //I will perform a title set It will fire the title changed event, which call the titleChanged callback!
  myTodo.set({
    title: 'Get the groceries'
  });

  $('.toggle').on('click', function() {
    //This statement will change the title and the state of the task, so 2 events will be fired, and I will catch them.
    myTodo.set({
      title: 'Buy tons of coffee',
      completed: true
    });
  });
})(window, document);
