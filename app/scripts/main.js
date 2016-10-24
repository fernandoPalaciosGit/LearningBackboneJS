(function (w, d) {
  //Create a model type for instantiate from. (I've changed the concept to book, instead of to do tasks, only for this example).
  var Book = Backbone.Model.extend({
    defaults: {
      title: 'Developing Backbone JS apps',
      author: 'Addy Osmani'
    }
  });

  //Create a collection type, passing in wich type of models is gonna contain this collection.
  var books = new Backbone.Collection();
  books.add([
    {
      id: 1,
      title: 'New Cool JS Book',
      author: 'JS developer'
    },
    {
      id: 1,
      title: 'Re-titled book',
      author: 'JS developers'
    }
  ]);
  console.log(books);
  console.log('Merge when adding models to a collection!');

  var books2 = new Backbone.Collection();
  books2.add([
    {
      id: 1,
      title: 'New Cool JS Book',
      author: 'JS developer'
    },
    {
      id: 1,
      title: 'Re-titled book',
      author: 'JS developers'
    }
  ],
    {
      merged: true
    });
  console.log(books2);
})(window, document);
