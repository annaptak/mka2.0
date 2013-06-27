var JSONPLoader = function() {
    this.appId = null;
};

JSONPLoader.callbacks = {};
JSONPLoader.callbacksCount = 0;

JSONPLoader.prototype.getJSON = function(url, params, callback) {
    var src = url + (url.indexOf("?")+1 ? "&" : "?");
    var script = document.createElement("script");

    this.success = callback;

    JSONPLoader.callbacksCount++;
    JSONPLoader.callbacks['success' + JSONPLoader.callbacksCount] = callback;

    params["callback"] = "JSONPLoader.callbacks.success" + JSONPLoader.callbacksCount;

    src += JSONPLoader.serialize(params);

    script.type = "text/javascript";  
    script.src = src;

    var head = document.getElementsByTagName("head")[0];
    head.appendChild(script);
};
JSONPLoader.prototype.getJSONRPC = function(service, method, params, callback) {
    var src = (service.match("http://") ? "" : "http://") + service + "/";
    var data = {};
    
    if (this.appId) {
        data['x-onet-app'] = this.appId;
    }
	
	data["content-type"] = "application/jsonp";
	data.body = {
		"jsonrpc": "2.0",
		"id": method + (+new Date()),
		"method": method,
		"params": params
	};
	
    var newCallback = function(result) {
        if (result.hasOwnProperty('error')) {
            callback(result.error, result.result);
        } else {
            callback(null, result.result);
        }
    };
	
    this.getJSON(src, data, newCallback);
};

// two following functions were taken from jquery (http://jquery.com/) and modified here a bit
JSONPLoader.serialize = function (a) {
	var s = [],
		add = function (key, value) {
			value = (value instanceof Function) ? value() : value;
			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
		};

	for (var prefix in a) {
		JSONPLoader._buildParams(prefix, a[prefix], add);
	}

	return s.join("&").replace(/%20/g, "+");
};

JSONPLoader._buildParams = function (prefix, obj, add) {
	if (obj instanceof Array) {
		for (var i = 0, l = obj.length; i < l; i++) {
			var v = obj[i];
			
			if (/\[\]$/.test(prefix)) {
				add( prefix, v );
			} else {
				JSONPLoader._buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, add );
			}
		}
	} else if (typeof obj === "object") {
		for (var name in obj) {
			JSONPLoader._buildParams(prefix + "[" + name + "]", obj[ name ], add);
		}
	} else {
		add(prefix, obj);
	}
};