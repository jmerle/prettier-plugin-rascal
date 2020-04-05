import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printFunctionDeclarationAbstractNode(
  node: FunctionDeclarationAbstractNode,
  path: FastPath<FunctionDeclarationAbstractNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'FunctionDeclaration.Abstract' is not implemented yet");
}

export function printFunctionDeclarationConditionalNode(
  node: FunctionDeclarationConditionalNode,
  path: FastPath<FunctionDeclarationConditionalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'FunctionDeclaration.Conditional' is not implemented yet");
}

export function printFunctionDeclarationDefaultNode(
  node: FunctionDeclarationDefaultNode,
  path: FastPath<FunctionDeclarationDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'FunctionDeclaration.Default' is not implemented yet");
}

export function printFunctionDeclarationExpressionNode(
  node: FunctionDeclarationExpressionNode,
  path: FastPath<FunctionDeclarationExpressionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'FunctionDeclaration.Expression' is not implemented yet");
}
