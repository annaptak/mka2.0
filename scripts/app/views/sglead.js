define([],function(){
	var SgLead = Backbone.View.extend({
		tagName: 'div',
		events:{
			//'click div': 'showDetail',
			//'click img': 'showDetail'
		},
		template: _.template($('#lead').html()),
		initialize: function(){
			//this.listenTo(this.model, "change", this.render);
			//this.listenTo(this.model, "destroy", this.remove);
			this.render();
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));

			console.log(this.$el);

			$('#topNews').append(this.$el);
		},

		showDetail: function(){
			
		}
	});
	return SgLead;
})