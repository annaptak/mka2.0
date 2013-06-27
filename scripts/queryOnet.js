console.log("queryOnet");
var queryOnet = {
	/**
		_limtit
		_offset
	*/
	getAllNews: function(_params, _callback){
		_params = _params? _params: {};
		console.log(_params);
		var loader = new JSONPLoader();
        loader.appId = "jsonp.mobile.onetapi.pl";
        var url="search.newslist.mobile.onetapi.pl";
        var method="searchSorted";
        var offset = _params.offset? _params.offset: 0;
        var limit = _params.limit? _params.limit: 50;
        var topics  = _params.topics? _params.topics: null;
        var params= {
			"keys": [
				"servicePath",
				"objectType"
			],
			"offset": offset,
			"limit": limit,
			"serviceName": "Wiadomości",
			"solrOldUrl": false,
			"servicePath": [
				{
					"name": "*",
					"priority": 1
				}
			],
			"objectType": [
				{
					"name": "MobileNewsListElement",
					"priority": 1
				}
			]
		};

		if(topics){
			params.keys.push('topics');
			params.topics = topics;
		}
		console.log(params);
        loader.getJSONRPC(url, method, params, function(e, result){

        	if(e){
        		_callback("error", null);
        	}else{
        		//console.log(result.elements);
        		_callback(null, result.elements);
        	}
        });		
	},

	getNewsDetail: function(_newsId, _callback) {
		var loader = new JSONPLoader(),
			url = "query.mobile.onetapi.pl",
			method = "get",
        	params= [_newsId];

        loader.appId = "sport.windows.mobile-apps.onetapi.pl";

        loader.getJSONRPC(url, method, params, function(e, result){
        	if(e){
        		_callback("error", null);
        	}else{
        		//console.log(result.elements);
        		_callback(null, result);
        	}
        });
    },

    getRecommendedBox: function(_detId, _servicePath, _callback) {
    	var loader = new JSONPLoader();
			loader.appId = "jsonp.mobile.onetapi.pl";
			var url="search.newslist.mobile.onetapi.pl";
			var method="searchMoreLikeThis";

			/*var params={
				'keys': ['objectType', 'topics', 'servicePath'],
				'objectType': [{
					'name': 'MobileNewsListElement',
					'priority': 1
				 }],
				'topics': [{
						'name': RecommendedBox.topic,
						'priority': 1
					}
				],
				'offset': 0,
				'limit': 30,
				'serviceName': 'mobile',
				'solrOldUrl': false,
				'servicePath': [
					{
						'name': RecommendedBox.servicePath+'*',
						'priority': 1
					}
				]
			};*/

			// odkomentować dla dev i testów (ewentualnie zaktualizowac id)
			// RecommendedBox.detailId = '302afcde-70e7-47d3-8fb5-38912805cad2';
			// RecommendedBox.servicePath = 'styl-zycia.kobieta';
			//RecommendedBox = {};
			//RecommendedBox.detailId = '94bbb95e-6a94-432e-add1-f41a87ec5ccc';
			//RecommendedBox.servicePath = 'gadzety.gry';			
			var params = {
				'objectType': 'MobileNewsListElement',
				'id': _detId,
				'offset': 0,
				'limit': 6,
				//'serviceName': 'mobile',
				'solrOldUrl': false,
				'servicePath': _servicePath + '*',
				'qf': 'topics^50',
				'fl': 'title lead topics'
			};

			loader.getJSONRPC(url, method, params, function(e, result){
	        	if(e){
	        		_callback("error", null);
	        	}else{
	        		//console.log(result.elements);
	        		_callback(null, result);
	        	}
        	});
	}
}