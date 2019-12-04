import request from 'request';

class StatementService {
	create(data) {
		return request.post('localhost:425/api/statement').form(data);
	}
}

export default StatementService;