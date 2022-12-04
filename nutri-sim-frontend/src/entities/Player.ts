import BodyPart from "./BodyPart";

export default interface Player {
	name: string;
	bodyParts: Array<BodyPart>;
}