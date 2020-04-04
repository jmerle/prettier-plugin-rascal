import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printDeclarationAliasNode(
  path: FastPath<DeclarationAliasNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.Alias' is not implemented yet");
}

export function printDeclarationAnnotationNode(
  path: FastPath<DeclarationAnnotationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.Annotation' is not implemented yet");
}

export function printDeclarationDataNode(
  path: FastPath<DeclarationDataNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.Data' is not implemented yet");
}

export function printDeclarationDataAbstractNode(
  path: FastPath<DeclarationDataAbstractNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.DataAbstract' is not implemented yet");
}

export function printDeclarationFunctionNode(
  path: FastPath<DeclarationFunctionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.Function' is not implemented yet");
}

export function printDeclarationTagNode(
  path: FastPath<DeclarationTagNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.Tag' is not implemented yet");
}

export function printDeclarationVariableNode(
  path: FastPath<DeclarationVariableNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.Variable' is not implemented yet");
}
