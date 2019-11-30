import React, {ReactElement} from 'react';
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
	
	render(): ReactElement {
		return <input ref={(ref: HTMLInputElement): void => {this.input = ref;}} autoFocus={true} className={'prompt'} onKeyDown={this.keyHandler}/>;
	}

	keyHandler(ev: React.KeyboardEvent<HTMLInputElement>): void {
		if (ev.key === 'Enter') {
			const content = (ev.target as HTMLInputElement).value;
			CurrentLinesStore.updatePrompt(content);
			ev.preventDefault();

			this.handleCommand(content);

			CurrentLinesStore.markOutputDone();
			(ev.target as HTMLInputElement).value = '';
		}
	}

	handleCommand(command: string): void {
		const splits = command.split(' ');
		const actualCommand = splits.shift();

		if (actualCommand === undefined) return;

		const restArgs = splits.join(' ');

		const cmd = CommandConfig[actualCommand];

		if (cmd === undefined || cmd === null) {
			CurrentLinesStore.addLine(new Line(`Could not find command "${actualCommand}".`, false, false));
			return;
		}

		const func = cmd.action;
		func(restArgs);
	}

	focus(): void {
		this.input && this.input.focus();
	}
	
}
