(function (w, d) {
  var Todo = Backbone.Model.extend({
      defaults: {
        title: '',
        completed: false
      },
      initialize: function () {
        this.on('invalid', function (model, error) {
          console.log(error);
        });
      },
      validate: function (attrs) {
        if (attrs.title === undefined) {
          return 'Task title is void!!';
        }
      }
    }),
    todo1 = new Todo();

  var TodoView = Backbone.View.extend({
    el: '#todoItems',
    initialize: function() {
      this.model.bind('change', _.bind(this.render, this));
    }
  });

  todo1.set({
    title: 'title'
  });

  var todo1View = new TodoView();
})(window, document);
