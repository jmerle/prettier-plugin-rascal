import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printDataTargetEmptyNode(
  node: DataTargetEmptyNode,
  path: FastPath<DataTargetEmptyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'DataTarget.Empty' is not implemented yet");
}

export function printDataTargetLabeledNode(
  node: DataTargetLabeledNode,
  path: FastPath<DataTargetLabeledNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'DataTarget.Labeled' is not implemented yet");
}
