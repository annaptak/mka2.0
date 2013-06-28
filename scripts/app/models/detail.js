define(['app/views/detail', 'app/views/recommendedlist'], function(DetailView, RecommendedListView){
	var Detail = Backbone.Model.extend({

		fetch: function(_id) {
			var that = this,
				prefix = 'PULS_CMS-Article-',
				id = prefix + _id;
			
			queryOnet.getNewsDetail(id, function(err, result) {
				if (err === null) {
					console.log(result);

					result.meta.image.url = new ResizeImg(result.meta.image.url, 350, 95).getUrl();
					that.set({'news': result});
					that.render();

					queryOnet.getRecommendedBox(_id, result.meta.rel.canonical.path, function(errRec, resultRec) {
						if (errRec === null) {
							that.set({'rec': resultRec});
							console.log(resultRec);
							that.renderRecommendedList();
						}
					});
				}
			});
		},
		
		render: function(_result) {
			var view = new DetailView({model: this});
		},

		renderRecommendedList: function() {
			var view = new RecommendedListView({model: this});
		}
	});

	return Detail;
});