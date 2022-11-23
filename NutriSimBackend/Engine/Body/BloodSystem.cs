using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Body;

public class BloodSystem
{
	public NutritionStorage Nutritions { get; private set; } = new NutritionStorage();

	public BloodSystem() {
		Nutritions.Carbohydrate.Limit = Mass.FromGram(300);
		Nutritions.Fat.Limit = Mass.FromGram(100);
		Nutritions.Protein.Limit = Mass.FromGram(200);
		Nutritions.Vitamin.Limit = Mass.FromGram(10);
		Nutritions.Mineral.Limit = Mass.FromGram(10);
		Nutritions.Water.Limit = Mass.FromGram(800);
	}
}
