import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printModuleDefaultNode(
  node: ModuleDefaultNode,
  path: FastPath<ModuleDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  return concat([path.call(print, 'header'), hardline, hardline, path.call(print, 'body'), hardline]);
}
