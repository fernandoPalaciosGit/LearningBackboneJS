(function (w, d) {
  //Create a model type for instantiate from. (I've changed the concept to book, instead of to do tasks, only for this example).
  var Book = Backbone.Model.extend({
    defaults: {
      title: 'Developing Backbone JS apps',
      author: 'Addy Osmani'
    }
  });

  //Create a collection type, passing in wich type of models is gonna contain this collection.
  var Library = Backbone.Collection.extend({
    model: Book
  });

  //Create three books models.
  var a = new Book({
 title: 'Javascript Patterns'
 }),
    b = new Book({
 title: 'Javascript- The good parts'
 }),
    c = new Book({
 title: 'Eloquent javascript'
 });

  //I instantantiate my collection / library with 2 models / books
  var libraryCatalog = new Library([a,b]);

  //Notice since console is async, here I can't find the models in the model array cause I've removed them above!!
  console.log(libraryCatalog);

  //I add the third model to the collection
  libraryCatalog.add(c);

  //I should have 3 items / models in this collection
  console.log('Collection size: ' + libraryCatalog.length);
  //I remove 2 items from the collection, therefore... Size should be 1.
  libraryCatalog.remove([a,b]);
  console.log('Collection size: ' + libraryCatalog.length);
  //I remove 1 item from the collection.. So... It should have 0 items, now.
  libraryCatalog.remove(c);
  console.log('Collection size: ' + libraryCatalog.length);
})(window, document);
