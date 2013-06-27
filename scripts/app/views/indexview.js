define(['app/collections/sg'],function(SgCollection){
	var IndexView = Backbone.View.extend({
		tagName: 'div',
		events:{
			//'click div': 'swipeMethod',
			'swiperight div': 'swipeMethod2'
			
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
			console.log(this.$el,'XXXXXXXXXXXXXXX');

			$('#wrapper').html(this.$el);
			var sg = new SgCollection;
			sg.fetch();
		},
		
		swipeMethod2: function(){
			alert('swipe2');
		},

		showDetail: function(){
			
		}
	});
	return IndexView;
});