import React, {ReactElement} from 'react';
import {CommandHistoryStore, CurrentLinesStore} from '../stores';
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
			CommandHistoryStore.addEntry(content);
			(ev.target as HTMLInputElement).value = '';
		} else if (ev.key === 'Tab') {
			ev.preventDefault();

			const content = (ev.target as HTMLInputElement).value;
			if (content.length < 2)
				return;

			const autoComplete = Object.keys(CommandConfig).filter(cmd => cmd.startsWith(content))[0];
			if (autoComplete === undefined) return;

			(ev.target as HTMLInputElement).value = autoComplete;
		} else if (ev.key === 'ArrowUp') {
			(ev.target as HTMLInputElement).value = CommandHistoryStore.goBackAndGetPrevious();
		} else if (ev.key === 'ArrowDown') {
			(ev.target as HTMLInputElement).value = CommandHistoryStore.goForwardAndGetNext();
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
