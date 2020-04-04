import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printAssignmentAddition(
  path: FastPath<AssignmentAdditionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Addition' is not implemented yet");
}

export function printAssignmentAppend(
  path: FastPath<AssignmentAppendNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Append' is not implemented yet");
}

export function printAssignmentDefault(
  path: FastPath<AssignmentDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Default' is not implemented yet");
}

export function printAssignmentDivision(
  path: FastPath<AssignmentDivisionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Division' is not implemented yet");
}

export function printAssignmentIfDefined(
  path: FastPath<AssignmentIfDefinedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.IfDefined' is not implemented yet");
}

export function printAssignmentIntersection(
  path: FastPath<AssignmentIntersectionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Intersection' is not implemented yet");
}

export function printAssignmentProduct(
  path: FastPath<AssignmentProductNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Product' is not implemented yet");
}

export function printAssignmentSubtraction(
  path: FastPath<AssignmentSubtractionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Assignment.Subtraction' is not implemented yet");
}
