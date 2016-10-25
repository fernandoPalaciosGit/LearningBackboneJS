(function (w, d) {
  //Create a model type for instantiate from. (I've changed the concept to book, instead of to do tasks, only for this example).
  var Book = Backbone.Model.extend({
    defaults: {
      title: 'Developing Backbone JS apps',
      author: 'Addy Osmani'
    }
  });

  //Use of merge when adding a model to a collection!
  var items = new Backbone.Collection();
  items.add([{
 id : 1, name: 'Javascript the good parts' , year: 2008
 }, {
 id : 2, name: 'Dev. Backbonejs apps' , year: 2012
 }]);

  console.log(items);
  
  items.add([{
 id : 1, name: 'Eloquent Javascript'
 }], {
 merge: true
 });

  console.log('Book with id 1 has change its name cause merge is set to true');
  console.log(items);


  items.add([{
 id : 2, name: 'lion'
 }]); // merge: false

  console.log(JSON.stringify(items.toJSON()));
  console.log(items);
})(window, document);
