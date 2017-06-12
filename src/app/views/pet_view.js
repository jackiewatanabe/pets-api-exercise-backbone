import Backbone from 'backbone';
// import Pet from 'app/models/pet';

var PetView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    // this.$el.addClass("task-item column column-block");
  // no parentheses on this.render because you're not calling it here... just telling listener, when 'change' happens, to call this.render
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var compiledTemplate = this.template({pet: this.model.toJSON()});

    this.$el.html(compiledTemplate);

    return this;
  }

});

export default PetView;
