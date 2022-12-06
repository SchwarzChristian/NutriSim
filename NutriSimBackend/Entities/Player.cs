using NutriSimBackend.Entities.Organs;

namespace NutriSimBackend.Entities;

public class Player {
	public string Name { get; init; } = "<undefined>";
	public BloodSystem BloodSystem { get; init; } = new BloodSystem();
	public Arm Arm { get; init; } = new Arm();
	public Leg Leg { get; init; } = new Leg();
	public Body Body { get; init; } = new Body();
	public Bladder Bladder { get; init; } = new Bladder();
	public Kidney Kidney { get; init; } = new Kidney();
	public Liver Liver { get; init; } = new Liver();
	public Stomach Stomach { get; init; } = new Stomach();
	public SmallIntestine SmallIntestine { get; init; } = new SmallIntestine();
	public LargeIntestine LargeIntestine { get; init; } = new LargeIntestine();
	public Head Head { get; init; } = new Head();
	public Heart Heart { get; init; } = new Heart();
	public Lung Lung { get; init; } = new Lung();
	public Rectum Rectum { get; init; } = new Rectum(); 
}
