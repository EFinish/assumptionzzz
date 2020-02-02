const db = require('../db');

class StatementsModel {
	constructor() {
		this.connection = db('statements');
	}

	async createStatement() {
		
	}
}