define(['app/models/sgdetail'],function(SgDetail){
	var Sg = Backbone.Collection.extend({
		model: SgDetail,
		fetch:  function(){
			console.log("Fetch Data");
		}
	});
	return Sg;
});