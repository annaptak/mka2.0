define(['app/models/sgdetail','app/views/sgdetail','app/views/sglead'],function(SgDetail,SgDetailView, SgLeadView){
	var Sg = Backbone.Collection.extend({
		model: SgDetail,
		fetch:  function(){
			var that = this;
			queryOnet.getAllNews({
				topics: [        
				{
	            	"name": "Tylko w onecie",
		            	"priority": 1
		        	}
	        	]
			}, function(err, result){
				if(result){
//					console.log(result);
					that.add(result);
					that.render();
				}
			});
		},

		fetchMore: function(){
			var that = this;
			this.readyForMore = false;
			queryOnet.getAllNews({
				offset: this.page *50
			}, function(err, result){
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
			this.each(function(element){

				if(element.get('image')){
					console.log(element.get('topics'));
					var id = element.get('id');
					id = id.replace('#NewsListElement','');
					element.set({
							id: id
						});
					if(first){
						//console.log(id);
						
						//console.log(element.get('image'));
						var view = new SgDetailView({model: element});
					}else{
						first = true;
						var view = new SgLeadView({model: element});
					}

					
				}
				//console.log(element);
			});
		},

		renderMore: function(){

			for(var i = this.page*50; i < this.models.length; i++){
				if(this.models[i].get('image')){
					var id = this.models[i].get('id');
					id = id.replace('#NewsListElement','');
					this.models[i].set({
						id: id
					});
					var view = new SgDetailView({model: this.models[i]});
				}
			};
			this.page++;
			this.readyForMore = true;
		}
	});
	return Sg;
});