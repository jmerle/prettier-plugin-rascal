import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printPathPartInterpolated(
  path: FastPath<PathPartInterpolatedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'PathPart.Interpolated' is not implemented yet");
}

export function printPathPartNonInterpolated(
  path: FastPath<PathPartNonInterpolatedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'PathPart.NonInterpolated' is not implemented yet");
}
