
	var TLview = new timeLineView({model: new tweet()});	
	var tweetV = new tweetView();
	var trendsV = new trendsView();
	var router = new Router();
	var searchV = new searchView();
	var blockedUV = new blockedUsersView();
	var p = new api();

	router.on('route:timeline', function () {
		TLview.render(); 
	})
	router.on('route:trends', function () {
		trendsV.render();
	})
	router.on('route:searchTrend',function(query){
		console.log("r ok");
		searchV.render({query : query});
	})
	router.on('route:blockedusers',function(){
		console.log("r ok");
		blockedUV.render();
	})
	router.on('route:viewtweet',function(){
		console.log("r v");
	})

	Backbone.history.start();

	$(document).ready(function() {

		$('#overlay').fadeOut();
		$(".item-menu").on('click',  function(event) {
			$(".item-menu").removeClass('active');
			$(this).addClass('active');
		});

		$("#page").on('click',".blockuser", function(event) {
			var a = new api();
			var userID = $(event.currentTarget.id);
			a.save(userID.selector);
			alert("Se bloqueo al usuario "+userID.selector);
			window.location.reload(true);
		});

		$("#page").on('click',".deleteBU", function(event) {
			var a = new api();
			var userID = $(event.currentTarget.id);
			console.log(userID.selector);
			a.remove(userID.selector);

			alert("Se desbloqueo al usuario "+userID.selector);
			window.location.reload(true);
		});

		$("#page").on('click',".close", function(event) {
			console.log(window.history)
			console.log(window.location)
			window.history.back();
			window.location.reload(true);
		});

	
});

