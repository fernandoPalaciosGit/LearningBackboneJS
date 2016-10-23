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
    events: {
      'click .toggle': 'toggleCompleted'
    },
    initialize: function() {
      this.model.bind('change', _.bind(this.render, this));
      this.model.set({
        title: 'title'
      });

      this.$el.find('.toggle').trigger('click');
    },
    toggleCompleted: function() {
      alert();
    },
    render: function() {
      console.log('Model changed!!');
    }
  });
  var todo1View = new TodoView({
    model: todo1
  });
})(window, document);
