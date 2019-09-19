#!/usr/bin/env node
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const arguments = process.argv.slice(2);

let command = 'yarn schematics ng-layer-generator:ng-layer-generator';
arguments.forEach(arg => {
  command = `${command} ${arg}`;
});

async function main() {
  try {
    const { stdout } = await exec(`${command} --color`);
    console.log(stdout);
  } catch (e) {
    console.error(e);
  }
}
main();
