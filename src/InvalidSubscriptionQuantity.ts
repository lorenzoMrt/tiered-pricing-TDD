export class InvalidSubscriptionQuantity extends Error {
	constructor() {
		super();
		this.name = this.constructor.name;
	}
}
