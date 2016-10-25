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

  //I can use reset() with no arguments for resetting to void the entire collection. It'd be usefull, for exaple, If I need to load a new page of elements, and I want to start 'clean' of models in my collection
  MyCollection.reset();

  console.log(MyCollection.models);
  debugger;

})(window, document);
