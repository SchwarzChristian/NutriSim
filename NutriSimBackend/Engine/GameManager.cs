namespace NutriSimBackend.Engine;

internal class GameManager {
    private static GameManager? instance;
	public static GameManager Instance => instance ?? (instance = new GameManager());

	private IDictionary<string, Game> games = new Dictionary<string, Game>();

	private GameManager() {
		LoadSaveGames();
	}

	private void LoadSaveGames() {
		if (!Directory.Exists("save")) {
			Directory.CreateDirectory("save");
		}

		var saveGameFiles = Directory.GetFiles("save", "*.json");
		foreach (var saveGameFile in saveGameFiles) {
			var game = Game.LoadGame(saveGameFile);
			games.Add(game.Player.Name, game);
		}
	}

	public Game GetGame(string playerName) {
		if (games.ContainsKey(playerName)) {
			return games[playerName];
		}

		var newGame = Game.CreateGame(playerName);
		games[playerName] = newGame;
		return newGame;
	}

	internal ICollection<string> GetGames() {
		return games.Keys;
	}
}
