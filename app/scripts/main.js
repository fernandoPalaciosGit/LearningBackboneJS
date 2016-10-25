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

  MyCollection.on("remove:completed", function(model) {
    console.log("This event won't be fired when resetting the collection!!");
    console.log(MyCollection.models);
    debugger
  });

  MyCollection.reset();
  console.log(MyCollection.models);


})(window, document);
