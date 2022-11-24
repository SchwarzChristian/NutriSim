using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Kidney : IBodyPart
{
	public NutritionStorage Nutritions { get; private set; }

	public Kidney()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate.Limit = Mass.FromGram(50);
		Nutritions.Fat.Limit = Mass.FromGram(50);
		Nutritions.Protein.Limit = Mass.FromGram(50);
		Nutritions.Vitamin.Limit = Mass.FromMilliGram(800);
		Nutritions.Mineral.Limit = Mass.FromMilliGram(500);
		Nutritions.Water.Limit = Mass.FromGram(800);
	}
}
