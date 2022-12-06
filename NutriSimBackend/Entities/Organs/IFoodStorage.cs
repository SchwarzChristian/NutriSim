using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities.Organs;

public interface IFoodStorage : IOrgan {
	Mass Stored { get; }
	Mass Limit { get; }
	ICollection<Food> Content { get; }
}
