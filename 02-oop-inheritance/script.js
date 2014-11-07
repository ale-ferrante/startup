// implementaicon calse movie
function movie (titulo, duracion, anio, estudio){
	this.titulo = titulo;
	this.duracion = duracion;
	this.anio = anio;
	this.estudio = estudio;
  this.actores=[];
}

movie.prototype.play = function (){
   $.publish('Play', this.get('titulo'));
}

movie.prototype.stop = function (){
     $.publish('Stop', this.get('titulo'));
}

movie.prototype.set = function (atributo , valor){
	 switch(atributo)
        {
            case "titulo":
                this.titulo=valor;
                break;
            case "duracion":
                this.duracion=valor;
                break;
            case "anio":
                this.anio=valor;
                break;
            case "estudio":
                this.estudio=valor;
                break;
        }
}

movie.prototype.get = function (atributo){
	switch(atributo)
        {
            case "titulo":
                return this.titulo;
                break;
            case "duracion":
                return this.duracion;
                break;
            case "anio":
                 return this.anio;
                break;
            case "estudio":
                 return this.estudio;
                break;
            case "actores":
                 return this.actores;
            break;
        }
}

movie.prototype.addActor = function (actor){
    this.actores.push(actor); 
}


// IMPLEMENTACION MOVIE OBSERVER

function movieObserver(){
	$.subscribe("Play", function (e, titulo) {
    console.log("Reproduciendo " + titulo);
  });
  $.subscribe("Stop", function (e, titulo) {
    console.log("Se detuvo " + titulo);
  });
  $.subscribe("Megusta", function (e, titulo) {
    console.log("Me gusta " + titulo);
  });
   $.subscribe("Compartir", function (e, titulo, amigo) {
    console.log('Compartiendo ' +  titulo + ' con ' + amigo);
  });
}




// IMPLEMENTACION DE DOWNLOADBLEMOVIE, EXTIENDE DE MOVIE

function downloadableMovie (titulo, duracion, anio, estudio){
      movie.call(this, titulo, duracion, anio, estudio); // LLAMO AL CONSTRUCTOR DE MOVIE CON LOS PARAMETROS QUE CORRESPONDEN
}

downloadableMovie.prototype =  new movie; // ACA SE MARCA LA HERECIA ASIGNANDO EL PROTO DE DWLM COMO MOVIE
downloadableMovie.prototype.constructor = downloadableMovie ;
downloadableMovie.prototype.download = function (){
    console.log("Descargando "+ this.titulo);
}

// IMPLEMENTACION MIXIN SOCIAL

var social = {

    share : function (amigo) {
     // console.log('Compartiendo ' + this.get('titulo') + ' con ' + amigo);
      $.publish('Compartir', [this.get('titulo') , amigo]);
      },

    like : function(){
      $.publish('Megusta', this.get('titulo'));
     // console.log("Me gusta " + this.get('titulo'));
    }

};
$.extend(movie.prototype, social); // hay otra forma de hacer esto??

// modulo de movie
 var movieModule =(function () {
   
      this.titulo = '';
      this.duracion = 0;
      this.anio = '';
      this.estudio = '';

return {
   play : function (){
   $.publish('Play', this.get('titulo'));
    },

stop : function (){
     $.publish('Stop', this.get('titulo'));
    },

set : function (atributo , valor){
   switch(atributo)
        {
            case "titulo":
                this.titulo=valor;
                break;
            case "duracion":
                this.duracion=valor;
                break;
            case "anio":
                this.anio=valor;
                break;
            case "estudio":
                this.estudio=valor;
                break;
        }
},

get : function (atributo){
  switch(atributo)
        {
            case "titulo":
                return this.titulo;
                break;
            case "duracion":
                return this.duracion;
                break;
            case "anio":
                 return this.anio;
                break;
            case "estudio":
                 return this.estudio;
                break;
        }
    }

  }
 }());


// implementacion clase actores 
function actor (nombre){
  this.nombre = nombre;
}

actor.prototype.setNombre = function (nombre){
  this.nombre = nombre ;
}

actor.prototype.getNombre = function (){
  return this.nombre ;
}




var peli1 = new movie ("Terminator 1",30,1826,"Estudio");
var peli2 = new movie ("Toy Story",30,2013,"Estudio");
var peli3 = new movie ("Terminator 3",30,1826,"Estudio");
var mo = new movieObserver();
var dwlmovie = new downloadableMovie ("Titanic",30,1826,"Estudio");

var actor1 = new actor("Pepe");
var actor2 = new actor("Carlos");


peli1.play();
peli1.addActor(actor1);
peli1.addActor(actor2);
peli1.stop();
peli2.play();
peli3.play();
peli3.like();
peli1.share("Carlos");

dwlmovie.play();
dwlmovie.download();
dwlmovie.addActor(actor2);
movieModule.set('titulo',"Otro titulo");
movieModule.play();

console.log(peli1.get('actores'));
console.log(dwlmovie.get('actores'));