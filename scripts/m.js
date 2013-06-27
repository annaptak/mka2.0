define(['app/collections/sg'], function(Sg){
	$(function(){
		//start routing
		var MkRouter = Backbone.Router.extend({
			routes:{
				"": "index"
			},

			index: function(){
				console.log("index");
				var sg = new Sg;
				sg.fetch();	
			}
		});

		//model TODO

		var router = new MkRouter;	
		Backbone.history.start();
	});
});