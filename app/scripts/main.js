(function (w, d) {
  var Todo = Backbone.Model.extend({
      defaults: {
        items: [
          {
            title: '',
            completed: false
          }
        ]
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
    
  });
})(window, document);
