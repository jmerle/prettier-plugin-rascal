import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printDeclarationAlias(
  path: FastPath<DeclarationAliasNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.Alias' is not implemented yet");
}

export function printDeclarationAnnotation(
  path: FastPath<DeclarationAnnotationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.Annotation' is not implemented yet");
}

export function printDeclarationData(
  path: FastPath<DeclarationDataNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.Data' is not implemented yet");
}

export function printDeclarationDataAbstract(
  path: FastPath<DeclarationDataAbstractNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.DataAbstract' is not implemented yet");
}

export function printDeclarationFunction(
  path: FastPath<DeclarationFunctionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.Function' is not implemented yet");
}

export function printDeclarationTag(
  path: FastPath<DeclarationTagNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.Tag' is not implemented yet");
}

export function printDeclarationVariable(
  path: FastPath<DeclarationVariableNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Declaration.Variable' is not implemented yet");
}
