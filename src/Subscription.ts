import SubscriptionQuantity from "./SubscriptionQuantity";

export default class Subscription {
	constructor(private readonly quantity: SubscriptionQuantity) {}

	total(): number {
		if (this.quantity.value < 3) {
			return 299 * this.quantity.value;
		}
		if (this.quantity.value >= 3 && this.quantity.value <= 10) {
			return 239 * this.quantity.value;
		}
		if (this.quantity.value >= 11 && this.quantity.value <= 25) {
			return 219 * this.quantity.value;
		}
		if (this.quantity.value >= 26 && this.quantity.value <= 50) {
			return 199 * this.quantity.value;
		}

		return 149 * this.quantity.value;
	}
}
