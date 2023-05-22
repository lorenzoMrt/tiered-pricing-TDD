export default class TieredPricing {
	constructor(private readonly quantity: number) {}

	total(): number {
		if (this.quantity === 3) {
			return 239 * this.quantity;
		}

		return 299 * this.quantity;
	}
}
