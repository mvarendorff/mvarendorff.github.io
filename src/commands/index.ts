import clear from './clear';
import about from './about';
import help from './help';
import email from './email';
import github from './github';
import stackoverflow from './stackoverflow';

interface CommandConfigInterface {
	[key: string]: (any: any) => any
}

const config: CommandConfigInterface = {
	'about': about,
	'cls': clear,
	'clear': clear,
	'email': email,
	'help': help,
	'github': github,
	'stackoverflow': stackoverflow
};

export default config;
