$(document).ready(function() {
	
	var ctx = document.getElementById('canvas').getContext('2d');
	
	// DOS RECTANGULOS
	ctx.fillStyle = "orange";
	ctx.strokeStyle = "green";

	ctx.fillRect(200,10,85,37);
	
    ctx.strokeRect(110,100,50,50);

    // triangulo
    ctx.fillStyle = "red";
	ctx.fillStroke = "black";
    
    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.fill();

    // circulo

    
    ctx.arc(12.5,25,12.5,0,(Math.PI*2),true);

   

});