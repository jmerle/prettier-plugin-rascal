import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printToplevelGivenVisibilityNode(
  node: ToplevelGivenVisibilityNode,
  path: FastPath<ToplevelGivenVisibilityNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Toplevel.GivenVisibility' is not implemented yet");
}
