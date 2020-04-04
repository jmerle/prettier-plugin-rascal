import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printFunctionDeclarationAbstract(
  path: FastPath<FunctionDeclarationAbstractNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'FunctionDeclaration.Abstract' is not implemented yet");
}

export function printFunctionDeclarationConditional(
  path: FastPath<FunctionDeclarationConditionalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'FunctionDeclaration.Conditional' is not implemented yet");
}

export function printFunctionDeclarationDefault(
  path: FastPath<FunctionDeclarationDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'FunctionDeclaration.Default' is not implemented yet");
}

export function printFunctionDeclarationExpression(
  path: FastPath<FunctionDeclarationExpressionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'FunctionDeclaration.Expression' is not implemented yet");
}
