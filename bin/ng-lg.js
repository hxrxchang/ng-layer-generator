#!/usr/bin/env node
const util = require('util');
const readline = require('readline');
const exec = util.promisify(require('child_process').exec);

let command = 'schematics ng-layer-generator:ng-layer-generator';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: コールバックどうにかする
rl.question('Please enter a name: ', name => {
  if (!name) {
    console.errro('name is need to specified');
    rl.close();
    process.exit(1);
  }
  command = `${command} --name=${name}`;

  rl.question(
    'Please enter a type name(ex: repository, usecase, query and so on): ',
    type => {
      if (!type) {
        console.error('type is need to specified');
        rl.close();
        process.exit(1);
      }
      command = `${command} --type=${type}`;

      rl.question(
        'Please enter a path name(where to generate file): ',
        path => {
          if (path) {
            command = `${command} --path=${path}`;
          }

          rl.question(
            'Please enter a project name(which project to generate file): ',
            project => {
              if (project) {
                command = `${command} --project=${project}`;
              }

              rl.close();
              main();
            }
          );
        }
      );
    }
  );
});

async function main() {
  try {
    const { stdout } = await exec(`${command} --color`);
    console.log(stdout);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
