import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printProtocolPartInterpolatedNode(
  path: FastPath<ProtocolPartInterpolatedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ProtocolPart.Interpolated' is not implemented yet");
}

export function printProtocolPartNonInterpolatedNode(
  path: FastPath<ProtocolPartNonInterpolatedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ProtocolPart.NonInterpolated' is not implemented yet");
}
