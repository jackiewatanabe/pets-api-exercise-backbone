import Backbone from 'backbone';
import PetView from './pet_view';
import Pet from '../models/pet';
import $ from 'jquery';
import _ from 'underscore';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.template2 = params.detailsTemplate;

    this.listenTo(this.model, "update", this.render);
  },


  render: function() {

    // this.$('.todo-items').empty();
    var that = this;

    // looped through collection
    this.model.each(function(pet) {
      // created a new view for each pet
      var myPetView = new PetView({
        model: pet,
        template: that.template
        // tagName: 'li'
      });

      that.listenTo(myPetView, "selected", that.petDeets);
      that.$('#pet-list').append(myPetView.render().$el);
  });
    return this;

  },

  events: {
    "click #add-pet": "addPet"
  },

  petDeets: function(bob) {
    $('.add-pet').empty();
    $('#pet-list').empty();
    // $('#pet').show();

    console.log("triggered");
    console.log(bob);
    var myPetDetails = this.template2({pet: bob.attributes});
        //
    this.$('#pet').append(myPetDetails);
      // myContactDetailsView.render();
  },

  getFormData: function() {
    var formName = this.$("#name").val();
    this.$("#name").val('');

    var formBreed = this.$("#breed").val();
    this.$("#breed").val('');

    var formAge = this.$("#age").val();
    this.$("#age").val('');

    // get checkbox and find out if it's checked - true/false
    var formAbout = this.$("#about").val();
    this.$("#about").val('');

    return {
      name: formName,
      breed: formBreed,
      age: formAge,
      about: formAbout
    };
  },

  addPet: function() {
    var pet = new Pet(this.getFormData());
    this.model.create(pet);
  }



});

export default PetListView;
