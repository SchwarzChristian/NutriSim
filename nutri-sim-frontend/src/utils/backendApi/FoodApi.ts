import axios from "axios";
import Food from "../../entities/Food";

export default class FoodApi {
	private apiEndpoint = "http://localhost:5169/Food";

	public async getFoodList(): Promise<Food[]> {
		const response = await axios.get<Food[]>(this.apiEndpoint);
		return response.data;
	}

	public async deleteFood(food: Food): Promise<void> {
		await axios.delete(`${this.apiEndpoint}/${food.name}`);
	}

	public async addFood(food: Food): Promise<void> {
		await axios.post(this.apiEndpoint, food);
	}
}