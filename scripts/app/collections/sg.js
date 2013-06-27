define(['app/models/sgdetail','app/views/sgdetail','app/views/sglead'],function(SgDetail,SgDetailView, SgLeadView){
	var Sg = Backbone.Collection.extend({
		model: SgDetail,
		fetch:  function(){
			var that = this;
			queryOnet.getAllNews({}, function(err, result){
				if(result){
//					console.log(result);
					that.add(result);
					that.render();
				}
			});
		},
		render: function(){
			var first = false;
			this.each(function(element){

				if(element.get('image')){
					var id = element.get('id');
					id = id.replace('#NewsListElement','');
					if(first){
						console.log(id);
						element.set({
							id: id
						});
						var view = new SgDetailView({model: element});
					}else{
						first = true;
						var view = new SgLeadView({model: element});
					}

					
				}
				//console.log(element);
			});
		}
	});
	return Sg;
});