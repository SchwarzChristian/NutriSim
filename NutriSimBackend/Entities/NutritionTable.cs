using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities;

public class NutritionTable {
    public Mass Carbohydrate { get; init; } = Mass.Empty;
	public Mass Protein { get; init; } = Mass.Empty;
	public Mass Fat { get; init; } = Mass.Empty;
	public Mass Vitamin { get; init; } = Mass.Empty;
	public Mass Mineral { get; init; } = Mass.Empty;
	public Mass Water { get; init; } = Mass.Empty;
}
