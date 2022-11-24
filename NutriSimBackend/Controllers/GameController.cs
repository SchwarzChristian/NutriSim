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

	[HttpGet(Name = "GetPlayer/{name}")]
	public Player GetPlayer(string playerName) {
		return GameManager.Instance.GetGame(playerName).Player;
	}
}
