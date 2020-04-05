import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printTargetEmptyNode(
  node: TargetEmptyNode,
  path: FastPath<TargetEmptyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Target.Empty' is not implemented yet");
}

export function printTargetLabeledNode(
  node: TargetLabeledNode,
  path: FastPath<TargetLabeledNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Target.Labeled' is not implemented yet");
}
