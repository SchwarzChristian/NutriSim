using Microsoft.AspNetCore.Mvc;
using NutriSimBackend.Entities;
using NutriSimBackend.Repositories;

namespace NutriSimBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class FoodController : ControllerBase {
    [HttpGet("names")]
	public IEnumerable<string> GetFoodNames() {
		return FoodRepository.Instance.GetFoodNames();
	}

	[HttpGet]
	public IEnumerable<Food> GetFoods() {
		return FoodRepository.Instance.GetFoods();
	}

	[HttpPost]
	public void PostFood([FromBody] Food food) {
		FoodRepository.Instance.UpdateFood(food);
		FoodRepository.Instance.Save();
	}
}
