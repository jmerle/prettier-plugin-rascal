import * as fs from 'fs';
import * as path from 'path';

export interface ASTMember {
  type: string;
  name: string;
}

export interface ASTTypes {
  [parentType: string]: {
    [subType: string]: ASTMember[];
  };
}

export function getASTTypes(): ASTTypes {
  const rascalDirectory = path.resolve(__dirname, '../../rascal');
  const astDirectory = path.resolve(rascalDirectory, 'src/org/rascalmpl/ast');

  if (!fs.existsSync(astDirectory)) {
    throw new Error(`Please clone the usethesource/rascal repository to ${rascalDirectory}`);
  }

  const typeFiles = fs
    .readdirSync(astDirectory)
    .filter(file => file !== 'AbstractAST.java' && file !== 'IVisitable.java' && !file.endsWith('ASTVisitor.java'))
    .map(file => path.resolve(astDirectory, file));

  const types: ASTTypes = {};
  const pattern = /(abstract class ([^ ]+)|static public class ([^ ]+)|private final ([^ ]+) ([^;]+))/g;

  for (const file of typeFiles) {
    const content = fs.readFileSync(file).toString();

    let currentParentType = null;
    let currentSubType = null;

    let match;
    while ((match = pattern.exec(content))) {
      const line = match[1];

      if (line.startsWith('abstract class ')) {
        currentParentType = match[2];

        types[currentParentType] = {};
      } else if (line.startsWith('static public class ')) {
        currentSubType = match[3];

        types[currentParentType][currentSubType] = [];
      } else if (line.startsWith('private final ')) {
        const type = match[4];
        const name = match[5];

        types[currentParentType][currentSubType].push({ type, name });
      }
    }
  }

  return types;
}
