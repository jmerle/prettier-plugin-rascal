import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printSyntaxDefinitionKeywordNode(
  node: SyntaxDefinitionKeywordNode,
  path: FastPath<SyntaxDefinitionKeywordNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'SyntaxDefinition.Keyword' is not implemented yet");
}

export function printSyntaxDefinitionLanguageNode(
  node: SyntaxDefinitionLanguageNode,
  path: FastPath<SyntaxDefinitionLanguageNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'SyntaxDefinition.Language' is not implemented yet");
}

export function printSyntaxDefinitionLayoutNode(
  node: SyntaxDefinitionLayoutNode,
  path: FastPath<SyntaxDefinitionLayoutNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'SyntaxDefinition.Layout' is not implemented yet");
}

export function printSyntaxDefinitionLexicalNode(
  node: SyntaxDefinitionLexicalNode,
  path: FastPath<SyntaxDefinitionLexicalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'SyntaxDefinition.Lexical' is not implemented yet");
}
