//ACORDARME DE SACAR EL TEMPLATE DE ACA
var temp = "<a href='#/new' class='btn btn-primary'>Agregar</a> <hr /><table class='table striped' ><thead><tr><th>Titulo</th><th>Categoria</th><th>Editar</th><th></th></tr></thead><tbody><% _.each(movies, function(movie,index) { %><tr><td><%= movie.titulo %></td><td><%= movie.categoria %></td><td><a class='btn btn-default' href='#/edit/<%= index+1 %>'><i class='fa fa-pencil'></i></a></td></tr><% }); %></tbody></table>"


var Vista = Backbone.View.extend({

	el: '.page',

	render: function(){
		var that = this;
		var movie = new Movie();
		var movielist = movie.getAllMovies();
		console.log(movielist);
		var template = _.template(temp);
		console.log(template);
		console.log(movielist);
		that.$el.html(template(movielist));
	} 

})