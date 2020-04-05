import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printModuleDefaultNode(
  node: ModuleDefaultNode,
  path: FastPath<ModuleDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  console.log(JSON.stringify(node, null, 2));
  const parts = [path.call(print, 'header')];

  if (node.body.toplevels.length > 0) {
    parts.push(hardline, hardline, path.call(print, 'body'));
  }

  parts.push(hardline);
  return concat(parts);
}
