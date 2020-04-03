import * as path from 'path';
import { AST, ParserOptions, Plugin } from 'prettier';
import * as execa from 'execa';

export function parse(text: string, parsers: Plugin['parsers'], options: ParserOptions): AST {
  const jarFile = path.resolve(__dirname, 'rascal-parser.jar');
  const { stdout } = execa.sync('java', ['-jar', jarFile], { input: text });

  const ast = JSON.parse(stdout);

  if (ast.error !== undefined) {
    throw new Error(ast.error);
  }

  return ast;
}

export function locStart(node: ASTNode): number {
  return node.start;
}

export function locEnd(node: ASTNode): number {
  return node.end;
}
