export class ResponsePayload {
	constructor(success, data = {}, additionalData = {}) {
		this.success = success;
		this.data = data;
		this.additionalData = additionalData;
	}
}