define('director', function (){

 var director = function (nombre) {
    this.nombre = nombre
	this.quotes = [];
    };
    
    director.prototype = director;
	

	director.prototype.set = function (atributo , valor){
	 	this[atributo] = valor;
	}

	director.prototype.get = function (atributo){
		return this[atributo];
	}

	director.prototype.speak = function (){
   	 	//console.log(this.nombre +"say "+this.quotes.toString());
   		return this.nombre +"say "+this.quotes.toString();
	}
	
	return director;
});
