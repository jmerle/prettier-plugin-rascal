import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printAssignmentAdditionNode(
  node: AssignmentAdditionNode,
  path: FastPath<AssignmentAdditionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignment.Addition' is not implemented yet");
}

export function printAssignmentAppendNode(
  node: AssignmentAppendNode,
  path: FastPath<AssignmentAppendNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignment.Append' is not implemented yet");
}

export function printAssignmentDefaultNode(
  node: AssignmentDefaultNode,
  path: FastPath<AssignmentDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignment.Default' is not implemented yet");
}

export function printAssignmentDivisionNode(
  node: AssignmentDivisionNode,
  path: FastPath<AssignmentDivisionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignment.Division' is not implemented yet");
}

export function printAssignmentIfDefinedNode(
  node: AssignmentIfDefinedNode,
  path: FastPath<AssignmentIfDefinedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignment.IfDefined' is not implemented yet");
}

export function printAssignmentIntersectionNode(
  node: AssignmentIntersectionNode,
  path: FastPath<AssignmentIntersectionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignment.Intersection' is not implemented yet");
}

export function printAssignmentProductNode(
  node: AssignmentProductNode,
  path: FastPath<AssignmentProductNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignment.Product' is not implemented yet");
}

export function printAssignmentSubtractionNode(
  node: AssignmentSubtractionNode,
  path: FastPath<AssignmentSubtractionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assignment.Subtraction' is not implemented yet");
}
