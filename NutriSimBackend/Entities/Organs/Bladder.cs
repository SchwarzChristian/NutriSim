using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class Bladder : IBodyPart
{
	public NutritionStorage Nutritions { get; private set; }

	public Bladder()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate.Limit = Mass.FromGram(50);
		Nutritions.Fat.Limit = Mass.FromGram(30);
		Nutritions.Protein.Limit = Mass.FromGram(10);
		Nutritions.Vitamin.Limit = Mass.FromMilliGram(10);
		Nutritions.Mineral.Limit = Mass.FromMilliGram(10);
		Nutritions.Water.Limit = Mass.FromKiloGram(1);
	}
}
