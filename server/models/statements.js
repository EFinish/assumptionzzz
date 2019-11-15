const knex = require('knex');

class StatementsModel {
	constructor() {
		this.db = knex({
			client: 'mysql',
			connection: {
				host : 'localhost:430',
				user : 'ass',
				password : 'ass'
			}
		});
	}

	async getAll() {
		return await this.db.select().from('statements');
	}
}

module.exports = StatementsModel;

