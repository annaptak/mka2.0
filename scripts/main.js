requirejs.config({
	  paths: {
	    jQuery: '/scripts/jquery-2.0.2.min',
	    Underscore: '/scripts/underscore',
	    Backbone: '/scripts//backbone',
	    JSONPLoader: '/scripts/JSONPLoader',
	    queryOnet: '/scripts/queryOnet'
	  },	
		shim: {
			'Backbone': ['Underscore', 'jQuery','JSONPLoader','queryOnet'],
			'm': ['Backbone']
		}
});

require(['m'], function(test) {
  console.log("test");
});