define(['app/collections/sg'],function(SgCollection){
	var IndexView = Backbone.View.extend({
		tagName: 'div',
		events:{
			//'click div': 'showDetail',
			//'click img': 'showDetail'
		},
		template: _.template($('#index').html()),
		initialize: function(){
			//this.listenTo(this.model, "change", this.render);
			//this.listenTo(this.model, "destroy", this.remove);
			this.render();
		},
		render: function(){
			this.$el.html(this.template());
			$('#wrapper').html(this.$el);
			var sg = new SgCollection;
			sg.fetch();
		},

		showDetail: function(){
			
		}
	});
	return IndexView;
});