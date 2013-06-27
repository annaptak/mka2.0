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
        var minusTopics  = _params.minusTopics? _params.minusTopics: null;
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
		if(minusTopics){
			params.keys.unshift("minusTopics");
			params.minusTopics = minusTopics;
		}
		if(topics){
			params.keys.unshift("topics");
			params.topics = topics;
		}
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
    }
}