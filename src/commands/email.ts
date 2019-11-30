import {CurrentLinesStore} from '../stores';
import Line from '../entities/Line';

const email = () => {
	['The first part of this domain at google\'s mail server',
		'(if you are not a bot, you should be able to piece that one together'].map(Line.out).forEach(CurrentLinesStore.addLine);
};

export default email;
