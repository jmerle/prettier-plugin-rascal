import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printAssignableAnnotation(
  path: FastPath<AssignableAnnotationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Annotation' is not implemented yet");
}

export function printAssignableBracket(
  path: FastPath<AssignableBracketNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Bracket' is not implemented yet");
}

export function printAssignableConstructor(
  path: FastPath<AssignableConstructorNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Constructor' is not implemented yet");
}

export function printAssignableFieldAccess(
  path: FastPath<AssignableFieldAccessNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.FieldAccess' is not implemented yet");
}

export function printAssignableIfDefinedOrDefault(
  path: FastPath<AssignableIfDefinedOrDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.IfDefinedOrDefault' is not implemented yet");
}

export function printAssignableSlice(
  path: FastPath<AssignableSliceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Slice' is not implemented yet");
}

export function printAssignableSliceStep(
  path: FastPath<AssignableSliceStepNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.SliceStep' is not implemented yet");
}

export function printAssignableSubscript(
  path: FastPath<AssignableSubscriptNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Subscript' is not implemented yet");
}

export function printAssignableTuple(
  path: FastPath<AssignableTupleNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Tuple' is not implemented yet");
}

export function printAssignableVariable(
  path: FastPath<AssignableVariableNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Variable' is not implemented yet");
}
