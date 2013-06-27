define(['app/views/detail'], function(DetailView){
	var Detail = Backbone.Model.extend({

		fetch: function(_id) {
			var that = this,
				prefix = 'PULS_CMS-Article-',
				id = prefix + _id;
			
			queryOnet.getNewsDetail(id, function(err, result) {
				if (err === null) {
					console.log(result);
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