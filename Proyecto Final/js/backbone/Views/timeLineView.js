
var timeLineView = Backbone.View.extend({

	el: '.page',
	collection: tl = new timeline(),
	

	render: function(){

		var that = this;
		var filtered = new timeline();
		var a = new api();

		this.collection.fetch({
			async:false,
			success: function (){
				$.each(tl.models, function(index, val) {
				c = a.get(val.attributes.user.screen_name);
				if (c == null){
					filtered.add(val);
				}
				});
        (that.$el).html('');
  			$.each(filtered.models, function(index, val) {
           var tw = new tweet(val);
           var st = new singletweetView();
            st.parent=that;
            $(that.el).append(st.el);
           st.render(tw.attributes);
        });
			},
      error : function(d) {
           alert("El servidor no responde, intente mas tarde");
      }
		

    })
		
	} 



})
