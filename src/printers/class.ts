import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printClassBracketNode(
  node: ClassBracketNode,
  path: FastPath<ClassBracketNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Class.Bracket' is not implemented yet");
}

export function printClassComplementNode(
  node: ClassComplementNode,
  path: FastPath<ClassComplementNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Class.Complement' is not implemented yet");
}

export function printClassDifferenceNode(
  node: ClassDifferenceNode,
  path: FastPath<ClassDifferenceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Class.Difference' is not implemented yet");
}

export function printClassIntersectionNode(
  node: ClassIntersectionNode,
  path: FastPath<ClassIntersectionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Class.Intersection' is not implemented yet");
}

export function printClassSimpleCharclassNode(
  node: ClassSimpleCharclassNode,
  path: FastPath<ClassSimpleCharclassNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Class.SimpleCharclass' is not implemented yet");
}

export function printClassUnionNode(
  node: ClassUnionNode,
  path: FastPath<ClassUnionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Class.Union' is not implemented yet");
}
