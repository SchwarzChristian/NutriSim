using NutriSimBackend.Entities;

namespace NutriSimBackend.Engine;

internal class Engine {
    private static Engine? instance;
	public static Engine Instance => instance ?? (instance = new Engine());

	private IDictionary<string, Game> games = new Dictionary<string, Game>();

	private Engine() {

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
