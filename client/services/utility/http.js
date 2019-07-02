import request from 'superagent';
import Promise from 'bluebird'

export default (function() {
	const get = function(url, data) {
		return new Promise(function(resolve, reject) {
			request.get(url).query(data)
				.then(function(response) {
					resolve(response.body);
				})
				.catch(function(error) {
					resolve(error.response.body);
				});
		});
	};

	const post = function (url, data) {
		return new Promise(function (resolve, reject) {
			request.post(url).query(data)
				.then(function (response) {
					resolve(response.body);
				})
				.catch(function (error) {
					resolve(error.response.body);
				});
		});
	}; 

	return {
		get,
		post
	};
})();