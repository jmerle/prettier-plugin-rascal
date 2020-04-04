import * as fs from 'fs';
import * as path from 'path';
import { getASTTypes } from './ast-parser';

const types = getASTTypes();
const lines: string[] = [];

lines.push('package com.jaspervanmerle.rascalparser');
lines.push('');
lines.push('import com.github.salomonbrys.kotson.*');
lines.push('import com.google.gson.*');
lines.push('import org.rascalmpl.ast.*');
lines.push('import org.rascalmpl.ast.Char');
lines.push('import org.rascalmpl.ast.Target');
lines.push('');
lines.push("// This file is automatically generated by running 'yarn generate:ast-converter'");
lines.push('');

lines.push('object ASTConverter : IASTVisitor<JsonObject> {');

for (const parentType in types) {
  for (const subType in types[parentType]) {
    const members = types[parentType][subType].map(member => {
      const methodCall = member.type === 'java.lang.String' ? '' : '.accept(this)';
      return `"${member.name}" to x.${member.name}${methodCall}`;
    });

    lines.push(`  override fun visit${parentType}${subType}(x: ${parentType}.${subType}): JsonObject {`);
    lines.push(`    return addMetadata(x, "${parentType}.${subType}", jsonObject(${members.join(', ')}))`);
    lines.push('  }');
    lines.push('');
  }
}

lines.push('  private fun addMetadata(x: AbstractAST, type: String, content: JsonObject): JsonObject {');
lines.push('    content["_type"] = type');
lines.push('    content["_start"] = x.location.offset');
lines.push('    content["_end"] = x.location.offset + x.location.length');
lines.push('    return content');
lines.push('  }');
lines.push('');
lines.push('  private fun List<AbstractAST>.accept(visitor: IASTVisitor<*>): JsonArray {');
lines.push('    return this.map { it.accept(visitor) }.toJsonArray()');
lines.push('  }');
lines.push('}');

const outputPath = path.resolve(
  __dirname,
  '../rascal-parser/src/main/kotlin/com/jaspervanmerle/rascalparser/ASTConverter.kt',
);
fs.writeFileSync(outputPath, lines.join('\n') + '\n');

console.log(`Successfully wrote ASTConverter to ${outputPath}`);
