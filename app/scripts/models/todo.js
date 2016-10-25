/*
* Todo model has defaults values for our todo items, and a function toggle that sets and persists at the same time the status
* */
var app = app || {};
app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }
});
