define([], function(){
	$(function(){
		//start routing
		MkRouter = Backbone.Router.extend({
			routes:{
				"": "index",
				"list": "list"
			},

			index: function(){
				console.log("index");		
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