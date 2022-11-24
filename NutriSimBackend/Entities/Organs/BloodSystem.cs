using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class BloodSystem : IBodyPart {
	public NutritionStorage Nutritions { get; private set; }

	public BloodSystem()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate.Limit = Mass.FromGram(300);
		Nutritions.Fat.Limit = Mass.FromGram(100);
		Nutritions.Protein.Limit = Mass.FromGram(200);
		Nutritions.Vitamin.Limit = Mass.FromGram(10);
		Nutritions.Mineral.Limit = Mass.FromGram(10);
		Nutritions.Water.Limit = Mass.FromKiloGram(2);
	}
}
