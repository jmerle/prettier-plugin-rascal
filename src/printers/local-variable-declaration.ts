import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printLocalVariableDeclarationDefaultNode(
  path: FastPath<LocalVariableDeclarationDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'LocalVariableDeclaration.Default' is not implemented yet");
}

export function printLocalVariableDeclarationDynamicNode(
  path: FastPath<LocalVariableDeclarationDynamicNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'LocalVariableDeclaration.Dynamic' is not implemented yet");
}
