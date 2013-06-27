requirejs.config({
	  paths: {
	    jQuery: './jquery-2.0.2.min',
		Swipe: './jquery.swipe',
	    Underscore: './underscore',
	    Backbone: './/backbone',
	    JSONPLoader: './JSONPLoader',
	    queryOnet: './queryOnet'
	  },	
		shim: {
			'Backbone': ['Underscore', 'jQuery', 'Swipe','JSONPLoader','queryOnet'],
			'm': ['Backbone']
		}
});

require(['m'], function(test) {
  //console.log("test");
});