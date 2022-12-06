using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public class SmallIntestine : IFoodStorage {
	public Mass Stored { get; init; } = Mass.Empty;
	public Mass Limit => Mass.FromKiloGram(5);
	public ICollection<Food> Content { get; init; } = new List<Food>();
	public NutritionStorage Nutritions { get; private set; }

	public SmallIntestine()
	{
		Nutritions = new NutritionStorage();
		Nutritions.Carbohydrate = NutritionElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Fat = NutritionElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Protein = NutritionElementStorage.WithLimit(Mass.FromGram(100));
		Nutritions.Vitamin = NutritionElementStorage.WithLimit(Mass.FromMilliGram(100));
		Nutritions.Mineral = NutritionElementStorage.WithLimit(Mass.FromMilliGram(100));
		Nutritions.Water = NutritionElementStorage.WithLimit(Mass.FromGram(500));
		Nutritions.Waste = NutritionElementStorage.WithLimit(Mass.FromGram(50));
		Nutritions.Toxic = NutritionElementStorage.WithLimit(Mass.FromGram(50));
	}
}
