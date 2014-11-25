

var templateTRN='<div class="list-group">'+
'<% _.each(trends, function(trend){ %>'+
  '<a href="#/search/<%= trend.query%>" class="list-group-item"><%= trend.name %></a>'+
  '<%});%>'+
'</div>'



var trendsView = Backbone.View.extend({

	el: '.page',

	render: function(){
		var that = this;
		var tr = new trends;
		console.log(tr);
		var template = _.template(templateTRN);
		console.log(templateTRN);
		tr.fetch({
			success : function (){
				console.log(tr);
				console.log(tr.models[0].attributes.trends);
				that.$el.html(((template({'trends' : tr.models[0].attributes.trends}))));
			},
			error : function(d) {
           		alert("El servidor no responde, intente mas tarde");
     		}
		})
		
	} 

})