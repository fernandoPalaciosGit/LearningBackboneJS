(function(w, d) {
  var Todo = Backbone.Model.extend({
      initialize: function() {
        this.on('change', function() {
          console.log('Something in the model changed!!');
        });
      },
      defaults: {
        title: '',
        completed: false
      }
  }),
    todo1 = new Todo();

  console.log(todo1.attributes.completed); // empty string
  console.log(todo1.set({
    completed: true
  })); // false
})(window,document);
