using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Bladder : IBodyPart
{
	public NutritionStorage Nutritions { get; private set; }

	public Bladder()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate = ElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Fat = ElementStorage.WithLimit(Mass.FromGram(30));
		Nutritions.Protein = ElementStorage.WithLimit(Mass.FromGram(10));
		Nutritions.Vitamin = ElementStorage.WithLimit(Mass.FromMilliGram(10));
		Nutritions.Mineral = ElementStorage.WithLimit(Mass.FromMilliGram(10));
		Nutritions.Water = ElementStorage.WithLimit(Mass.FromKiloGram(1));
	}
}
