(function(window) {
	var _queryString = {};

	(function(){
		var query = window.location.href.split('?')[1],
			queryArray = query.split('&'),
			paramParts;
		for(var i = 0; i < queryArray.length; i++) {
			paramParts = queryArray[i].split('=');
			_queryString[paramParts[0]] = (paramParts[1]) ? paramParts[1] : '';
		}
	}());

	var querystring = function querystring(name) {
		if(arguments.length > 0) {
			return (_queryString.hasOwnProperty(name)) ? _queryString[name] : null;
		}
		return _queryString;
	};

	window.querystring = querystring;

}(window, undefined));
