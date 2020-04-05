import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printFieldIndexNode(
  node: FieldIndexNode,
  path: FastPath<FieldIndexNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Field.Index' is not implemented yet");
}

export function printFieldNameNode(
  node: FieldNameNode,
  path: FastPath<FieldNameNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Field.Name' is not implemented yet");
}
