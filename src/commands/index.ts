import clear from './clear';
import about from './about';
import help from './help';
import email from './email';
import github from './github';
import stackoverflow from './stackOverflow';
import Command from './Command';

interface CommandConfigInterface {
	[key: string]: Command;
}

const config: CommandConfigInterface = {
	'about': about,
	// 'cls': clear,
	'clear': clear,
	'email': email,
	'help': help,
	'github': github,
	'stackoverflow': stackoverflow
};

export default config;
