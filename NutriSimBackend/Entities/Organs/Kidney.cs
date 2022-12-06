using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Kidney : IOrgan
{
	public NutritionStorage Nutritions { get; private set; }

	public Kidney()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate = NutritionElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Fat = NutritionElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Protein = NutritionElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Vitamin = NutritionElementStorage.WithLimit(Mass.FromMilliGram(800));
		Nutritions.Mineral = NutritionElementStorage.WithLimit(Mass.FromMilliGram(500));
		Nutritions.Water = NutritionElementStorage.WithLimit(Mass.FromGram(800));
		Nutritions.Waste = NutritionElementStorage.WithLimit(Mass.FromGram(200));
		Nutritions.Toxic = NutritionElementStorage.WithLimit(Mass.FromGram(100));
	}
}
