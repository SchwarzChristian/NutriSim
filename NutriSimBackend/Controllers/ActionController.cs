using Microsoft.AspNetCore.Mvc;
using NutriSimBackend.Entities;

namespace NutriSimBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class ActionController : ControllerBase {
	[HttpGet]
    public IEnumerable<PlayerAction> GetActionNames() {
		yield return new PlayerAction { Name = "eat" };
	}
}
