using System.Text.Json;
using NutriSimBackend.Entities;

namespace NutriSimBackend.Repositories;

internal class PlayerRepository
{
	private static PlayerRepository? instance;
	public static PlayerRepository Instance => instance ??= new PlayerRepository();

	private IDictionary<string, Player> players = new Dictionary<string, Player>();

	private PlayerRepository()
	{
		LoadPlayers();
	}

	private void LoadPlayers()
	{
		if (!Directory.Exists("save"))
		{
			Directory.CreateDirectory("save");
		}

		var saveGameFiles = Directory.GetFiles("save", "*.json");
		foreach (var saveGameFile in saveGameFiles)
		{
			var fileContent = File.ReadAllText(saveGameFile);
			var player = JsonSerializer.Deserialize<Player>(fileContent) ??
				throw new InvalidOperationException($"failed to read {saveGameFile}");
			players.Add(player.Name, player);
		}
	}

	internal Player GetPlayer(string playerName)
	{
		if (players.ContainsKey(playerName))
		{
			return players[playerName];
		}

		var player = new Player { Name = playerName };
		players.Add(playerName, player);
		return player;
	}

	internal ICollection<string> GetPlayerNames()
	{
		return players.Keys;
	}
}
