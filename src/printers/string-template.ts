import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStringTemplateDoWhileNode(
  path: FastPath<StringTemplateDoWhileNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringTemplate.DoWhile' is not implemented yet");
}

export function printStringTemplateForNode(
  path: FastPath<StringTemplateForNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringTemplate.For' is not implemented yet");
}

export function printStringTemplateIfThenNode(
  path: FastPath<StringTemplateIfThenNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringTemplate.IfThen' is not implemented yet");
}

export function printStringTemplateIfThenElseNode(
  path: FastPath<StringTemplateIfThenElseNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringTemplate.IfThenElse' is not implemented yet");
}

export function printStringTemplateWhileNode(
  path: FastPath<StringTemplateWhileNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringTemplate.While' is not implemented yet");
}
