define([],function(){
	var SgDetail = Backbone.View.extend({
		tagName: 'li',
		events:{
			
		},
		template: _.template($('#sgDetail').html()),
		initialize: function(){
			//this.listenTo(this.model, "change", this.render);
			//this.listenTo(this.model, "destroy", this.remove);
			this.render();
		},
		render: function(){
			console.log(this.el);
			this.$el.html(this.template(this.model.toJSON()));
			$('#mainList').append(this.$el);
		}
	});
	return SgDetail;
})