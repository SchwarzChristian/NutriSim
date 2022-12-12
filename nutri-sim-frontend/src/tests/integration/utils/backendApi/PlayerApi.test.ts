import { randomUUID } from "crypto";
import PlayerApi from "../../../../utils/backendApi/PlayerApi";

const api = new PlayerApi();
const testPlayerName = "test-player-" + randomUUID();

beforeAll(async () => {
	await api.getPlayer(testPlayerName);
});

afterAll(async () => {
	await api.deletePlayer(testPlayerName);
});

test('get player names', async () => {
	const response = await api.getPlayerNames();
	
	expect(response).not.toBeUndefined();
	expect(response).not.toBeNull();
	expect(response).toContain(testPlayerName);
});
