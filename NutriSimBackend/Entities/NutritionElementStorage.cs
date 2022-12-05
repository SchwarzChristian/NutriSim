using System;
using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities;

public class NutritionElementStorage
{
	public static NutritionElementStorage Empty => new NutritionElementStorage();

	public Mass Stored { get; set; } = Mass.Empty;
	public Mass Limit { get; set; } = Mass.FromDefaultUnit(1);

	public NutritionElementStorage() : this(null, null) {}
	private NutritionElementStorage(Mass? stored, Mass? limit) {
		if (stored != null) {
			Stored = stored;
		}

		if (limit != null) {
			Limit = limit;
		}
	}

	public static NutritionElementStorage WithLimit(Mass limit) {
		var current = limit.InDefaultUnit / 2;
		//var current = new Random().NextDouble() * limit.InDefaultUnit * 1.2;
		return new NutritionElementStorage(Mass.FromDefaultUnit(current), limit);
	}

	public static NutritionElementStorage WithAmount(Mass amount) {
		return new NutritionElementStorage(amount, null);
	}

	public static NutritionElementStorage WithAmountAndLimit(Mass amount, Mass limit) {
		return new NutritionElementStorage(amount, limit);
	}
}
