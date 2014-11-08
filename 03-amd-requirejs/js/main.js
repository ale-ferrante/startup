define('main', ['jquery','movie', 'director'], function($, Movie, Director){
    
    var alien = new Movie();
    var director = new Director('Rildey Scott');
    
    alien.set('titulo', 'alien');   
   	director.set('quotes',['Cast is everything.', 'Do what ...']);
    alien.set('director', director); 
    console.log(alien.get('director').speak());
    console.log(director.speak());
    
});