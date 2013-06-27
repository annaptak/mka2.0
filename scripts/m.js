define(['app/views/indexview','app/collections/sg'], function(IndexView,Sg){
	$(function(){
		//start routing
		var MkRouter = Backbone.Router.extend({
			routes:{
				"": "index",
				"list": "list",
				"detail/:id": "detail"
			},

			index: function(){
				/*
				console.log("index");
				var sg = new Sg;
				sg.fetch();	*/
				var index = new IndexView();
			},

			list: function(){
				console.log("list");
			},

			detail: function(_id) {
				console.log(_id);
				console.log('detail');
			}
		});

		//model TODO

		var r = new MkRouter;
		Backbone.history.start();
	});
});