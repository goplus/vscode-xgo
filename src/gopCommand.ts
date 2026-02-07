'use strict';

import vscode = require('vscode');

export function runXGoCommand(dir: string, command: string, args: string[]): boolean {
	if (command === 'run') {
		runXGoTerminal(dir, 'xgo run .');
		return true;
	}
	return false;
}

function createXGoTerminal(dir: string): vscode.Terminal {
	for (const i in vscode.window.terminals) {
		if (vscode.window.terminals[i].name === '#xgo') {
			const term = vscode.window.terminals[i];
			term.dispose();
		}
	}
	return vscode.window.createTerminal({ name: '#xgo', cwd: dir });
}

function runXGoTerminal(dir: string, text: string) {
	const term = createXGoTerminal(dir);
	term.show(false);
	term.sendText(text);
}
