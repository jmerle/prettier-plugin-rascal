import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStartAbsentNode(
  node: StartAbsentNode,
  path: FastPath<StartAbsentNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Start.Absent' is not implemented yet");
}

export function printStartPresentNode(
  node: StartPresentNode,
  path: FastPath<StartPresentNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Start.Present' is not implemented yet");
}
