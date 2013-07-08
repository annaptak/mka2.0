define([],function(){
	var Detail = Backbone.View.extend({
		
		template: _.template($('#detail').html()),
		
		initialize: function(){
			console.log('Detail View Init');
            $('#loader').remove();
			$('#wrapper').live('swipeRight', function(event) {
				if (typeof currentArticleId != 'undefined') {
					window.location.href = "#";
				}
				else {
					currentArticleId -= 1;
					console.log("swiped right to: " + currentArticleId);
					if (currentArticleId == 0 ) {
						window.location.href = "#";
					}
					else {
						var that = this;
						this.views = [];
						var params = {};
						
						queryOnet.getAllNews(params, function(err, result){
							if(result){
								window.location.href = '#detail/' + result[currentArticleId].id ;
							}
						});
					}					
				}
				return false;
			});	
			$('#wrapper').live('swipeLeft', function(event) {
				if (typeof currentArticleId != 'undefined') {}
				else {
					currentArticleId += 1;
					console.log("swiped left to: " + currentArticleId);
					var that = this;
					this.views = [];
					var params = {};
					
					queryOnet.getAllNews(params, function(err, result){
						if(result){
							window.location.href = '#detail/' + result[currentArticleId].id ;
						}
					});				
				}
				return false;
			});	
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
		},
		
	});
	return Detail;
})