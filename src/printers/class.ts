import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printClassBracket(
  path: FastPath<ClassBracketNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Class.Bracket' is not implemented yet");
}

export function printClassComplement(
  path: FastPath<ClassComplementNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Class.Complement' is not implemented yet");
}

export function printClassDifference(
  path: FastPath<ClassDifferenceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Class.Difference' is not implemented yet");
}

export function printClassIntersection(
  path: FastPath<ClassIntersectionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Class.Intersection' is not implemented yet");
}

export function printClassSimpleCharclass(
  path: FastPath<ClassSimpleCharclassNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Class.SimpleCharclass' is not implemented yet");
}

export function printClassUnion(
  path: FastPath<ClassUnionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Class.Union' is not implemented yet");
}
