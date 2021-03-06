define(['app/collections/sg'],function(SgCollection){
	var IndexView = Backbone.View.extend({
		tagName: 'div',
		events:{
			'click .menuTile': 'categoryOnClick',
			'click .delete': 'deleteNews',
			'swipeLeft' : 'firstArticle',
			'swipeUp' : 'loadMore'
		},
		template: _.template($('#index').html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			this.$el.html(this.template());
			$('#wrapper').html(this.$el);

			this.sg = new SgCollection;
			this.sg.readyForMore = true;
			this.sg.fetch();
			window.list = this.sg;
			window.indexview = this;
			xx = this.sg;

	        $('.item').click(this.categoryOnClick);	
	        this.setDisabledClass();
		},
		
		firstArticle : function() {
			var that = this;
			this.views = [];
			var params = {};
			var topicsLocal = this.localParams();
			if(topicsLocal && topicsLocal.length && topicsLocal.length > 0){
				params.topics = topicsLocal;
			}
			queryOnet.getAllNews(params, function(err, result){
				if(result){
					console.log("Next location:  #detail/" + result[0].id);
				}
			});			
		},
		
		loadMore : function() {
			var that = this;
			var current = $('body').scrollTop();
	            var height = $('body').height();
	         	if(current*2 > height && that.sg.readyForMore){
	         		that.sg.fetchMore();
	         	}
		},

		setDisabledClass: function(){
			var userCategories = JSON.parse(localStorage.getItem('mUserCategories'));
			var tiles = $('.menuTile');
			var menus = $('.item');
			if(userCategories){
				$.each( tiles, function( k, v) {
					var inner = v.getAttribute('category');
					if(inner && inner.indexOf("Menu") === -1){
						if(userCategories.indexOf(inner) === -1){
							$(v).addClass('disabledCategory');
						}
					}
				});
				$.each( menus, function( k, v) {

					var inner = v.getAttribute('category');
					if(inner && inner.indexOf("Menu") === -1){
						if(userCategories.indexOf(inner) === -1){
							$(v).addClass('disabledCategory');
						}
					}
				});				
			}
		},
		categoryOnClick: function(ev){
			if(!ev.isTrigger && !$(ev.target).hasClass('menuBtn')){
				var categoryEl = $(ev.target);
				var disabledClass = 'disabledCategory';
				var topic = ev.target.getAttribute('category');
				var userCategories = JSON.parse(localStorage.getItem('mUserCategories'));
				var topicToRemove = null;
				if(userCategories === null){
					userCategories = ["Moto", "Wiadomości", "Sport", "Biznes", "Wiedza i świat", "Gadżety", "Rozrywka", "Styl życia"];
				}
				var p = userCategories.length;
				x = categoryEl;
				if(categoryEl.hasClass(disabledClass)){
					categoryEl.removeClass(disabledClass);
					if(userCategories.indexOf(topic) === -1){
						if(topic){
							userCategories.push(topic);
						}
					}
				}else {
					categoryEl.addClass(disabledClass);
					var tmpCategories = [];
					if(userCategories.indexOf(topic) !==  -1){
						topicToRemove = topic;
					}										
					for(var i=0; i<userCategories.length;i++){
						if(topicToRemove != userCategories[i]){
							tmpCategories.push(userCategories[i]);
						}
						
					}
					userCategories = tmpCategories
				}
				var n = userCategories.length;
				localStorage.setItem('mUserCategories', JSON.stringify(userCategories));			
				if(topicToRemove){				
					list.removeELements(topicToRemove);
				}else{
					list.removeAllNews();
					list.fetch();
				}
				//global 
				indexview.setDisabledClass();				
			}
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
		
		deleteNews: function(ev){
			ev.preventDefault();
			var parent = ev.target.parentNode.parentNode;
			$('.newsTitle',$(parent)).remove();

			$(ev.target.parentNode.parentNode).animate( {opacity: 0, width:0
  			}, 1000, function(){
  				$(this).remove();
  			} );
		}
	});
	return IndexView;
});