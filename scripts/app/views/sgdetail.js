define([],function(){
	var SgDetail = Backbone.View.extend({
		tagName: 'div',
		events:{
			//'click div': 'showDetail',
			//'click img': 'showDetail'
		},
		template: _.template($('#sgDetail').html()),
		initialize: function(){
			//this.listenTo(this.model, "change", this.render);
			//this.listenTo(this.model, "destroy", this.remove);
			this.render();
		},
		render: function(){
			//console.log(this.el);
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.addClass('newsTile');
			$('#newsList').append(this.$el);
			$("body").swipe({
			  swipe:function(event, direction, distance, duration, fingerCount) {
				console.log("You swiped " + direction );
			  }
			});
		},

		showDetail: function(){
			console.log("click detail");
			console.log(this);
			c = this;
		}
	});
	return SgDetail;
})