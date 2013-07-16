define([],function(){
	var Detail = Backbone.View.extend({
	
		el: 'body',
		
		events:{
			'swipeRight' : 'previousArticle',
			'swipeLeft' : 'nextArticle'
		},
		
		template: _.template($('#detail').html()),
		
		initialize: function(){
            $('#loader').remove();
			this.render();
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
		},
		
		previousArticle: function() {
			console.log("Going to previous article");			
		},
		
		nextArticle: function() {
			console.log("Going to next article");			
		},
		
		"localParams": function(){
			var topicsLocal = JSON.parse(localStorage.getItem('mUserCategories'));
			var topics = null;
			if(topicsLocal){
				topics = [];
				for(var i=0; i < topicsLocal.length; i++){
					topics.push({
						"name": topicsLocal[i],
						"priority": 1
					});
				}
			}
			return topics;
		}
		
	});
	return Detail;
})