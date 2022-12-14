using NutriSimBackend.Entities;
using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Utility;

public class NutritionExchange
{
	private readonly NutritionStorage storage;

	public NutritionExchange(NutritionStorage storage)
	{
		this.storage = storage;
	}

	public NutritionStorage GetNutritions(NutritionStorage request)
	{
		return new NutritionStorage
		{
			Carbohydrate = GetElement(request.Carbohydrate, storage.Carbohydrate),
			Fat = GetElement(request.Fat, storage.Fat),
			Protein = GetElement(request.Protein, storage.Protein),
			Vitamin = GetElement(request.Vitamin, storage.Vitamin),
			Mineral = GetElement(request.Mineral, storage.Mineral),
			Water = GetElement(request.Water, storage.Water),
			Waste = GetElement(request.Waste, storage.Waste),
			Toxic = GetElement(request.Toxic, storage.Toxic),
		};
	}

	private NutritionElementStorage GetElement(
		NutritionElementStorage request,
		NutritionElementStorage elementStorage
	)
	{
		if (request.Stored == Mass.Empty) return NutritionElementStorage.Empty;
		if (request.Stored < elementStorage.Stored)
		{
			elementStorage.Stored -= request.Stored;
			return NutritionElementStorage.WithAmount(request.Stored);
		}

		var element = elementStorage.Stored;
		elementStorage.Stored = Mass.Empty;
		return NutritionElementStorage.WithAmount(element);
	}

	public void StoreNutritions(NutritionStorage toStore)
	{
		storage.Carbohydrate.Stored += toStore.Carbohydrate.Stored;
		storage.Fat.Stored += toStore.Fat.Stored;
		storage.Protein.Stored += toStore.Protein.Stored;
		storage.Vitamin.Stored += toStore.Vitamin.Stored;
		storage.Mineral.Stored += toStore.Mineral.Stored;
		storage.Water.Stored += toStore.Water.Stored;
		storage.Waste.Stored += toStore.Waste.Stored;
		storage.Toxic.Stored += toStore.Toxic.Stored;
	}
}
