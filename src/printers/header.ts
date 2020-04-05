import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printHeaderDefaultNode(
  node: HeaderDefaultNode,
  path: FastPath<HeaderDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Header.Default' is not implemented yet");
}

export function printHeaderParametersNode(
  node: HeaderParametersNode,
  path: FastPath<HeaderParametersNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Header.Parameters' is not implemented yet");
}
