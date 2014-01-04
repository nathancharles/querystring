/*
Parameter formats
key=value
key=with spaces
key=with%20spaces
key=with+spaces
key=
key
 */

(function(window) {
	var _queryString = {};

	/**
	 * IFFE function to parse query string and store values in _queryString
	 * @see http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
	 * 		nice search regex: /([^&=]+)=?([^&]*)/g
	 * @param  {String} currentUrl
	 */
	(function(currentUrl){
		// TODO: fix the parsing if no query parameters exist
		// regex search?
		var query = currentUrl.split('?')[1] || '',
			search = /([^&=]+)=?([^&]*)/g,
			queryArray = query.split('&'),
			paramParts;

		for(var i = 0; i < queryArray.length; i++) {
			paramParts = queryArray[i].split('=');
			_queryString[paramParts[0]] = decodeURIComponent((paramParts[1]) ? paramParts[1] : '').replace(/\+/g, ' ');
		}
	}(window.location.href));

	/**
	 * Accessor method to retrieve querystring values or the entire set of values
	 * @param  {String} name
	 * @return {Mixed}	Returns the value of the named parameter passed in, or null.
	 * 					If called with nothing passed in, it returns the entire _queryString object
	 */
	var querystring = function querystring(name) {
		if(arguments.length > 0) {
			if(typeof name === 'string') {
				return (_queryString.hasOwnProperty(name)) ? _queryString[name] : null;
			}else{
				throw "The parameter name must be a string";
			}
		}
		return _queryString;
	};

	window.querystring = querystring;

}(window, undefined));
