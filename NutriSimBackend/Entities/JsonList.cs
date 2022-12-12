using System.Text.Json.Serialization;

namespace NutriSimBackend.Entities;

public class JsonList<T>
{
	[JsonConstructor]
	public JsonList() { }

	public JsonList(IEnumerable<T> data) {
		Data = data.ToArray();
	}

	public ICollection<T> Data { get; set; } = Array.Empty<T>();
}
