import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printAssignmentAdditionNode(
  path: FastPath<AssignmentAdditionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Addition' is not implemented yet");
}

export function printAssignmentAppendNode(
  path: FastPath<AssignmentAppendNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Append' is not implemented yet");
}

export function printAssignmentDefaultNode(
  path: FastPath<AssignmentDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Default' is not implemented yet");
}

export function printAssignmentDivisionNode(
  path: FastPath<AssignmentDivisionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Division' is not implemented yet");
}

export function printAssignmentIfDefinedNode(
  path: FastPath<AssignmentIfDefinedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.IfDefined' is not implemented yet");
}

export function printAssignmentIntersectionNode(
  path: FastPath<AssignmentIntersectionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Intersection' is not implemented yet");
}

export function printAssignmentProductNode(
  path: FastPath<AssignmentProductNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Product' is not implemented yet");
}

export function printAssignmentSubtractionNode(
  path: FastPath<AssignmentSubtractionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Subtraction' is not implemented yet");
}
