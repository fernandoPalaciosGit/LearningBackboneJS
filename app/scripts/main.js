(function (w, d) {

  var Model = Backbone.Model.extend({
    defaults: {
      id: 0,
      title: ''
    }
  });



  var View = Backbone.View.extend({
    //We set the div with id todo as the element of the view.
    el: '#todo',

    //This is how We bind to DOM events, using the events property
    events: {
      'click [type="checkbox"]': 'clicked'
    },
    initialize: function () {
      //This is how We bind to DOM events using jQuery
      this.$el.click(this.jqueryClicked);

      //This how We bind to Backbone's API event
      this.on('apiEvent', this.callback);

      this.trigger('apiEvent');
    },


    clicked: function(event) {
      console.log(this);
      // 'this' keyword is the view, because this function Was called from Event bound using the view's events property
      console.log("events handler for " + this.el.outerHTML);
      this.trigger('apiEvent', event.type);
    },


    jqueryClicked: function(event) {
      // 'this' keyword is the DOM element that is being handling.
      console.log("jQuery handler for " + this.outerHTML);
    },

    callback: function(eventType) {
      console.log(this);
      console.log("event type was " + eventType);
    }

  });

  var view = new View();
  var model = new Model({
    id:1,
    title: 'Test'
  });
})(window, document);
