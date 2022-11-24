using NutriSimBackend.Entities.Organs;

namespace NutriSimBackend.Entities;

public class Player {
	public string Name { get; set; } = "<undefined>";
	public BloodSystem BloodSystem { get; set; } = new BloodSystem();
	public Arm Arm { get; set; } = new Arm();
	public Leg Leg { get; set; } = new Leg();
	public Body Body { get; set; } = new Body();
	public Bladder Bladder { get; set; } = new Bladder();
	public Kidney Kidney { get; set; } = new Kidney();
	public Liver Liver { get; set; } = new Liver();
}
