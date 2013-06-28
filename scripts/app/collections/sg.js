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
                    result = that.makeComm(result);
					that.add(result);
					that.render();
				}
			});
		},
        makeComm : function(result) {
            var len = result.length;
            var resultComm = [];
            for ( var i=0;i<len;i++ ) {
                if ( i % 6 === 0 && i > 0) {
                    resultComm[i] = {
                        'id' : 'REKLAMA' + Math.random(),
                        'image' : '/images/comm.png',
                        'title' : 'REKLAMA',
                        'mainTopic' : 'REKLAMA',
                        'lead' : 'REKLAMA',
                        'servicePath' : 'REKLAMA'
                    };
                } else {
                    resultComm[i] = result[i];
                }
            }
            return resultComm;
        },
		fetchMore: function(){
			var that = this;
			this.readyForMore = false;
			queryOnet.getAllNews({
				offset: this.page *50
			}, function(err, result){
				if(result){
                    result = that.makeComm(result);
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
					if(first){
						//console.log(id);
						element.set({
							id: id
						});
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