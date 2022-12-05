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
			AddPlayer(player);
		}
	}

	internal Player GetPlayer(string playerName)
	{
		if (players.ContainsKey(playerName))
		{
			return players[playerName];
		}

		var player = new Player { Name = playerName };
		AddPlayer(player);
		return player;
	}

	private void AddPlayer(Player player)
	{
		players[player.Name] = player;
		Save();
	}

	private void Save() {
		foreach (var player in players.Values)
		{
			var serialized = JsonSerializer.Serialize(player);
			File.WriteAllText($"save/{player.Name}.json", serialized);
		}
	}

	internal ICollection<string> GetPlayerNames()
	{
		return players.Keys;
	}
}
