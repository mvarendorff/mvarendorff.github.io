import {CurrentLinesStore} from '../stores';
import Line from '../entities/Line';
import Command from './Command';

const StackOverflow: Command = {
	action:  () => {
		CurrentLinesStore.addLine(Line.out('https://stackoverflow.com/users/6707985'));
	},
	description: 'Shows a link to my Stack Overflow profile',
	name: 'stackoverflow'
};

export default StackOverflow;
