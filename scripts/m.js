define([], function(){
	$(function(){
		//start routing
		FirstRouter = Backbone.Router.extend({
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

		var router = new FirstRouter;
		Backbone.history.start();
	});
});