import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStringTailMidInterpolated(
  path: FastPath<StringTailMidInterpolatedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringTail.MidInterpolated' is not implemented yet");
}

export function printStringTailMidTemplate(
  path: FastPath<StringTailMidTemplateNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringTail.MidTemplate' is not implemented yet");
}

export function printStringTailPost(
  path: FastPath<StringTailPostNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringTail.Post' is not implemented yet");
}
