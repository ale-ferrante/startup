var timeline = Backbone.Collection.extend({
	model : tweet,
	url : "http://localhost:3000/timeline?count=100"

})