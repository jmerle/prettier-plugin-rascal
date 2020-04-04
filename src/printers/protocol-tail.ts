import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printProtocolTailMid(
  path: FastPath<ProtocolTailMidNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ProtocolTail.Mid' is not implemented yet");
}

export function printProtocolTailPost(
  path: FastPath<ProtocolTailPostNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ProtocolTail.Post' is not implemented yet");
}
