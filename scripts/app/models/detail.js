define(['app/views/detail'], function(DetailView){
	var Detail = Backbone.Model.extend({

		fetch: function() {
			var id = 'PULS_CMS-Article-e8503c1c-24d7-4b0e-8980-85598ccb4937';
			queryOnet.getNewsDetail(id, function(err, result) {
				console.log(result);
				if (result) {
					that.set(result);
					that.render();
				}
			});
		},
		
		render: function(_result) {
			var view = new DetailView({model: this});
		}
	});

	return Detail;
});