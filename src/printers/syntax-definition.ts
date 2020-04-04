import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printSyntaxDefinitionKeyword(
  path: FastPath<SyntaxDefinitionKeywordNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'SyntaxDefinition.Keyword' is not implemented yet");
}

export function printSyntaxDefinitionLanguage(
  path: FastPath<SyntaxDefinitionLanguageNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'SyntaxDefinition.Language' is not implemented yet");
}

export function printSyntaxDefinitionLayout(
  path: FastPath<SyntaxDefinitionLayoutNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'SyntaxDefinition.Layout' is not implemented yet");
}

export function printSyntaxDefinitionLexical(
  path: FastPath<SyntaxDefinitionLexicalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'SyntaxDefinition.Lexical' is not implemented yet");
}
