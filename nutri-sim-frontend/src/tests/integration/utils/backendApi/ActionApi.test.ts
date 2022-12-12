import { randomUUID } from "crypto";
import ActionApi from "../../../../utils/backendApi/ActionApi";
import PlayerApi from "../../../../utils/backendApi/PlayerApi";

const testPlayerName = "test-action-api-" + randomUUID();
var api: ActionApi;

beforeAll(async () => {
	var player = await new PlayerApi().getPlayer(testPlayerName);
	api = new ActionApi(player);
});

afterAll(async () => {
	await new PlayerApi().deletePlayer(testPlayerName);
});

test("get actions", async () => {
	const actions = await api.getActions();
	
	expect(actions).not.toBeUndefined();
	expect(actions).not.toBeNull();
	expect(actions.map(act => act.name)).toContain("eat");
})

