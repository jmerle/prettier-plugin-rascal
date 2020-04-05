import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printFunctionModifiersModifierlistNode(
  node: FunctionModifiersModifierlistNode,
  path: FastPath<FunctionModifiersModifierlistNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'FunctionModifiers.Modifierlist' is not implemented yet");
}
