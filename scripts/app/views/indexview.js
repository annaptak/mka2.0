define(['app/collections/sg'],function(SgCollection){
	var IndexView = Backbone.View.extend({
		tagName: 'div',
		events:{
			'touchstart #sg': 'onScroll',
			'click .menuTile': 'categoryOnClick',
			'click .delete': 'deleteNews'
			//'click img': 'showDetail
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
			window.list = this.sg;
			xx = this.sg;
			var that = this;
	       	$(window).bind('scroll', function (){
	            var current = $('body').scrollTop();
	            var height = $('body').height();
	         	if(current*2 > height && that.sg.readyForMore){
	         		that.sg.fetchMore();
	         	}
	        });	

	        $('.item').click(this.categoryOnClick);	
	        this.setDisabledClass();
		},

		setDisabledClass: function(){
			var userCategories = JSON.parse(localStorage.getItem('mUserCategories'));
			var tiles = $('.menuTile');
			if(userCategories){
				$.each( tiles, function( k, v) {
					var inner = v.innerHTML;
					if(inner.indexOf("Menu") === -1){
						if(userCategories.indexOf(inner) === -1){
							$(v).addClass('disabledCategory');
						}
					}
				});
			}
		},
		onScroll: function(){
			console.log("click");
		},
		categoryOnClick: function(ev){
			if(!ev.isTrigger){
				//console.log(ev);
				var categoryEl = $(ev.target);
				var disabledClass = 'disabledCategory';
				var topic = ev.target.innerHTML;
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
				} else {
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
					this.sg.removeELements(topicToRemove);
				}else{
					this.sg.removeAllNews();
					this.sg.fetch();
				}				
			}
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