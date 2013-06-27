define(['app/models/sgdetail'],function(SgDetail){
	var Sg = Backbone.Collection.extend({
		model: SgDetail,
		fetch:  function(){
			var that = this;
			queryOnet.getAllNews({}, function(err, result){

			};
		}
	});
	return Sg;
});