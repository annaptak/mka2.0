requirejs.config({
	  paths: {
	    jQuery: 'jquery',
	    sidr: '/scripts/menu/jquery.sidr.min',
	    wipetouch: '/scripts/menu/jquery.wipetouch',
	    iscroll: '/scripts/iscroll',
	    Menu: '/scripts/menu/Menu',
	    Underscore: '/scripts/underscore',
	    Backbone: '/scripts//backbone',
	    JSONPLoader: '/scripts/JSONPLoader',
	    queryOnet: '/scripts/queryOnet'
	  },	
		shim: {
			'Backbone': ['Underscore', 'jQuery','sidr','wipetouch','iscroll','Menu','JSONPLoader','queryOnet'],
			'm': ['Backbone']
		}
});

require(['m'], function(test) {
  console.log("test");
});