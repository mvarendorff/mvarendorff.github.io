import {CurrentLinesStore} from '../stores';
import Line from '../entities/Line';

const stackoverflow = () => {
	CurrentLinesStore.addLine(Line.out('https://stackoverflow.com/users/6707985'));
};

export default stackoverflow;
