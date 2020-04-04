import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printBasicTypeBag(
  path: FastPath<BasicTypeBagNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Bag' is not implemented yet");
}

export function printBasicTypeBool(
  path: FastPath<BasicTypeBoolNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Bool' is not implemented yet");
}

export function printBasicTypeDateTime(
  path: FastPath<BasicTypeDateTimeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.DateTime' is not implemented yet");
}

export function printBasicTypeInt(
  path: FastPath<BasicTypeIntNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Int' is not implemented yet");
}

export function printBasicTypeList(
  path: FastPath<BasicTypeListNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.List' is not implemented yet");
}

export function printBasicTypeListRelation(
  path: FastPath<BasicTypeListRelationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.ListRelation' is not implemented yet");
}

export function printBasicTypeLoc(
  path: FastPath<BasicTypeLocNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Loc' is not implemented yet");
}

export function printBasicTypeMap(
  path: FastPath<BasicTypeMapNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Map' is not implemented yet");
}

export function printBasicTypeNode(
  path: FastPath<BasicTypeNodeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Node' is not implemented yet");
}

export function printBasicTypeNum(
  path: FastPath<BasicTypeNumNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Num' is not implemented yet");
}

export function printBasicTypeRational(
  path: FastPath<BasicTypeRationalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Rational' is not implemented yet");
}

export function printBasicTypeReal(
  path: FastPath<BasicTypeRealNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Real' is not implemented yet");
}

export function printBasicTypeRelation(
  path: FastPath<BasicTypeRelationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Relation' is not implemented yet");
}

export function printBasicTypeSet(
  path: FastPath<BasicTypeSetNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Set' is not implemented yet");
}

export function printBasicTypeString(
  path: FastPath<BasicTypeStringNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.String' is not implemented yet");
}

export function printBasicTypeTuple(
  path: FastPath<BasicTypeTupleNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Tuple' is not implemented yet");
}

export function printBasicTypeType(
  path: FastPath<BasicTypeTypeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Type' is not implemented yet");
}

export function printBasicTypeValue(
  path: FastPath<BasicTypeValueNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Value' is not implemented yet");
}

export function printBasicTypeVoid(
  path: FastPath<BasicTypeVoidNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'BasicType.Void' is not implemented yet");
}
