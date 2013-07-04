define([],function(){
	var SgDetail = Backbone.View.extend({
		tagName: 'div',
		events:{
			'click div': 'showDetail',
			'click img': 'showDetail'
		},
		template: _.template($('#sgDetail').html()),
		initialize: function(){
			//this.listenTo(this.model, "change", this.render);
			//this.listenTo(this.model, "destroy", this.remove);
			var that = this;
			this.model.on('change', function()
	            {
	               that.remove();
	            }
            );
			this.render();
		},
		render: function(){
			//console.log(this.el);
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.addClass('newsTile');
			$('#newsList').append(this.$el);
		},

		showDetail: function(){
			console.log("click detail");
			console.log(this);
			c = this;
		}
	});
	return SgDetail;
})