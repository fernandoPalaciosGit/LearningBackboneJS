(function(w, d) {
  var Todo = Backbone.Model.extend({
      initialize: function() {
        this.on('change:title', function() {
          console.log('Title has been changed in this model.');
        });
      },
      defaults: {
        title: 'Title value',
        completed: false
      }
  }),
    todo1 = new Todo();
  console.log(todo1.get('title'));
  console.log(todo1.set({
    title: 'New title value!!'
  }));
  console.log(todo1.get('title'));
})(window,document);
