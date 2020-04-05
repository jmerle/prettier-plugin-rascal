import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printBasicTypeBagNode(
  node: BasicTypeBagNode,
  path: FastPath<BasicTypeBagNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Bag' is not implemented yet");
}

export function printBasicTypeBoolNode(
  node: BasicTypeBoolNode,
  path: FastPath<BasicTypeBoolNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Bool' is not implemented yet");
}

export function printBasicTypeDateTimeNode(
  node: BasicTypeDateTimeNode,
  path: FastPath<BasicTypeDateTimeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.DateTime' is not implemented yet");
}

export function printBasicTypeIntNode(
  node: BasicTypeIntNode,
  path: FastPath<BasicTypeIntNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Int' is not implemented yet");
}

export function printBasicTypeListNode(
  node: BasicTypeListNode,
  path: FastPath<BasicTypeListNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.List' is not implemented yet");
}

export function printBasicTypeListRelationNode(
  node: BasicTypeListRelationNode,
  path: FastPath<BasicTypeListRelationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.ListRelation' is not implemented yet");
}

export function printBasicTypeLocNode(
  node: BasicTypeLocNode,
  path: FastPath<BasicTypeLocNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Loc' is not implemented yet");
}

export function printBasicTypeMapNode(
  node: BasicTypeMapNode,
  path: FastPath<BasicTypeMapNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Map' is not implemented yet");
}

export function printBasicTypeNodeNode(
  node: BasicTypeNodeNode,
  path: FastPath<BasicTypeNodeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Node' is not implemented yet");
}

export function printBasicTypeNumNode(
  node: BasicTypeNumNode,
  path: FastPath<BasicTypeNumNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Num' is not implemented yet");
}

export function printBasicTypeRationalNode(
  node: BasicTypeRationalNode,
  path: FastPath<BasicTypeRationalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Rational' is not implemented yet");
}

export function printBasicTypeRealNode(
  node: BasicTypeRealNode,
  path: FastPath<BasicTypeRealNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Real' is not implemented yet");
}

export function printBasicTypeRelationNode(
  node: BasicTypeRelationNode,
  path: FastPath<BasicTypeRelationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Relation' is not implemented yet");
}

export function printBasicTypeSetNode(
  node: BasicTypeSetNode,
  path: FastPath<BasicTypeSetNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Set' is not implemented yet");
}

export function printBasicTypeStringNode(
  node: BasicTypeStringNode,
  path: FastPath<BasicTypeStringNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.String' is not implemented yet");
}

export function printBasicTypeTupleNode(
  node: BasicTypeTupleNode,
  path: FastPath<BasicTypeTupleNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Tuple' is not implemented yet");
}

export function printBasicTypeTypeNode(
  node: BasicTypeTypeNode,
  path: FastPath<BasicTypeTypeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Type' is not implemented yet");
}

export function printBasicTypeValueNode(
  node: BasicTypeValueNode,
  path: FastPath<BasicTypeValueNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Value' is not implemented yet");
}

export function printBasicTypeVoidNode(
  node: BasicTypeVoidNode,
  path: FastPath<BasicTypeVoidNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'BasicType.Void' is not implemented yet");
}
