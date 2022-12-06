using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Head : IOrgan {
	public NutritionStorage Nutritions { get; private set; }

	public Head()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate = NutritionElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Fat = NutritionElementStorage.WithLimit(Mass.FromGram(10));
		Nutritions.Protein = NutritionElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Vitamin = NutritionElementStorage.WithLimit(Mass.FromMilliGram(100));
		Nutritions.Mineral = NutritionElementStorage.WithLimit(Mass.FromMilliGram(200));
		Nutritions.Water = NutritionElementStorage.WithLimit(Mass.FromGram(200));
		Nutritions.Waste = NutritionElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Toxic = NutritionElementStorage.WithLimit(Mass.FromGram(50));
	}
}
