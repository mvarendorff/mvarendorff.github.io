interface Command {
	action: (...args: any[]) => any;
	description: string;
	name: string;
}

export default Command;
