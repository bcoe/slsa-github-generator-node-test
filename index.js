const {parseArgs} = require('@pkgjs/parseargs');
console.info(parseArgs({options: {help: {type: 'boolean', short: 'h'}}}));
