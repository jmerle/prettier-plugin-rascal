import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printProtocolTailMidNode(
  node: ProtocolTailMidNode,
  path: FastPath<ProtocolTailMidNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ProtocolTail.Mid' is not implemented yet");
}

export function printProtocolTailPostNode(
  node: ProtocolTailPostNode,
  path: FastPath<ProtocolTailPostNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ProtocolTail.Post' is not implemented yet");
}
