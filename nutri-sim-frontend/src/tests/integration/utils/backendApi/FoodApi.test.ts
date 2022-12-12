import { randomUUID } from "crypto";
import Food from "../../../../entities/Food";
import FoodApi from "../../../../utils/backendApi/FoodApi";

const api = new FoodApi();

test("get food list", async () => {
	const response = await api.getFoodList();

	expect(response).not.toBeUndefined();
	expect(response).not.toBeNull();
	expect(response.length).toBeGreaterThan(0);
});

test("add and delete food", async () => {
	const food: Food = {
		name: "test-food-" + randomUUID(),
		nutritions: {
			carbohydrate: 0,
			fat: 0,
			protein: 0,
			mineral: 0,
			vitamin: 0,
			water: 0,
		}
	};

	await api.addFood(food);

	const responseAfterAdd = await api.getFoodList();

	expect(responseAfterAdd).not.toBeUndefined();
	expect(responseAfterAdd).not.toBeNull();
	expect(responseAfterAdd).toContainEqual(food);

	await api.deleteFood(food.name);

	const responseAfterDelete = await api.getFoodList();

	expect(responseAfterDelete).not.toBeUndefined();
	expect(responseAfterDelete).not.toBeNull();
	expect(responseAfterDelete).not.toContainEqual(food);
});