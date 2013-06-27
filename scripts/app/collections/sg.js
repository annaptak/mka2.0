define(['app/models/sgdetail','app/views/sgdetail'],function(SgDetail,SgDetailView){
	var Sg = Backbone.Collection.extend({
		model: SgDetail,
		fetch:  function(){
			var that = this;
			queryOnet.getAllNews({}, function(err, result){
				if(result){
					console.log(result);
					that.add(result);
					that.render();
				}
			});
		},
		render: function(){
			this.each(function(element){
				var view = new SgDetailView({model: element});
			});
		}
	});
	return Sg;
});