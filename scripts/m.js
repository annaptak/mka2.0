define(['app/collections/sg'], function(Sg){
	$(function(){
		//start routing
		MkRouter = Backbone.Router.extend({
			routes:{
				"": "index",
				"list": "list"
			},

			index: function(){
				console.log("index");
				var sg = new Sg;
				sg.fetch();	
			},

			list: function(){
				console.log("list");
			}
		});

		//model TODO

		var router = new MkRouter;
		Backbone.history.start();
	});
});