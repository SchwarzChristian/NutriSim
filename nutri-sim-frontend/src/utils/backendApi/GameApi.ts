import axios from "axios";
import Player from "../../entities/Player";

export default class GameApi {
	private endpoint = "http://localhost:5169/Game";

	public async loadGame(playerName: string): Promise<Player> {
		var response = await axios.get(this.endpoint, { params: { playerName } })
		return response.data;
	}
}
