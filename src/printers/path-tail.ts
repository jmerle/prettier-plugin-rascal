import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printPathTailMidNode(
  node: PathTailMidNode,
  path: FastPath<PathTailMidNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'PathTail.Mid' is not implemented yet");
}

export function printPathTailPostNode(
  node: PathTailPostNode,
  path: FastPath<PathTailPostNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'PathTail.Post' is not implemented yet");
}
