using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class BloodSystem : IOrgan {
	public NutritionStorage Nutritions { get; private set; }

	public BloodSystem()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate = NutritionElementStorage.WithLimit(Mass.FromGram(300));
		Nutritions.Fat = NutritionElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Protein = NutritionElementStorage.WithLimit(Mass.FromGram(200));
		Nutritions.Vitamin = NutritionElementStorage.WithLimit(Mass.FromGram(10));
		Nutritions.Mineral = NutritionElementStorage.WithLimit(Mass.FromGram(10));
		Nutritions.Water = NutritionElementStorage.WithLimit(Mass.FromKiloGram(2));
		Nutritions.Waste = NutritionElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Toxic = NutritionElementStorage.WithLimit(Mass.FromGram(100));
	}
}
