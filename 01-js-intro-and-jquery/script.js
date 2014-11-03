$.resalta_nombre = function resalta_nombre(nombre){
			var x = document.getElementById("respuesta").innerHTML;
			var arreglo = x.split(" ");
			arreglo[1] = "<b> "+arreglo[1]+"</b>"
			document.getElementById("respuesta").innerHTML = arreglo;
	};
		

	window.onload = function () {
   		$("#section").fadeIn();
   		$(".alias").focus();
   		$("#boton").click(function(event) {
   			var result;
   			var nombre = $("#nombre").val();
   			$.ajax({
  			url: "http://bootcamp.aws.af.cm/welcome/"+nombre,
  			success: function(data) {
            	result = data["response"];
        	},
        	error: function(data) {
        		$("#section").css("color","red");
        	},
        	async: false
			});
			var x = document.getElementById("section").innerHTML;
			document.getElementById("respuesta").innerHTML = result;
			$("#nombre").val("");
			$.resalta_nombre(nombre);
   		});
   		
   		
   		$.ajax({
  			url: "http://localhost:3000/search",
  			data: "q=html5",
  			success: function(data) {
  				$.each(data["statuses"], function(index, val) {
            var ima = '"'+val["user"].profile_image_url+'">';
            console.log(ima);
  					var tweet ="<article > <img src=" + ima +"@" + val["user"].name + " Tweet: " + val.text + " Fecha de publicacion: " + val.created_at + " </article>";
  					 $("#cont").append(tweet +"\n");
  				});
        	},
        	async: false
			});
	
	}