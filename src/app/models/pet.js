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
  // this.logStatus();
  }


});

export default Pet;
