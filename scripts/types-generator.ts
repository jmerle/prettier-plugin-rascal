import * as fs from 'fs';
import * as path from 'path';
import { getASTTypes } from './ast-parser';

function getNodeName(parentType: string, subType: string): string {
  return parentType + subType + 'Node';
}

function getTypeName(memberType: string): string {
  if (memberType === 'java.lang.String') {
    return 'string';
  }

  if (memberType.startsWith('java.util.List<')) {
    const innerType = memberType.substring('java.util.List<'.length, memberType.length - 1);
    return getTypeName(innerType) + '[]';
  }

  return memberType.split('.').pop() + 'Node';
}

const types = getASTTypes();
const lines: string[] = [];

lines.push("// This file is automatically generated by running 'yarn generate:types'");
lines.push('');
lines.push('interface BaseNode {');
lines.push('  _start: number;');
lines.push('  _end: number;');
lines.push('}');
lines.push('');

for (const parentType in types) {
  for (const subType in types[parentType]) {
    lines.push(`interface ${getNodeName(parentType, subType)} extends BaseNode {`);
    lines.push(`  _type: '${parentType}.${subType}';`);

    for (const member of types[parentType][subType]) {
      lines.push(`  ${member.name}: ${getTypeName(member.type)};`);
    }

    lines.push('}');
    lines.push('');
  }

  const subNodeNames = Object.keys(types[parentType]).map(subType => getNodeName(parentType, subType));
  lines.push(`type ${parentType}Node = ${subNodeNames.join(' | ')};`);
  lines.push('');
}

const parentNodeNames = Object.keys(types).map(parentType => parentType + 'Node');
lines.push(`type ASTNode = ${parentNodeNames.join(' | ')};`);

const outputPath = path.resolve(__dirname, '../src/types.d.ts');
fs.writeFileSync(outputPath, lines.join('\n') + '\n');

console.log(`Successfully wrote TypeScript types to ${outputPath}`);
