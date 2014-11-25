var templateTL='<div id="<%= tweet.attributes.id %>"class="panel panel-success tweet-container">'+
  '<div class="panel-heading">'+
  '<div style="float : right"><button type="button" class="blockuser" id="<%=tweet.attributes.user.screen_name%>"><a href="#"><i id="blocked" class="fa fa-ban"></i></a></button></div>'+
    '<h3 class="panel-title"><%= tweet.attributes.user.name  %> - @<%= tweet.attributes.user.screen_name %></h3> <h6> <%= tweet.attributes.retweeted_status ? " Retweetó" : "" %></h6>'+
  '</div>'+
  '<div class="panel-body" id="<%= tweet.attributes.id %>">'+
    '<div class="profile-pic" style="float : left">'+
      '<img src="<%= tweet.attributes.user.profile_image_url %>" alt="" height="60" width="60">'+
    '</div>'+
    '<div class="tweet-content" style="padding-left: 5%;">'+
      '<%=tweet.attributes.retweeted_status ? tweet.attributes.retweeted_status.text : tweet.attributes.text %>'+
    '</div>'+
    '<input id="created_at" type="hidden" value="<%= tweet.attributes.created_at %></input>">'+
    '<input id="favorite_count" type="hidden" value"<%= tweet.attributes.favorite_count %>"></input>'+
    '<input id="retweet_count" type="hidden" value="<%= tweet.attributes.retweet_count %>"></input>'+
  '</div>'+
'</div>';

var singletweetView = Backbone.View.extend({

      tagName: 'article',
      className: 'single',
      model: tweet,
      
      render: function(tw){
        var template = _.template(templateTL);
        this.model = tw;
        this.$el.append(((template({'tweet' : this.model}))))

     
      },
     events:{'click .panel-body':function (event){

            console.log(this.model);
            var tv = new tweetView()
            tv.render(this.model);
                    

          }
        }

});
