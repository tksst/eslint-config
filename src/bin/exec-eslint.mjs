#!/bin/env node

import { spawn } from "node:child_process";
import process from "node:process";

async function spawn2(command, argv, options){

	return new Promise((resolve, reject) => {
		const result = spawn(command, argv, options);

		result.on("exit", () => {
			resolve(result);
		});

		result.on("error", (error) => {
			reject(error);
		});
	});
}


process.argv.shift();
process.argv.shift();

const result = await spawn2("./node_modules/.bin/eslint", process.argv, { stdio: "inherit" });

process.exit(result.exitCode);
