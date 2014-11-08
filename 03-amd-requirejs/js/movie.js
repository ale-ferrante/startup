define('movie', ['director'], function (Director) {

 var movie = function () {
    this.titulo = '';
	this.duracion = '';
	this.anio = '';
	this.estudio = '';
  	this.actores=[]; 
    };
    
    movie.prototype = movie;

	movie.prototype.play = function (){
   		console.log("Reproduciendo "+ this.titulo);
	}

	movie.prototype.stop = function (){
    console.log("Se detuvo "+ this.titulo);
	}

	movie.prototype.set = function (atributo , valor){
	 	this[atributo] = valor;
	}

	movie.prototype.get = function (atributo){
		return this[atributo];
	}

	movie.prototype.addActor = function (actor){
    	this.actores.push(actor); 
	}

	return movie;
});