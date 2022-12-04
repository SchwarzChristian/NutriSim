using System.Text.Json;
using NutriSimBackend.Entities;

namespace NutriSimBackend.Engine;

internal class Game
{
	public Player Player { get; private set; }

	private string saveGameFilename;

	public static Game CreateGame(string playerName) {
		if (File.Exists(playerName)) {
			var filename = $"save/{playerName}.json";
			return Game.LoadGame(filename);
		}

		var game = new Game(new Player { Name = playerName });
		game.Save();
		return game;
	}

	public static Game LoadGame(string filename) {
		if (!File.Exists(filename)) {
			throw new FileNotFoundException($"File '{filename}' not found");
		}
		
		var fileContent = File.ReadAllText(filename);
		var player = JsonSerializer.Deserialize<Player>(fileContent) ??
			throw new InvalidOperationException($"failed to read {filename}");

		return new Game(player);
	}

	public Game(Player player) {
		Player = player;
		saveGameFilename = $"save/{player.Name}.json";
	}

	public void Save() {
		if (!Directory.Exists("save"))
		{
			Directory.CreateDirectory("save");
		}

		var serialized = JsonSerializer.Serialize(Player);
		File.WriteAllText(saveGameFilename, serialized);
	}
}
