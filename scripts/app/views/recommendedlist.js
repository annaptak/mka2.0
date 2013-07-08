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
			console.log(this.$el);
			var that = this;
			setTimeout(function(){
				$('#newsListRec').append(that.$el);
				$('.reklamaRight').show();
			}, 800);
		}
	});
	return Detail;
})