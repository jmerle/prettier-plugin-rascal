import * as path from 'path';
import { ParserOptions, Plugin } from 'prettier';
import * as execa from 'execa';

function getJarFile(): string {
  const productionPath = path.resolve(__dirname, 'rascal-parser.jar');
  const developmentPath = path.resolve(__dirname, '../dist/rascal-parser.jar');
  return path.basename(__dirname) === 'dist' ? productionPath : developmentPath;
}

export function parse(text: string, parsers: Plugin['parsers'], options: ParserOptions): ASTNode {
  const { stdout } = execa.sync('java', ['-jar', getJarFile()], { input: text });

  const ast = JSON.parse(stdout);

  if (ast.error !== undefined) {
    throw new Error(ast.error);
  }

  return ast;
}

export function locStart(node: ASTNode): number {
  return node._start;
}

export function locEnd(node: ASTNode): number {
  return node._end;
}
