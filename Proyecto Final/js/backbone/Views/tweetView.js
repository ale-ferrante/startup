

var templateTD='<div class="alert alert-success alert-dismissible" role="alert">'+
 '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+ 
'<div class="panel panel-success tweet">'+
  '<div class="panel-heading">'+
    '<h3 class="panel-title"><%= user.name  %> - @<%= user.screen_name %></h3>'+
  '</div>'+
  '<div class="panel-body">'+
    '<div class="profile-pic" style="float : left">'+
    	'<img src="<%= user.profile_image_url %>" alt="" height="120" width="120">'+
    '</div>'+
    '<div class="tweet-content">'+
    	'<%= text %>'+
    '</div>'+
    '<div class="tweet-stats">'+
    	'<i class="fa fa-share">&nbsp</i>'+
    	'<%= retweet_count %>  '+
    	'<i class="fa fa-star">&nbsp</i>'+
    	'<%= favorite_count %>  '+
    	'<i class="fa fa-clock-o">&nbsp</i>'+
    	'<%= created_at.split("+")[0] %>  '+
    '</div>'+
  '</div>'+
'</div>'+
 '</div>';




var tweetView = Backbone.View.extend({

	el: '.page',

	render: function(o){

		var that = this;
		var template = _.template(templateTD);
		console.log(o);
		if (o.attributes){

			that.$el.html((template(o.attributes)));
		}else{
			that.$el.html((template(o)));
		}

		
	} 

})