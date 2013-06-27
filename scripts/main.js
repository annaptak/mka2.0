requirejs.config({
	  paths: {
	    jQuery: './jquery-2.0.2.min',
		Hammer: './jquery.hammer',
	    Underscore: './underscore',
	    Backbone: './/backbone',
	    JSONPLoader: './JSONPLoader',
	    queryOnet: './queryOnet'
	  },	
		shim: {
			'Backbone': ['Underscore', 'jQuery', 'Hammer','JSONPLoader','queryOnet'],
			'm': ['Backbone']
		}
});

require(['m'], function(test) {
  console.log("test");
});