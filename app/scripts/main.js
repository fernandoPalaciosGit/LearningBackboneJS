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

  MyCollection.on("reset", function() {
    console.log("The event fired was reset.");
    debugger;
  });

  MyCollection.reset();
  console.log(MyCollection.models);


})(window, document);
