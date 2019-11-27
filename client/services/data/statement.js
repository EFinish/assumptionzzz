import HttpService from '../utility/http';

export default (function() {
	const get = function(params) {
		return HttpService.get('/statement', params);
	};

	return {
		get
	};
})();