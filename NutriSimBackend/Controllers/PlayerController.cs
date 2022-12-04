using Microsoft.AspNetCore.Mvc;
using NutriSimBackend.Entities;
using NutriSimBackend.Repositories;

namespace NutriSimBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class PlayerController : ControllerBase {
    private readonly ILogger<PlayerController> logger;

    public PlayerController(ILogger<PlayerController> logger) {
        this.logger = logger;
    }

	[HttpGet("{playerName}")]
	public Player GetPlayer(string playerName) {
		return PlayerRepository.Instance.GetPlayer(playerName);
	}

	[HttpGet("names")]
	public ICollection<string> GetPlayerNames()
	{
		return PlayerRepository.Instance.GetPlayerNames();
	}
}
