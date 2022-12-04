using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities;

public class NutritionStorage
{
	public NutritionElementStorage Carbohydrate { get; set; } = new NutritionElementStorage();
	public NutritionElementStorage Fat { get; set; } = new NutritionElementStorage();
	public NutritionElementStorage Protein { get; set; } = new NutritionElementStorage();
	public NutritionElementStorage Vitamin { get; set; } = new NutritionElementStorage();
	public NutritionElementStorage Mineral { get; set; } = new NutritionElementStorage();
	public NutritionElementStorage Water { get; set; } = new NutritionElementStorage();
}
