using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class BloodSystem : IBodyPart {
	public NutritionStorage Nutritions { get; private set; }

	public BloodSystem()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate = ElementStorage.WithLimit(Mass.FromGram(300));
		Nutritions.Fat = ElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Protein = ElementStorage.WithLimit(Mass.FromGram(200));
		Nutritions.Vitamin = ElementStorage.WithLimit(Mass.FromGram(10));
		Nutritions.Mineral = ElementStorage.WithLimit(Mass.FromGram(10));
		Nutritions.Water = ElementStorage.WithLimit(Mass.FromKiloGram(2));
	}
}
