import HttpService from '../utility/http';
import { API_INFIX_V1 } from '../../constants';

const API_PREFIX_STATEMENT = '/statement'

export const StatementService = (function() {
	const get = function(params) {
		return HttpService.get(API_INFIX_V1 + API_PREFIX_STATEMENT, params);
	};

	return {
		get
	};
});