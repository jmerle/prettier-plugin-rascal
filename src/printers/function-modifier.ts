import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printFunctionModifierDefaultNode(
  path: FastPath<FunctionModifierDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'FunctionModifier.Default' is not implemented yet");
}

export function printFunctionModifierJavaNode(
  path: FastPath<FunctionModifierJavaNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'FunctionModifier.Java' is not implemented yet");
}

export function printFunctionModifierTestNode(
  path: FastPath<FunctionModifierTestNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'FunctionModifier.Test' is not implemented yet");
}
