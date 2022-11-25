using System.IO;
using System.Text.Json;
using NutriSimBackend.Entities;

namespace NutriSimBackend.Engine;

internal class Game
{
	public Player Player { get; private set; }

	private string saveGameFilename;

	public Game(string playerName) {
		if (!Directory.Exists("save")) {
			Directory.CreateDirectory("save");
		}

		saveGameFilename = $"save/{playerName}.json";
		if (!File.Exists(playerName))
		{
			Player = new Player { Name = playerName };
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
