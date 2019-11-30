import {CurrentLinesStore} from '../stores';
import Line from '../entities/Line';
import Command from './Command';

const Github: Command = {
	action: () => {
		CurrentLinesStore.addLine(Line.out('https://github.com/geisterfurz007'));
	},
	description: 'Shows a link to my github profile',
	name: 'github'
};

export default Github;
