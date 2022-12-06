import axios from "axios";
import BodyPart from "../../entities/BodyPart";
import Food from "../../entities/Food";
import FoodStorage from "../../entities/FoodStorage";
import NutritionStorage from "../../entities/NutritionStorage";
import Player from "../../entities/Player";

export default class PlayerApi {
	private endpoint = "http://localhost:5169/Player";

	public async getPlayer(playerName: string): Promise<Player> {
		var response = await axios.get<PlayerBackend>(
			`${this.endpoint}/${playerName}`,
			{ params: { playerName } }
		);
		return this.mapFromBackendPlayer(response.data);
	}

	private mapFromBackendPlayer(input: PlayerBackend): Player {
		return {
			name: input.name,
			organs: [
				this.mapFromBackendNutritionStorage(input.arm, "Arm"),
				this.mapFromBackendNutritionStorage(input.bladder, "Bladder"),
				this.mapFromBackendNutritionStorage(input.bloodSystem, "Blood System"),
				this.mapFromBackendNutritionStorage(input.body, "Body"),
				this.mapFromBackendNutritionStorage(input.kidney, "Kidney"),
				this.mapFromBackendNutritionStorage(input.leg, "Leg"),
				this.mapFromBackendNutritionStorage(input.liver, "Liver"),
				this.mapFromBackendNutritionStorage(input.head, "Head"),
				this.mapFromBackendNutritionStorage(input.heart, "Heart"),
				this.mapFromBackendNutritionStorage(input.lung, "Lungs"),
				this.mapFromBackendNutritionStorage(input.stomach, "Stomach"),
				this.mapFromBackendNutritionStorage(input.smallIntestine, "Small Intestine"),
				this.mapFromBackendNutritionStorage(input.largeIntestine, "Large Intestine"),
				this.mapFromBackendNutritionStorage(input.rectum, "Rectum"),
			],
			foodStorages: [
				this.mapFromBackendFoodStorage(input.stomach, "Stomach"),
				this.mapFromBackendFoodStorage(input.smallIntestine, "Small Intestine"),
				this.mapFromBackendFoodStorage(input.largeIntestine, "Large Intestine"),
				this.mapFromBackendFoodStorage(input.rectum, "Rectum"),
				this.mapFromBackendFoodStorage(input.bladder, "Bladder"),
			],
		}
	}

	private mapFromBackendNutritionStorage(input: BodyPartBackend, name: string): BodyPart {
		return {
			name,
			nutritions: input.nutritions,
		}
	}

	private mapFromBackendFoodStorage(input: FoodStorageBackend, name: string): FoodStorage {
		return {
			name,
			stored: input.stored,
			limit: input.limit,
			content: input.content,
		};
	}

	public async getPlayerNames(): Promise<string[]> {
		var response = await axios.get<string[]>(`${this.endpoint}/names`);
		return response.data;
	}

	public async deletePlayer(playerName: string): Promise<void> {
		await axios.delete(`${this.endpoint}/${playerName}`);
	}
}

interface BodyPartBackend {
	nutritions: NutritionStorage
}

interface FoodStorageBackend extends BodyPartBackend {
	stored: number;
	limit: number;
	content: Food[];
}

interface PlayerBackend {
	name: string;
	bloodSystem: BodyPartBackend;
	arm: BodyPartBackend;
	leg: BodyPartBackend;
	body: BodyPartBackend;
	bladder: FoodStorageBackend;
	kidney: BodyPartBackend;
	liver: BodyPartBackend;
	stomach: FoodStorageBackend;
	smallIntestine: FoodStorageBackend;
	largeIntestine: FoodStorageBackend;
	head: BodyPartBackend;
	heart: BodyPartBackend;
	lung: BodyPartBackend;
	rectum: FoodStorageBackend;
}