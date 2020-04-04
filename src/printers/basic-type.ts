import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printBasicTypeBagNode(
  path: FastPath<BasicTypeBagNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Bag' is not implemented yet");
}

export function printBasicTypeBoolNode(
  path: FastPath<BasicTypeBoolNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Bool' is not implemented yet");
}

export function printBasicTypeDateTimeNode(
  path: FastPath<BasicTypeDateTimeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.DateTime' is not implemented yet");
}

export function printBasicTypeIntNode(
  path: FastPath<BasicTypeIntNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Int' is not implemented yet");
}

export function printBasicTypeListNode(
  path: FastPath<BasicTypeListNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.List' is not implemented yet");
}

export function printBasicTypeListRelationNode(
  path: FastPath<BasicTypeListRelationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.ListRelation' is not implemented yet");
}

export function printBasicTypeLocNode(
  path: FastPath<BasicTypeLocNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Loc' is not implemented yet");
}

export function printBasicTypeMapNode(
  path: FastPath<BasicTypeMapNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Map' is not implemented yet");
}

export function printBasicTypeNodeNode(
  path: FastPath<BasicTypeNodeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Node' is not implemented yet");
}

export function printBasicTypeNumNode(
  path: FastPath<BasicTypeNumNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Num' is not implemented yet");
}

export function printBasicTypeRationalNode(
  path: FastPath<BasicTypeRationalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Rational' is not implemented yet");
}

export function printBasicTypeRealNode(
  path: FastPath<BasicTypeRealNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Real' is not implemented yet");
}

export function printBasicTypeRelationNode(
  path: FastPath<BasicTypeRelationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Relation' is not implemented yet");
}

export function printBasicTypeSetNode(
  path: FastPath<BasicTypeSetNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Set' is not implemented yet");
}

export function printBasicTypeStringNode(
  path: FastPath<BasicTypeStringNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.String' is not implemented yet");
}

export function printBasicTypeTupleNode(
  path: FastPath<BasicTypeTupleNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Tuple' is not implemented yet");
}

export function printBasicTypeTypeNode(
  path: FastPath<BasicTypeTypeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Type' is not implemented yet");
}

export function printBasicTypeValueNode(
  path: FastPath<BasicTypeValueNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Value' is not implemented yet");
}

export function printBasicTypeVoidNode(
  path: FastPath<BasicTypeVoidNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Void' is not implemented yet");
}
