using System.Text.Json;
using NutriSimBackend.Entities;

namespace NutriSimBackend.Engine;

internal class Game
{
	public Player Player { get; private set; }

	private string saveGameFilename;

	public Game(string saveGameName) {
		saveGameFilename = $"save/{saveGameName}.json";
		if (!File.Exists(saveGameFilename))
		{
			Player = new Player();
			Save();
			return;
		}

		var fileContent = File.ReadAllText(saveGameFilename);
		Player = JsonSerializer.Deserialize<Player>(fileContent) ??
			throw new InvalidOperationException($"failed to read {saveGameFilename}");
	}

	public void Save() {
		var serialized = JsonSerializer.Serialize(Player);
		File.WriteAllText(saveGameFilename, serialized);
	}
}
