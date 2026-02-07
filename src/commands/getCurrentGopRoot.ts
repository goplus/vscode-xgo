/*---------------------------------------------------------
 * Copyright 2022 The Go Authors. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';

import { CommandFactory } from '.';
import { getCurrentXGoRoot as utilGetCurrentGopRoot } from '../util';

export const getCurrentGopRoot: CommandFactory = () => {
	return () => {
		const goRoot = utilGetCurrentGopRoot();
		const msg = `${goRoot} is the current GOPROOT.`;
		vscode.window.showInformationMessage(msg);
		return goRoot;
	};
};
