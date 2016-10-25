(function (w, d) {

  var Task = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    }
  });

  var TasksList = Backbone.Collection.extend({
    model: Task,
    url: '/tasks'
  });

  //Asks the models set.
  var tasks = new TasksList();
  tasks.set({
    id: 32,
    title: 'My new task'
  });

  //Asks for the model with the id 32
  var task2 = tasks.get(32);
  console.log(task2);

  //Specifying patch: true when saving, only the changed attributes will sent to the server.
  task2.save(task2.toJSON(),
    {
      patch: true
    },
    {
      success: function() {
        alert('Success');
      },
      error: function(model, xhr, options) {
        console.log('Error');
      }
    });
  //
  // //This statement sends a HTTP POST Request to /tasks, and adds to the collection
  // tasks.create({
  //   title: 'New task to do 2!'
  // });


  //A model can be removed from the collection AND THE SERVE calling collection.destroy().
  //Collection.remove() only removes it from the collection.
  //Model.destroy will also send a HTTP delete request to the URL of the collection
  task2.destroy();

  //For note: calling destroy on a model that isNew... will return false.

  //Options:
  //All the RESTFul API methods accepts some methods. The most important to remember, is that all methods accept success and callback methods, so We can customize the handling of server responses.





})(window, document);
