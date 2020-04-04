import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printKindAliasNode(
  path: FastPath<KindAliasNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Kind.Alias' is not implemented yet");
}

export function printKindAllNode(
  path: FastPath<KindAllNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Kind.All' is not implemented yet");
}

export function printKindAnnoNode(
  path: FastPath<KindAnnoNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Kind.Anno' is not implemented yet");
}

export function printKindDataNode(
  path: FastPath<KindDataNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Kind.Data' is not implemented yet");
}

export function printKindFunctionNode(
  path: FastPath<KindFunctionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Kind.Function' is not implemented yet");
}

export function printKindModuleNode(
  path: FastPath<KindModuleNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Kind.Module' is not implemented yet");
}

export function printKindTagNode(
  path: FastPath<KindTagNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Kind.Tag' is not implemented yet");
}

export function printKindVariableNode(
  path: FastPath<KindVariableNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Kind.Variable' is not implemented yet");
}

export function printKindViewNode(
  path: FastPath<KindViewNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Kind.View' is not implemented yet");
}
