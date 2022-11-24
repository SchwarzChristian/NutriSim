using System.Text.Json.Serialization;

namespace NutriSimBackend.Entities.Units;

[JsonConverter(typeof(UnitConverter<Mass>))]
public class Mass : IUnit {
	public double SerializableValue { get; set; }
	public double InDefaultUnit => InGram;

	public double InMilliGram => InGram * 1000;
	public double InGram => SerializableValue;
	public double InKiloGram => InGram / 1000;

	public static Mass Empty { get; } = new Mass();
	public static Mass FromDefaultUnit(double value) => FromGram(value);
	
	
	public static Mass FromMilliGram(double value) => FromGram(value / 1000);
	public static Mass FromGram(double value) => new Mass(value);
	public static Mass FromKiloGram(double value) => new Mass(value * 1000);

	public Mass() : this(0) {}
	private Mass(double value) {
		if (value < 0) {
			throw new ArgumentException("Mass can not be negative!");
		}

		SerializableValue = value;
	}

	public static Mass operator +(Mass lhs, Mass rhs) {
		return new Mass(lhs.SerializableValue + rhs.SerializableValue);
	}

	public static Mass operator -(Mass lhs, Mass rhs) {
		return new Mass(lhs.SerializableValue - rhs.SerializableValue);
	}

	public static Mass operator *(Mass lhs, int rhs) {
		return new Mass(lhs.SerializableValue * rhs);
	}

	public static bool operator >(Mass lhs, Mass rhs) {
		return lhs.SerializableValue > rhs.SerializableValue;
	}

	public static bool operator <(Mass lhs, Mass rhs) {
		return lhs.SerializableValue < rhs.SerializableValue;
	}
}
