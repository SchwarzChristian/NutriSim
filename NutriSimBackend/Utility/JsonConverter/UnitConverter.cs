using System.Text.Json;
using System.Text.Json.Serialization;
using NutriSimBackend.Entities.Units;

public class UnitConverter<T> : JsonConverter<T> where T: IUnit, new()
{
	public override T? Read(
		ref Utf8JsonReader reader,
		Type typeToConvert,
		JsonSerializerOptions options
	) {
		return new T {
			SerializableValue = reader.GetDouble(),
		};
	}

	public override void Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options)
	{
		writer.WriteNumberValue(value.SerializableValue);
	}
}
