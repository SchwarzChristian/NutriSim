using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Liver : IOrgan
{
	public NutritionStorage Nutritions { get; private set; }

	public Liver()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate = NutritionElementStorage.WithLimit(Mass.FromGram(300));
		Nutritions.Fat = NutritionElementStorage.WithLimit(Mass.FromGram(500));
		Nutritions.Protein = NutritionElementStorage.WithLimit(Mass.FromGram(400));
		Nutritions.Vitamin = NutritionElementStorage.WithLimit(Mass.FromMilliGram(100));
		Nutritions.Mineral = NutritionElementStorage.WithLimit(Mass.FromMilliGram(300));
		Nutritions.Water = NutritionElementStorage.WithLimit(Mass.FromGram(800));
		Nutritions.Waste = NutritionElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Toxic = NutritionElementStorage.WithLimit(Mass.FromGram(100));
	}
}
