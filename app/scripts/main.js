(function(w, d) {
  var Todo = Backbone.Model.extend({
      initialize: function() {
        console.log('This model has been initialized.');
      },
      defaults: {
        title: '',
        completed: false
      }
  }),
    todo1 = new Todo();

  console.log(todo1.attributes.completed); // empty string
  console.log(todo1.get('completed')); // false
})(window,document);
