import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStringTemplateDoWhileNode(
  node: StringTemplateDoWhileNode,
  path: FastPath<StringTemplateDoWhileNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'StringTemplate.DoWhile' is not implemented yet");
}

export function printStringTemplateForNode(
  node: StringTemplateForNode,
  path: FastPath<StringTemplateForNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'StringTemplate.For' is not implemented yet");
}

export function printStringTemplateIfThenNode(
  node: StringTemplateIfThenNode,
  path: FastPath<StringTemplateIfThenNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'StringTemplate.IfThen' is not implemented yet");
}

export function printStringTemplateIfThenElseNode(
  node: StringTemplateIfThenElseNode,
  path: FastPath<StringTemplateIfThenElseNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'StringTemplate.IfThenElse' is not implemented yet");
}

export function printStringTemplateWhileNode(
  node: StringTemplateWhileNode,
  path: FastPath<StringTemplateWhileNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'StringTemplate.While' is not implemented yet");
}
