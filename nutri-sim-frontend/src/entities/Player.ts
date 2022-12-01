import BodyPart from "./BodyPart";

export default class Player {
	public name: string = "<undefined>";
	public bloodSystem: BodyPart = new BodyPart;
	public arm: BodyPart = new BodyPart;
	public leg: BodyPart = new BodyPart;
	public body: BodyPart = new BodyPart;
	public bladder: BodyPart = new BodyPart;
	public kidney: BodyPart = new BodyPart;
	public liver: BodyPart = new BodyPart;
}