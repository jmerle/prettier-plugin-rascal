import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printFunctionModifierDefaultNode(
  node: FunctionModifierDefaultNode,
  path: FastPath<FunctionModifierDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'FunctionModifier.Default' is not implemented yet");
}

export function printFunctionModifierJavaNode(
  node: FunctionModifierJavaNode,
  path: FastPath<FunctionModifierJavaNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'FunctionModifier.Java' is not implemented yet");
}

export function printFunctionModifierTestNode(
  node: FunctionModifierTestNode,
  path: FastPath<FunctionModifierTestNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'FunctionModifier.Test' is not implemented yet");
}
