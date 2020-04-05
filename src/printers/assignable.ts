import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printAssignableAnnotationNode(
  node: AssignableAnnotationNode,
  path: FastPath<AssignableAnnotationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignable.Annotation' is not implemented yet");
}

export function printAssignableBracketNode(
  node: AssignableBracketNode,
  path: FastPath<AssignableBracketNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignable.Bracket' is not implemented yet");
}

export function printAssignableConstructorNode(
  node: AssignableConstructorNode,
  path: FastPath<AssignableConstructorNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignable.Constructor' is not implemented yet");
}

export function printAssignableFieldAccessNode(
  node: AssignableFieldAccessNode,
  path: FastPath<AssignableFieldAccessNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignable.FieldAccess' is not implemented yet");
}

export function printAssignableIfDefinedOrDefaultNode(
  node: AssignableIfDefinedOrDefaultNode,
  path: FastPath<AssignableIfDefinedOrDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignable.IfDefinedOrDefault' is not implemented yet");
}

export function printAssignableSliceNode(
  node: AssignableSliceNode,
  path: FastPath<AssignableSliceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignable.Slice' is not implemented yet");
}

export function printAssignableSliceStepNode(
  node: AssignableSliceStepNode,
  path: FastPath<AssignableSliceStepNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignable.SliceStep' is not implemented yet");
}

export function printAssignableSubscriptNode(
  node: AssignableSubscriptNode,
  path: FastPath<AssignableSubscriptNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignable.Subscript' is not implemented yet");
}

export function printAssignableTupleNode(
  node: AssignableTupleNode,
  path: FastPath<AssignableTupleNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignable.Tuple' is not implemented yet");
}

export function printAssignableVariableNode(
  node: AssignableVariableNode,
  path: FastPath<AssignableVariableNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignable.Variable' is not implemented yet");
}
