import { InvalidSubscriptionQuantity } from "./InvalidSubscriptionQuantity";

export default class SubscriptionQuantity {
	constructor(public value: number) {
		if (value < 0) {
			throw new InvalidSubscriptionQuantity();
		}
	}
}
