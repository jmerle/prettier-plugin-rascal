import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printLocalVariableDeclarationDefaultNode(
  node: LocalVariableDeclarationDefaultNode,
  path: FastPath<LocalVariableDeclarationDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'LocalVariableDeclaration.Default' is not implemented yet");
}

export function printLocalVariableDeclarationDynamicNode(
  node: LocalVariableDeclarationDynamicNode,
  path: FastPath<LocalVariableDeclarationDynamicNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'LocalVariableDeclaration.Dynamic' is not implemented yet");
}
