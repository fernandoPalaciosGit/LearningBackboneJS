(function (w, d) {
  var Todo = Backbone.Model.extend({
      defaults: {
        title: 'Title value',
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
    todoTpl: _.template('My todo template'),

    //Listening events over the template parts!

    events: {
      'dblclick label': 'edit',
      'keypress .edit': 'updateOnEnter',
      'blur .edit': 'close'
    },
    initialize: function (options) {
      this.options = options || {};
    },
    render: function () {
      this.$el.html(this.todoTpl(this.model.attributes));
      this.input = this.$('.edit');
      return this;
    },
    edit: function () {
      //Db click event
    },

    close: function () {
      //Blur event
    },

    updateOnEnter: function (e) {
      //Keypress event
    }
  });

  var todoView = new TodoView({
    el: '#todosContainer'
  });

  // todoView.el is a reference to the DOM element that corresponds to the instance of the view. In this case, <li>
  console.log(todoView.el);
})(window, document);
