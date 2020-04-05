import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStringMiddleInterpolatedNode(
  node: StringMiddleInterpolatedNode,
  path: FastPath<StringMiddleInterpolatedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'StringMiddle.Interpolated' is not implemented yet");
}

export function printStringMiddleMidNode(
  node: StringMiddleMidNode,
  path: FastPath<StringMiddleMidNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'StringMiddle.Mid' is not implemented yet");
}

export function printStringMiddleTemplateNode(
  node: StringMiddleTemplateNode,
  path: FastPath<StringMiddleTemplateNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'StringMiddle.Template' is not implemented yet");
}
