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
	public void AddOrUpdateFood([FromBody] Food food) {
		FoodRepository.Instance.AddOrUpdateFood(food);
		FoodRepository.Instance.Save();
	}

	[HttpDelete("{foodName}")]
	public void DeleteFood(string foodName) {
		FoodRepository.Instance.DeleteFood(foodName);
		FoodRepository.Instance.Save();
	}
}
