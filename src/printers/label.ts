import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printLabelDefaultNode(
  node: LabelDefaultNode,
  path: FastPath<LabelDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Label.Default' is not implemented yet");
}

export function printLabelEmptyNode(
  node: LabelEmptyNode,
  path: FastPath<LabelEmptyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Label.Empty' is not implemented yet");
}
