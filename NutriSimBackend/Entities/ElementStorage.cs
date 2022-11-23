using NutriSimBackend.Entities.Units;

namespace NutriSimBackend.Entities;

public class ElementStorage
{
	public static ElementStorage Empty => new ElementStorage();

	public Mass Stored { get; set; } = new Mass();
	public Mass Limit { get; set; } = Mass.FromDefaultUnit(1);

	public ElementStorage() : this(null, null) {}
	private ElementStorage(Mass? stored, Mass? limit) {
		if (stored != null) {
			Stored = stored;
		}

		if (limit != null) {
			Limit = limit;
		}
	}

	public static ElementStorage WithLimit(Mass limit) {
		return new ElementStorage(null, limit);
	}

	public static ElementStorage WithAmount(Mass amount) {
		return new ElementStorage(amount, null);
	}

	public static ElementStorage WithAmountAndLimit(Mass amount, Mass limit) {
		return new ElementStorage(amount, limit);
	}
}
