import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printAssignableAnnotationNode(
  path: FastPath<AssignableAnnotationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Annotation' is not implemented yet");
}

export function printAssignableBracketNode(
  path: FastPath<AssignableBracketNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Bracket' is not implemented yet");
}

export function printAssignableConstructorNode(
  path: FastPath<AssignableConstructorNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Constructor' is not implemented yet");
}

export function printAssignableFieldAccessNode(
  path: FastPath<AssignableFieldAccessNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.FieldAccess' is not implemented yet");
}

export function printAssignableIfDefinedOrDefaultNode(
  path: FastPath<AssignableIfDefinedOrDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.IfDefinedOrDefault' is not implemented yet");
}

export function printAssignableSliceNode(
  path: FastPath<AssignableSliceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Slice' is not implemented yet");
}

export function printAssignableSliceStepNode(
  path: FastPath<AssignableSliceStepNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.SliceStep' is not implemented yet");
}

export function printAssignableSubscriptNode(
  path: FastPath<AssignableSubscriptNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Subscript' is not implemented yet");
}

export function printAssignableTupleNode(
  path: FastPath<AssignableTupleNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Tuple' is not implemented yet");
}

export function printAssignableVariableNode(
  path: FastPath<AssignableVariableNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignable.Variable' is not implemented yet");
}
