interface Command {
	action: (...args: string[]) => void;
	description: string;
	name: string;
}

export default Command;
