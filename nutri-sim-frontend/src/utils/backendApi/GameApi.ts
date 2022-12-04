import axios from "axios";
import BodyPart from "../../entities/BodyPart";
import NutritionStorage from "../../entities/NutritionStorage";
import Player from "../../entities/Player";

export default class GameApi {
	private endpoint = "http://localhost:5169/Game";

	public async loadGame(playerName: string): Promise<Player> {
		var response = await axios.get<PlayerBackend>(this.endpoint, { params: { playerName } })
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