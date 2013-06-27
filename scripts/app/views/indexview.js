define(['app/collections/sg'],function(SgCollection){
	var IndexView = Backbone.View.extend({
		tagName: 'div',
		events:{
			'touchstart #sg': 'onScroll',
			'click .menuTile': 'categoryOnClick'
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
			xx = this.sg;
			var that = this;
	       	$(window).bind('scroll', function (){
	            var current = $('body').scrollTop();
	            var height = $('body').height();
	         	if(current*2 > height && that.sg.readyForMore){
	         		that.sg.fetchMore();
	         	}
	        });			

		},

		onScroll: function(){
			console.log("click");
		},
		categoryOnClick: function(ev){
			var categoryEl = $(ev.target);
			var disabledClass = 'disabledCategory';
			var topic = ev.target.innerHTML;
			var userCategories = JSON.parse(localStorage.getItem('mUserCategories'));
			var topicToRemove = null;
			if(userCategories === null){
				userCategories = ["Moto", "Wiadomości", "Sport", "Biznes", "Wiedza i świat", "Gadżety", "Rozrywka", "Styl życia"];
			}else{
				if(userCategories.indexOf(topic) !==  -1){
					topicToRemove = topic;
				}
			}
			var p = userCategories.length;
			if(categoryEl.hasClass(disabledClass)){
				categoryEl.removeClass(disabledClass);
				userCategories.push(categoryEl.attr('category'));
			} else {
				categoryEl.addClass(disabledClass);
				var tmpCategories = [];
				for(var i=0; i<userCategories.length;i++){
					if(categoryEl.attr('category') != userCategories[i]){
						tmpCategories.push(userCategories[i]);
					}
					
				}
				userCategories = tmpCategories
			}
			var n = userCategories.length;
			console.log(p);
			console.log(n);
			console.log(topicToRemove);
			localStorage.setItem('mUserCategories', JSON.stringify(userCategories));
			if(topicToRemove){
				this.sg.removeELements(topicToRemove);
			}else{
				this.sg.removeAllNews();
				this.sg.fetch();
			}

		}
	});
	return IndexView;
});