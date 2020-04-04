import { getASTTypes } from './ast-parser';

const types = getASTTypes();

console.log('switch (node._type) {');

const lastParentType = Object.keys(types).pop();
const lastSubType = Object.keys(types[lastParentType]).pop();
const lastType = `${lastParentType}.${lastSubType}`;

for (const parentType in types) {
  for (const subType in types[parentType]) {
    const type = `${parentType}.${subType}`;

    console.log(`case '${type}': {`);
    console.log('// TODO(jmerle): Implement');
    console.log('console.log(node);');
    console.log(`throw new Error("Node type '${type}' is not implemented yet");`);
    console.log('}');

    if (type !== lastType) {
      console.log();
    }
  }
}

console.log('}');
