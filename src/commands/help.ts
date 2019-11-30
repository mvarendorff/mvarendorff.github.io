import {CurrentLinesStore} from '../stores';
import Line from '../entities/Line';

const help = () => {
	['Available commands:',
		'about: Shows information about this page',
		'clear: Clears the console',
		'cls: Alias of clear',
		'email: Shows my mail address (please don\'t spam...)',
		'help: Shows this help',
		'github: Shows a link to my github profile',
		'stackoverflow: Shows a link to my Stack Overflow profile',
	].map(Line.out).forEach(CurrentLinesStore.addLine);
};

export default help;
