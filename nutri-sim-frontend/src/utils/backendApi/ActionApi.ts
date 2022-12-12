import axios from "axios";
import Action from "../../entities/Action";
import Player from "../../entities/Player";

export default class ActionApi {
    private endpoint: string = "http://localhost:5169/action";
    private player: Player;

    public constructor(player: Player) {
        this.player = player;
    }
    
	public async getActions(): Promise<Action[]> {
        const response = await axios.get<Action[]>(this.endpoint);
        return response.data;
    }

    public async startAction(action: Action): Promise<void> {
        return new Promise<void>(() => {});
        //await axios.post(`${this.endpoint}/${this.playerName}/${action.name}`, action);
    }

    public async tick(): Promise<Player> {
        return new Promise<Player>(() => this.player);
        // const response = await axios.get<Player>(`${this.endpoint}/${this.playerName}/tick`);
        // return response.data;
    }
}