(function(w, d) {
  var Todo = Backbone.Model.extend({
    defaults: {
      title: 'Title value',
      completed: false
    },
    initialize: function() {
      this.on('invalid', function(model, error) {
        console.log(error);
      });
    },
    validate: function(attrs) {
      if (attrs.title === undefined) {
        return 'Task title is void!!';
      }
    }
  }),
    todo1 = new Todo();
  console.log(todo1.set({
    title: 'New title value!!'
  }));
  todo1.unset('title', {
    validate: true
  });
})(window,document);
