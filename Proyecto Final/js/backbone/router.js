var Router = Backbone.Router.extend({
	routes:{
		'' : 'timeline',
		'blockedusers' : 'blockedusers',
		'trends' : 'trends',
		'view' : 'viewtweet',
		'#' : 'timeline',
		'search/:query' : 'searchTrend',
	}
})