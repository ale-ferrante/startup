function api (){


}

api.prototype.getAllBlockedUsers = function() {
		var bUserslist = ' {"bUsers": ['  ;
		var local = $(localStorage);
	
		for (x=0; x<=localStorage.length-1; x++)  {  
  			clave = localStorage.key(x); 
  			 bUserslist =bUserslist  + '"'+(localStorage.getItem(clave))+'"' ;
  			 if (x != localStorage.length-1) {
  			 	 bUserslist =bUserslist  + ","
  			 }
			}
		bUserslist = bUserslist + "] }";
		return ($.parseJSON(bUserslist));
		
} 


api.prototype.save = function(o) {
		/*console.log(o);
		var len = localStorage.length;
		if (len == 0) {
			localStorage.setItem("1", o);
		}else {
			 localStorage.setItem(String(len+1),o);
			}*/
		localStorage.setItem(o, o);
} 

api.prototype.remove = function(id) {
		
		return localStorage.removeItem(id);
} 


api.prototype.get = function(id) {
		
		return localStorage.getItem(id);
} 
