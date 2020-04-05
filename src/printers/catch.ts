import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printCatchBindingNode(
  node: CatchBindingNode,
  path: FastPath<CatchBindingNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Catch.Binding' is not implemented yet");
}

export function printCatchDefaultNode(
  node: CatchDefaultNode,
  path: FastPath<CatchDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Catch.Default' is not implemented yet");
}
