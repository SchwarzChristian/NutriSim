using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Liver : IBodyPart
{
	public NutritionStorage Nutritions { get; private set; }

	public Liver()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate.Limit = Mass.FromGram(300);
		Nutritions.Fat.Limit = Mass.FromGram(500);
		Nutritions.Protein.Limit = Mass.FromGram(400);
		Nutritions.Vitamin.Limit = Mass.FromMilliGram(100);
		Nutritions.Mineral.Limit = Mass.FromMilliGram(300);
		Nutritions.Water.Limit = Mass.FromGram(800);
	}
}
