using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Kidney : IBodyPart
{
	public NutritionStorage Nutritions { get; private set; }

	public Kidney()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate = ElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Fat = ElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Protein = ElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Vitamin = ElementStorage.WithLimit(Mass.FromMilliGram(800));
		Nutritions.Mineral = ElementStorage.WithLimit(Mass.FromMilliGram(500));
		Nutritions.Water = ElementStorage.WithLimit(Mass.FromGram(800));
	}
}
