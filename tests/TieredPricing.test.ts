import { InvalidSubscriptionQuantity } from "../src/InvalidSubscriptionQuantity";
import Subscription from "../src/Subscription";
import SubscriptionQuantity from "../src/SubscriptionQuantity";

describe("TODO", () => {
	test("TODO: rename later", () => {
		const pricing: Subscription = new Subscription(new SubscriptionQuantity(2));
		expect(pricing.total()).toBe(299 * 2);
	});

	test("TODO: rename later", () => {
		const pricing: Subscription = new Subscription(new SubscriptionQuantity(3));
		expect(pricing.total()).toBe(239 * 3);
	});
	test("TODO: rename later", () => {
		const pricing: Subscription = new Subscription(new SubscriptionQuantity(11));
		expect(pricing.total()).toBe(219 * 11);
	});
	test("TODO: rename later", () => {
		const pricing: Subscription = new Subscription(new SubscriptionQuantity(52));
		expect(pricing.total()).toBe(149 * 52);
	});
	test("quantity cannot be negative", () => {
		expect(() => new Subscription(new SubscriptionQuantity(-1))).toThrow(
			InvalidSubscriptionQuantity
		);
	});
});
