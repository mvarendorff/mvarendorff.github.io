import React from 'react';
import {CurrentLinesStore} from '../stores';
import CommandConfig from '../commands';
import Line from '../entities/Line';

export default class PromptInput extends React.Component<{}, {}> {
	constructor(props: {}) {
		super(props);
		this.keyHandler = this.keyHandler.bind(this);
		this.handleCommand = this.handleCommand.bind(this);
	}

	input: HTMLInputElement | null | undefined;
	
	render() {
		return <input ref={ref => this.input = ref} autoFocus={true} className={'prompt'} onKeyPress={this.keyHandler}/>;
	}

	keyHandler(ev: React.KeyboardEvent<HTMLInputElement>) {
		if (ev.key === 'Enter') {
			const content = (ev.target as HTMLInputElement).value;
			CurrentLinesStore.updatePrompt(content);
			ev.preventDefault();

			this.handleCommand(content);

			CurrentLinesStore.markOutputDone();
			(ev.target as HTMLInputElement).value = '';
		}
	}

	handleCommand(command: string) {
		const splits = command.split(' ');
		const actualCommand = splits.shift();

		if (actualCommand === undefined) return;

		const restArgs = splits.join(' ');

		const func = CommandConfig[actualCommand];

		if (func === undefined || func === null || typeof func !== 'function') {
			CurrentLinesStore.addLine(new Line(`Could not find command "${actualCommand}".`, false, false));
			return;
		}

		func(restArgs);
	}

	focus() {
		this.input && this.input.focus();
	}
	
}
