define([],function(){
	var Detail = Backbone.View.extend({
		tagName: 'div',
		events:{
			
		},
		template: _.template($('#detail').html()),
		initialize: function(){
			//this.listenTo(this.model, "change", this.render);
			//this.listenTo(this.model, "destroy", this.remove);
			console.log('Detail View Init');
            $('#loader').remove();
			this.render();
		},
		render: function(){
			console.log(this.el);
			console.log('*************************');
			console.log(window.backVar);
			console.log(this.model.toJSON()['news']['meta']['identifier'], window.ids);
			if(window.backVar){
				$('body').slideFrom(this.template(this.model.toJSON()));
				window.backVar = false;
			} else {
				$('body').slideTo(this.template(this.model.toJSON()));
			}
			
			this.$el.html(this.template(this.model.toJSON()));
			window.ids.push(this.model.toJSON()['news']['meta']['identifier']);
			
			//$('#wrapper').append(this.$el);
		}
	});
	return Detail;
})