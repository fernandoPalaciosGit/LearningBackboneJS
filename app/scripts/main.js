(function (w, d) {
  //I can re-set an entire collection at once by passing a models array!!
  var MyCollection = new Backbone.Collection();
  MyCollection.add([
    {
      id: 1,
      title: 'Learn BackboneJS',
      completed: false
    },
    {
      id: 2,
      title: 'Eat Pizza',
      completed: false
    },
    {
      id: 3,
      title: 'Take coffee',
      completed: false
    }
  ]);

  //What happens, if I pass an array with 0 elements?

  MyCollection.set([]);

  console.log(MyCollection.models);
  debugger;

})(window, document);
