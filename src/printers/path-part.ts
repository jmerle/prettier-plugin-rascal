import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printPathPartInterpolatedNode(
  node: PathPartInterpolatedNode,
  path: FastPath<PathPartInterpolatedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'PathPart.Interpolated' is not implemented yet");
}

export function printPathPartNonInterpolatedNode(
  node: PathPartNonInterpolatedNode,
  path: FastPath<PathPartNonInterpolatedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'PathPart.NonInterpolated' is not implemented yet");
}
