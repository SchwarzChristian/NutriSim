using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities;

public class NutritionStorage
{
	public ElementStorage Carbohydrate { get; set; } = new ElementStorage();
	public ElementStorage Fat { get; set; } = new ElementStorage();
	public ElementStorage Protein { get; set; } = new ElementStorage();

	public ElementStorage Vitamin { get; set; } = new ElementStorage();
	public ElementStorage Mineral { get; set; } = new ElementStorage();
	public ElementStorage Water { get; set; } = new ElementStorage();
}
