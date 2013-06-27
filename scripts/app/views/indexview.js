define(['app/collections/sg'],function(SgCollection){
	var IndexView = Backbone.View.extend({
		tagName: 'div',
		events:{
			'touchstart #sg': 'onScroll',
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
			this.sg = new SgCollection;
			this.sg.readyForMore = true;
			this.sg.fetch();
			var that = this;
	       	$(window).bind('scroll', function (){
	            var current = $('body').scrollTop();
	            var height = $('body').height();
	         	if(current*2 > height && that.sg.readyForMore){
	         		that.sg.fetchMore();
	         	}
	        });		
			$("body").swipe({
			  swipe:function(event, direction, distance, duration, fingerCount) {
				console.log("You swiped " + direction );
			  }
			});

		},

		onScroll: function(){
			console.log("click");
		}
	});
	return IndexView;
});