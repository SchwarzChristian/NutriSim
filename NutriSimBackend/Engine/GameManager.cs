namespace NutriSimBackend.Engine;

internal class GameManager {
    private static GameManager? instance;
	public static GameManager Instance => instance ?? (instance = new GameManager());

	private IDictionary<string, Game> games = new Dictionary<string, Game>();

	private GameManager() {

	}

	public Game GetGame(string playerName) {
		if (games.ContainsKey(playerName)) {
			return games[playerName];
		}

		var newGame = new Game(playerName);
		games[playerName] = newGame;
		return newGame;
	}
}
