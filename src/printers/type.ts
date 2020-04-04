import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printTypeBasic(
  path: FastPath<TypeBasicNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Type.Basic' is not implemented yet");
}

export function printTypeBracket(
  path: FastPath<TypeBracketNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Type.Bracket' is not implemented yet");
}

export function printTypeFunction(
  path: FastPath<TypeFunctionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Type.Function' is not implemented yet");
}

export function printTypeSelector(
  path: FastPath<TypeSelectorNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Type.Selector' is not implemented yet");
}

export function printTypeStructured(
  path: FastPath<TypeStructuredNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Type.Structured' is not implemented yet");
}

export function printTypeSymbol(
  path: FastPath<TypeSymbolNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Type.Symbol' is not implemented yet");
}

export function printTypeUser(
  path: FastPath<TypeUserNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Type.User' is not implemented yet");
}

export function printTypeVariable(
  path: FastPath<TypeVariableNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Type.Variable' is not implemented yet");
}
