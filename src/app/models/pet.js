import Backbone from 'backbone';

var Pet = Backbone.Model.extend({

  defaults: {
    name: 'DEFAULT',
    age: 0,
    breed: '',
    about: '',
    vaccinated: false
  },

});

export default Pet;
