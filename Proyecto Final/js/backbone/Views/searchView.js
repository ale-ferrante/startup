
var searchView = Backbone.View.extend({

	el: '.page',
	collection: s = new search(),
	render: function(query){
		var that = this;
		var a = new api()
		console.log(String(query.query));
		var filteredS = new search();
		this.collection.fetch({
			async:false,
			data: $.param({q: query.query}),
			success: function (){
				$.each(s.models[0].attributes.statuses, function(index, val) {
					//console.log(val);
					c = a.get(val.user.screen_name);
					if (c == null){
						filteredS.add(val);
					}
				});
				console.log(filteredS);
				var nombre = query.query.replace('+', " ")
				nombre=nombre.replace('+', " ")
				console.log(nombre);
				(that.$el).html("<h3> Busqueda:"+nombre+"</h3>");
				$.each(filteredS.models, function(index, val) {
         		  var tw = new tweet(val);
           			var st = new singletweetView();
            		st.parent=that;
            		$(that.el).append(st.el);
           			st.render(tw.attributes);

        		});

			},
			error : function(d) {
           		alert("El servidor no responde, intente mas tarde");
      		}
		})
		
	} 

})