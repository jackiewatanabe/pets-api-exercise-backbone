import Backbone from 'backbone';

import PetView from './pet_view';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

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
      // rendered the view and appended it to 'todo-items'
      that.$('#pet').append(myPetView.render().el);
      // console.log("****Yo breadcrumb #3xx***");
    });
    // returning this view object so you can chain functions like myView.render().el
    // console.log("****Yo breadcrumb #3 end of render in task list view***");
    return this;

  }

});

export default PetListView;
