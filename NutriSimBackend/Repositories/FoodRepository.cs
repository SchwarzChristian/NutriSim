using System.Collections.Concurrent;
using System.Text.Json;
using NutriSimBackend.Entities;

namespace NutriSimBackend.Repositories;

public class FoodRepository
{
	private static FoodRepository? instance;
	public static FoodRepository Instance => instance ??= new FoodRepository();
	
	private IDictionary<string, Food> foods = new ConcurrentDictionary<string, Food>();

	private FoodRepository() {
		LoadFoods();
	}

	private void LoadFoods() {
		if (!Directory.Exists("data")) {
			Directory.CreateDirectory("data");
		}

		var filename = "data/foods.json";
		if (!File.Exists(filename)) {

			return;
		}

		var fileContent = File.ReadAllText(filename);
		var foodList = JsonSerializer.Deserialize<JsonList<Food>>(fileContent) ??
			throw new InvalidOperationException($"failed to read {filename}");
		
		foods = foodList.Data.ToDictionary(f => f.Name);
	}

	public IEnumerable<Food> GetFoods() {
		return foods.Values;
	}

	public Food GetFood(string foodName) {
		if (foods.ContainsKey(foodName)) {
			return foods[foodName];
		}

		throw new InvalidOperationException($"Food '{foodName}' not found");
	}

	public void UpdateFood(Food food) {
		foods[food.Name] = food;
	}

	public ICollection<string> GetFoodNames() {
		return foods.Keys;
	}

	public void Save() {
		if (!Directory.Exists("data")) {
			Directory.CreateDirectory("data");
		}

		var filename = "data/foods.json";
		var json = JsonSerializer.Serialize(new JsonList<Food> { Data = foods.Values });
		File.WriteAllText(filename, json);
	}
}
