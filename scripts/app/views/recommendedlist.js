define([],function(){
	var Detail = Backbone.View.extend({
		tagName: 'div',
		events:{
			
		},
		template: _.template($('#recommendedList').html()),
		initialize: function() {
			//this.listenTo(this.model, "change", this.render);
			//this.listenTo(this.model, "destroy", this.remove);
			this.render();
		},
		render: function(){
			//console.log(this.el);
			this.$el.html(this.template(this.model.toJSON()));
			console.log('adsasda');
			console.log(this.$el);

			$('#newsListRec').append(this.$el);
		}
	});
	return Detail;
})