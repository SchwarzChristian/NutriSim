using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Leg : IBodyPart
{
	public NutritionStorage Nutritions { get; private set; }

	public Leg()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate.Limit = Mass.FromGram(100);
		Nutritions.Fat.Limit = Mass.FromGram(100);
		Nutritions.Protein.Limit = Mass.FromGram(100);
		Nutritions.Vitamin.Limit = Mass.FromMilliGram(200);
		Nutritions.Mineral.Limit = Mass.FromMilliGram(300);
		Nutritions.Water.Limit = Mass.FromGram(500);
	}
}
