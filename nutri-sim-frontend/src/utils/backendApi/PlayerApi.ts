import axios from "axios";
import BodyPart from "../../entities/BodyPart";
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
			bodyParts: [
				this.mapFromBackendNutritionStorage(input.arm, "Arm"),
				this.mapFromBackendNutritionStorage(input.bladder, "Bladder"),
				this.mapFromBackendNutritionStorage(input.bloodSystem, "Blood System"),
				this.mapFromBackendNutritionStorage(input.body, "Body"),
				this.mapFromBackendNutritionStorage(input.kidney, "Kidney"),
				this.mapFromBackendNutritionStorage(input.leg, "Leg"),
				this.mapFromBackendNutritionStorage(input.liver, "Liver"),
			]
		}
	}

	private mapFromBackendNutritionStorage(input: BodyPartBackend, name: string): BodyPart {
		return {
			name,
			nutritions: input.nutritions,
		}
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

interface PlayerBackend {
	name: string;
	bloodSystem: BodyPart;
	arm: BodyPart;
	leg: BodyPart;
	body: BodyPart;
	bladder: BodyPart;
	kidney: BodyPart;
	liver: BodyPart;
}