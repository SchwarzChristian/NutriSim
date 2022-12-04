using Microsoft.AspNetCore.Mvc;
using NutriSimBackend.Engine;
using NutriSimBackend.Entities;

namespace NutriSimBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class GameController : ControllerBase {
    private readonly ILogger<GameController> logger;

    public GameController(ILogger<GameController> logger) {
        this.logger = logger;
    }

	[HttpGet("player/{playerName}")]
	public Player GetPlayer(string playerName) {
		return GameManager.Instance.GetGame(playerName).Player;
	}

	[HttpGet("player")]
	public ICollection<string> GetPlayerNames()
	{
		return GameManager.Instance.GetGames();
	}
}
