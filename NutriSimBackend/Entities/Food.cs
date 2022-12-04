namespace NutriSimBackend.Entities;

public class Food
{
    public string Name { get; init; } = "<undefined>";
	public NutritionTable Nutritions { get; init; } = new NutritionTable();
}
