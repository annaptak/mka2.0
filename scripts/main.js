requirejs.config({
	  paths: {
//	    jQuery: 'jquery',
	    sidr: '/scripts/menu/jquery.sidr.min',
	    wipetouch: '/scripts/menu/jquery.wipetouch',
	    iscroll: '/scripts/iscroll',
	    Menu: '/scripts/menu/Menu',
		Swipe: './jquery.swipe',
	    Underscore: '/scripts/underscore',
	    Backbone: '/scripts//backbone',
	    JSONPLoader: '/scripts/JSONPLoader',
	    queryOnet: '/scripts/queryOnet'
	  },	
		shim: {
			'Backbone': ['Underscore','sidr', 'Swipe', 'wipetouch','iscroll','Menu','JSONPLoader','queryOnet'],
			'm': ['Backbone']
		}
});

require(['m'], function(test) {
  //console.log("test");
});