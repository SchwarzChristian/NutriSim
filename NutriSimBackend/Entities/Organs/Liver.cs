using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Liver : IBodyPart
{
	public NutritionStorage Nutritions { get; private set; }

	public Liver()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate = ElementStorage.WithLimit(Mass.FromGram(300));
		Nutritions.Fat = ElementStorage.WithLimit(Mass.FromGram(500));
		Nutritions.Protein = ElementStorage.WithLimit(Mass.FromGram(400));
		Nutritions.Vitamin = ElementStorage.WithLimit(Mass.FromMilliGram(100));
		Nutritions.Mineral = ElementStorage.WithLimit(Mass.FromMilliGram(300));
		Nutritions.Water = ElementStorage.WithLimit(Mass.FromGram(800));
	}
}
