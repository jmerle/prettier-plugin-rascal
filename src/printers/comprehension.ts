import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printComprehensionList(
  path: FastPath<ComprehensionListNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Comprehension.List' is not implemented yet");
}

export function printComprehensionMap(
  path: FastPath<ComprehensionMapNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Comprehension.Map' is not implemented yet");
}

export function printComprehensionSet(
  path: FastPath<ComprehensionSetNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Comprehension.Set' is not implemented yet");
}
