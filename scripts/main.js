requirejs.config({
	  paths: {
//	    jQuery: 'jquery',
	    sidr: 'menu/jquery.sidr.min',
	    wipetouch: 'menu/jquery.wipetouch',
	    iscroll: 'iscroll',
	    Menu: 'menu/Menu',
	    Underscore: 'underscore',
	    Backbone: 'backbone',
	    JSONPLoader: 'JSONPLoader',
	    Swipe: 'jquery.swipe',
	    queryOnet: 'queryOnet',
	    CryptoJS: 'utils/md5',
	    StrBuf: 'utils/buffer',
	    Base64: 'utils/base64',
	    resizeImg: 'utils/resizeImg'
	  },	
		shim: {
			'Backbone': [
				'Underscore','sidr','wipetouch','iscroll',
				'Menu','JSONPLoader','Swipe', 'queryOnet', 'CryptoJS',
				'StrBuf', 'Base64', 'resizeImg'
			],
			'm': ['Backbone']
		}
});

require(['m'], function(test) {
  //console.log("test");
});