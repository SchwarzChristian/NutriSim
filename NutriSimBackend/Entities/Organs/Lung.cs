using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Lung : IOrgan {
	public NutritionStorage Nutritions { get; private set; }

	public Lung()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate = NutritionElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Fat = NutritionElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Protein = NutritionElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Vitamin = NutritionElementStorage.WithLimit(Mass.FromMilliGram(100));
		Nutritions.Mineral = NutritionElementStorage.WithLimit(Mass.FromMilliGram(100));
		Nutritions.Water = NutritionElementStorage.WithLimit(Mass.FromGram(200));
		Nutritions.Waste = NutritionElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Toxic = NutritionElementStorage.WithLimit(Mass.FromGram(50));
	}
}
