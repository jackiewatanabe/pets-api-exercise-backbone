import Backbone from 'backbone';

var Pet = Backbone.Model.extend({

  defaults: {
    name: 'DEFAULT',
    age: 0,
    breed: '',
    about: '',
    vaccinated: false
  },

  initialize: function(params) {
    console.log("Starting", params);
    this.logStatus();
  },

  logStatus: function() {
    console.log("Model: " + this.cid);
    console.log("Name: " + this.get("name"));
    // console.log("Completed: " + this.get("completed"));
  },


});

export default Pet;
