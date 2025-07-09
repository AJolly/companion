#!/usr/bin/env zx

import { fs, usePowerShell } from 'zx'
import { generateVersionString } from './lib.mts'

if (process.platform === 'win32') {
	usePowerShell() // to enable powershell
}

const build = await generateVersionString()
console.log('Writing BUILD:', build)

await fs.writeFile(new URL('../BUILD', import.meta.url), build)
 