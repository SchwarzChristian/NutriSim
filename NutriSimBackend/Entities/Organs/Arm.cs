using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Arm : IBodyPart
{
	public NutritionStorage Nutritions { get; private set; }

	public Arm()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate = ElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Fat = ElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Protein = ElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Vitamin = ElementStorage.WithLimit(Mass.FromMilliGram(200));
		Nutritions.Mineral = ElementStorage.WithLimit(Mass.FromMilliGram(300));
		Nutritions.Water = ElementStorage.WithLimit(Mass.FromGram(500));
	}
}
