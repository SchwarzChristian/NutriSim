using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Arm : IBodyPart
{
	public NutritionStorage Nutritions { get; private set; }

	public Arm()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate = NutritionElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Fat = NutritionElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Protein = NutritionElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Vitamin = NutritionElementStorage.WithLimit(Mass.FromMilliGram(200));
		Nutritions.Mineral = NutritionElementStorage.WithLimit(Mass.FromMilliGram(300));
		Nutritions.Water = NutritionElementStorage.WithLimit(Mass.FromGram(500));
		Nutritions.Waste = NutritionElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Toxic = NutritionElementStorage.WithLimit(Mass.FromGram(50));
	}
}
