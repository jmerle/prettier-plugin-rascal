import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printClassBracketNode(
  path: FastPath<ClassBracketNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Class.Bracket' is not implemented yet");
}

export function printClassComplementNode(
  path: FastPath<ClassComplementNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Class.Complement' is not implemented yet");
}

export function printClassDifferenceNode(
  path: FastPath<ClassDifferenceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Class.Difference' is not implemented yet");
}

export function printClassIntersectionNode(
  path: FastPath<ClassIntersectionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Class.Intersection' is not implemented yet");
}

export function printClassSimpleCharclassNode(
  path: FastPath<ClassSimpleCharclassNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Class.SimpleCharclass' is not implemented yet");
}

export function printClassUnionNode(
  path: FastPath<ClassUnionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Class.Union' is not implemented yet");
}
