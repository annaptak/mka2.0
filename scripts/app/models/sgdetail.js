define(['app/views/sgdetail'], function(SgDetailView){
	var SgDetail = Backbone.Model.extend({

		fetch: function() {
			return queryOnet.getNewsDetail('PULS_CMS-Article-6b97445c-739d-40bd-8d7e-d9e69044c464');
		},
		
		render: function(){
			console.log(render);
		}
	});

	return SgDetail;
});