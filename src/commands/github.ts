import {CurrentLinesStore} from '../stores';
import Line from '../entities/Line';

const github = () => {
	CurrentLinesStore.addLine(Line.out('https://github.com/geisterfurz007'));
} ;

export default github;
