import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printTypeBasicNode(
  node: TypeBasicNode,
  path: FastPath<TypeBasicNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Type.Basic' is not implemented yet");
}

export function printTypeBracketNode(
  node: TypeBracketNode,
  path: FastPath<TypeBracketNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Type.Bracket' is not implemented yet");
}

export function printTypeFunctionNode(
  node: TypeFunctionNode,
  path: FastPath<TypeFunctionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Type.Function' is not implemented yet");
}

export function printTypeSelectorNode(
  node: TypeSelectorNode,
  path: FastPath<TypeSelectorNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Type.Selector' is not implemented yet");
}

export function printTypeStructuredNode(
  node: TypeStructuredNode,
  path: FastPath<TypeStructuredNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Type.Structured' is not implemented yet");
}

export function printTypeSymbolNode(
  node: TypeSymbolNode,
  path: FastPath<TypeSymbolNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Type.Symbol' is not implemented yet");
}

export function printTypeUserNode(
  node: TypeUserNode,
  path: FastPath<TypeUserNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Type.User' is not implemented yet");
}

export function printTypeVariableNode(
  node: TypeVariableNode,
  path: FastPath<TypeVariableNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Type.Variable' is not implemented yet");
}
