requirejs.config({
	  paths: {
	    jQuery: '/scripts/jquery-2.0.2.min',
	    Underscore: '/scripts/underscore',
	    Backbone: '/scripts//backbone'
	  },	
		shim: {
			'Backbone': ['Underscore', 'jQuery'],
			'm': ['Backbone']
		}
});

require(['m'], function(test) {
  console.log("test");
});