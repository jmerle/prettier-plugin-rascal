import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printDataTypeSelectorSelectorNode(
  node: DataTypeSelectorSelectorNode,
  path: FastPath<DataTypeSelectorSelectorNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'DataTypeSelector.Selector' is not implemented yet");
}
