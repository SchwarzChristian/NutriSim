using NutriSimBackend.Entities;
using NutriSimBackend.Entities.Organs;

namespace NutriSimBackend.Engine.NutritionExchange;

internal interface INutritionManager
{
	IOrgan Organ { get; }
	NutritionTable neededNutritions { get; }
	NutritionTable unwantedNutritions { get; }

	void DeliverNutritions(NutritionTable nutritions);
	void FetchNutritions(NutritionTable nutritions);
}
