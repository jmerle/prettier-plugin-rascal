import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStringMiddleInterpolatedNode(
  path: FastPath<StringMiddleInterpolatedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringMiddle.Interpolated' is not implemented yet");
}

export function printStringMiddleMidNode(
  path: FastPath<StringMiddleMidNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringMiddle.Mid' is not implemented yet");
}

export function printStringMiddleTemplateNode(
  path: FastPath<StringMiddleTemplateNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringMiddle.Template' is not implemented yet");
}
