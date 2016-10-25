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

  MyCollection.set([
    { id: 1, title: 'go to Jamaica.', completed: true },
    { id: 2, title: 'go to China.', completed: false },
    { id: 4, title: 'go to Disney World.', completed: false }
  ]);

  console.log(MyCollection.models);
  debugger;

})(window, document);
