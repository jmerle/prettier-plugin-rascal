import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printReplacementConditionalNode(
  path: FastPath<ReplacementConditionalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Replacement.Conditional' is not implemented yet");
}

export function printReplacementUnconditionalNode(
  path: FastPath<ReplacementUnconditionalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Replacement.Unconditional' is not implemented yet");
}
