import request from 'superagent';

export const HttpService = (function() {
	const get = function(url, data) {
		return function(resolve, reject) {
			request.get(url).query(data)
				.then(function(response) {
					resolve(response.body);
				})
				.catch(function(error) {
					resolve(error.response.body);
				});
		}
	};

	const post = function (url, data) {
		return function (resolve, reject) {
			request.post(url).query(data)
				.then(function (response) {
					resolve(response.body);
				})
				.catch(function (error) {
					resolve(error.response.body);
				});
		}
	}; 

	return {
		get: get,
		post: post
	};
})();