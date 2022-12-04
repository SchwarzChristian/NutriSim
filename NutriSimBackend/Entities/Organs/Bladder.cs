using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Bladder : IBodyPart
{
	public NutritionStorage Nutritions { get; private set; }

	public Bladder()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate = NutritionElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Fat = NutritionElementStorage.WithLimit(Mass.FromGram(30));
		Nutritions.Protein = NutritionElementStorage.WithLimit(Mass.FromGram(10));
		Nutritions.Vitamin = NutritionElementStorage.WithLimit(Mass.FromMilliGram(10));
		Nutritions.Mineral = NutritionElementStorage.WithLimit(Mass.FromMilliGram(10));
		Nutritions.Water = NutritionElementStorage.WithLimit(Mass.FromKiloGram(1));
	}
}
