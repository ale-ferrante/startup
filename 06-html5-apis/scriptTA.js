


$(document).ready(function() {

	var ini = indexedDB.open("mibase",2);
	var bd;
	ini.onsuccess = function (e){
		bd = e.target.result;
	};

	ini.onupgradeneeded = function (e){
		bd = e.target.result;
		bd.createObjectStore ("texto", {keyPath: "id"});
	}


	$("#button").click(function(event) {
		//indexed db
		console.log(bd);
		var val = $("#text").val();
		var id = $.now();
		var transac = bd.transaction(["texto"], "readwrite");
		var store = transac.objectStore("texto");
		var addItem = store.add({id : id, texto : val});

		//LOCALSTORAGE
		localStorage.setItem(id,val);
		alert("Se guardo con exito!");

		//envio de texto por el socket
		console.log('SENT:'+val);
    	websocket.send(val);

		});
	
	$("#clear").click(function(event) {
		//INDEXED DB 
 		console.log(bd);
 		var transac = bd.transaction(["texto"], "readwrite");
		
		var store = transac.objectStore("texto");
		var request = store.clear();


		//LOCALSTORAGE
		localStorage.clear();
		alert("Se borraron los datos");
		});

		function handleFileSelect(evt) {
	    evt.stopPropagation();
	    evt.preventDefault();

	    var files = evt.dataTransfer.files; // la lista de archivos

	    var reader = new FileReader(); // el reader me deja leer el archivo

		var result;
	    for (var i = 0, f; f = files[i]; i++) {
	      	reader.readAsText(f);
	      	reader.onloadend = function(){
	      		 	  $("#text").val(reader.result) ; // cuando termina me carga el resultado en reslut
	      	}
	    	}
	 	 };	

	 	 function handleDragOver(evt) {
	  	 evt.stopPropagation();
	   	 evt.preventDefault();
	   	 evt.dataTransfer.dropEffect = 'copy';  // cancelo default
	  }

	  var dropZone = document.getElementById('text'); // defino la dropzone y agrego los handlers de los eventos
	  dropZone.addEventListener('dragover', handleDragOver, false);
	  dropZone.addEventListener('drop', handleFileSelect, false);

	  websocket= new WebSocket("wss://echo.websocket.org");
		
	websocket.onmessage=function(evt) {
		console.log("RESPONSE: " + evt.data);
  	}


	websocket.onerror=function(evt) {
		 console.log('ERROR: ' + evt.data); 
	}  



});