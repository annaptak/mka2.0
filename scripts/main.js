requirejs.config({
	  paths: {
//	    jQuery: 'jquery',
	    sidr: '/scripts/menu/jquery.sidr.min',
	    wipetouch: '/scripts/menu/jquery.wipetouch',
	    iscroll: '/scripts/iscroll',
	    Menu: '/scripts/menu/Menu',
	    Underscore: '/scripts/underscore',
	    Backbone: '/scripts//backbone',
	    JSONPLoader: '/scripts/JSONPLoader',
	    Swipe: './jquery.swipe',
	    queryOnet: '/scripts/queryOnet',
	    CryptoJS: '/scripts/utils/md5',
	    StrBuf: '/scripts/utils/buffer',
	    Base64: '/scripts/utils/base64',
	    resizeImg: '/scripts/utils/resizeImg'
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