define(['app/models/sgdetail','app/views/sgdetail','app/views/sglead'],function(SgDetail,SgDetailView, SgLeadView){
	var Sg = Backbone.Collection.extend({
		model: SgDetail,
		fetch:  function(){
			var that = this;
			this.views = [];
			var params = {};
			var topicsLocal = this.localParams();
			if(topicsLocal && topicsLocal.length && topicsLocal.length > 0){
				params.topics = topicsLocal;
			}
			console.log(params);
			queryOnet.getAllNews(params, function(err, result){
				if(result){
//					console.log(result);
					that.add(result);
					that.render();
				}
			});
		},

		fetchMore: function(){
			var that = this;
			var params = {};
			this.readyForMore = false;
			var topicsLocal = this.localParams();
			if(topicsLocal && topicsLocal.length && topicsLocal.length > 0){
				params.topics = topicsLocal;
			}
			params.offset = this.length;			
			queryOnet.getAllNews(params, function(err, result){
				if(result){
//					console.log(result);
					that.add(result);
					that.renderMore();
				}
			});
		},
		render: function(){
			var first = false;
			this.page = 1;
			var that = this;
			var i = 0;
			var j = 0;
			var toRemove = [];			
			this.each(function(element){
				if(element.get('image')){
					//console.log(element.get('topics'));
					var id = element.get('id');
					id = id.replace('#NewsListElement','');
					if(that.leadRendered){
						//console.log(id);
						element.set({
							id: id
						});
						//console.log(id);
						
						//console.log(element.get('image'));
						var view = new SgDetailView({model: element});
						that.views.push(view);
						
					}else{

							//console.log("xxxxxxxxxxxx");
						element.set({
							id: id
						});						
						var view = new SgLeadView({model: element});
						toRemove.push(element);
						that.leadRendered = true;
					}

					
				}else{
					toRemove.push(element);
				}
				
				//console.log(element);
			});
			this.remove(toRemove);
		},

		renderMore: function(){
			var toRemove = [];
			for(var i = this.views.length + 1; i < this.models.length; i++){
				if(this.models[i].get('image')){
					var id = this.models[i].get('id');
					id = id.replace('#NewsListElement','');
					this.models[i].set({
						id: id
					});

					var view = new SgDetailView({model: this.models[i]});
					this.views.push(view);
				}else{
					toRemove.push(this.models[i]);
				}
			};
			//console.log(toRemove);
			this.remove(toRemove);
			this.page++;
			this.readyForMore = true;
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
		"removeELements": function(_topic){
			var toRemove = [];
			for(var i = 0; i < this.views.length; i++){
				var topics = this.views[i].model.get('topics');
				if(topics.indexOf(_topic) !== -1){
					var id = this.views[i].model.get('id');
					this.views[i].remove();
					this.views[i] = null;
					toRemove.push(this.get(id));
				}
			}
			/* Widoki usuwanie */
			var newView = [];
			for(var i = 0; i< this.views.length; i++){
				if(this.views[i]){
					newView.push(this.views[i]);
				}
			}
			this.views = newView;
			/* */
			this.remove(toRemove);

		},
		"removeAllNews": function(){
			var toRemove = [];
			for(var i = 0; i < this.views.length; i++){
				var id = this.views[i].model.get('id');
				this.views[i].remove();
				this.views[i] = null;
				toRemove.push(this.get(id));
			}
			/* Widoki usuwanie */
			var newView = [];
			this.views = newView;
			/* */
			this.remove(toRemove);			
		},
	});
	return Sg;
});