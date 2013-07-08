define([],function(){
	var Detail = Backbone.View.extend({
		
		template: _.template($('#detail').html()),
		
		initialize: function(){
			//this.listenTo(this.model, "change", this.render);
			//this.listenTo(this.model, "destroy", this.remove);
			console.log('Detail View Init');
            $('#loader').remove();
			$('#wrapper').live('swipeRight', function(event) {
			console.log("swiped right");
				window.history.back();
				return false;
			});	
			$('#wrapper').live('swipeLeft', function(event) {
				console.log("swiped left");
				return false;
			});	
			this.render();
		},
		
		rememberId: function(articleId) {
			console.log("Article ID:" + articleId);
		},
		
		render: function(){
			console.log(this.el);
			console.log(this.model.toJSON()['news']['meta']['identifier'], window.ids);
			if(window.backVar){
				$('body').slideFrom(this.template(this.model.toJSON()));
				window.backVar = false;
			} else {
				$('body').slideTo(this.template(this.model.toJSON()));
			}
			
			this.$el.html(this.template(this.model.toJSON()));
			window.ids.push(this.model.toJSON()['news']['meta']['identifier']);
			
			$('#wrapper').append(this.$el);
		}
		
	});
	return Detail;
})