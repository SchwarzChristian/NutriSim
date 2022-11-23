using Microsoft.AspNetCore.Mvc;
using NutriSimBackend.Entities;

namespace NutriSimBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class GameController : ControllerBase {
    private readonly ILogger<GameController> _logger;

    public GameController(ILogger<GameController> logger) {
        _logger = logger;
    }

	[HttpGet(Name = "GetPlayer/{name}")]
	public Player GetPlayer(string playerName) {
		return Engine.Engine.Instance.GetGame(playerName).Player;
	}
}
