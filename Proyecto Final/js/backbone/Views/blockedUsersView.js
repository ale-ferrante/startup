var templateBU = '<table  class="table">'+
	'<caption>Blocked Users</caption>'+
	'<tbody>'+
	'<% _.each(busers, function(user,index){ %>'+
		'<tr>'+
			'<td width="95%">@<%=user%></td>'+
			'<td width="5%"><button type="button" id=<%=user%> class="deleteBU"><i class="fa fa-trash"></i></button></td>'+
		'</tr>'+
	'<%});%>'+
	'</tbody>'+
'</table>'


var blockedUsersView = Backbone.View.extend({
	el: '.page',
	render: function(){
		var ls = new api();
		var bUsers = ls.getAllBlockedUsers();
		console.log(bUsers);
		var template = _.template(templateBU);
		this.$el.html(((template({'busers' : bUsers.bUsers}))))



	}
})