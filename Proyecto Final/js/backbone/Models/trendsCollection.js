var trends = Backbone.Collection.extend({
	model : tweet,
	url : "http://localhost:3000/trends?id=23424747"

})