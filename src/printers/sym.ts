import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printSymAlternative(
  path: FastPath<SymAlternativeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Alternative' is not implemented yet");
}

export function printSymCaseInsensitiveLiteral(
  path: FastPath<SymCaseInsensitiveLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.CaseInsensitiveLiteral' is not implemented yet");
}

export function printSymCharacterClass(
  path: FastPath<SymCharacterClassNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.CharacterClass' is not implemented yet");
}

export function printSymColumn(
  path: FastPath<SymColumnNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Column' is not implemented yet");
}

export function printSymEmpty(
  path: FastPath<SymEmptyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Empty' is not implemented yet");
}

export function printSymEndOfLine(
  path: FastPath<SymEndOfLineNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.EndOfLine' is not implemented yet");
}

export function printSymExcept(
  path: FastPath<SymExceptNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Except' is not implemented yet");
}

export function printSymFollow(
  path: FastPath<SymFollowNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Follow' is not implemented yet");
}

export function printSymIter(
  path: FastPath<SymIterNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Iter' is not implemented yet");
}

export function printSymIterSep(
  path: FastPath<SymIterSepNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.IterSep' is not implemented yet");
}

export function printSymIterStar(
  path: FastPath<SymIterStarNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.IterStar' is not implemented yet");
}

export function printSymIterStarSep(
  path: FastPath<SymIterStarSepNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.IterStarSep' is not implemented yet");
}

export function printSymLabeled(
  path: FastPath<SymLabeledNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Labeled' is not implemented yet");
}

export function printSymLiteral(
  path: FastPath<SymLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Literal' is not implemented yet");
}

export function printSymNonterminal(
  path: FastPath<SymNonterminalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Nonterminal' is not implemented yet");
}

export function printSymNotFollow(
  path: FastPath<SymNotFollowNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.NotFollow' is not implemented yet");
}

export function printSymNotPrecede(
  path: FastPath<SymNotPrecedeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.NotPrecede' is not implemented yet");
}

export function printSymOptional(
  path: FastPath<SymOptionalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Optional' is not implemented yet");
}

export function printSymParameter(
  path: FastPath<SymParameterNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Parameter' is not implemented yet");
}

export function printSymParametrized(
  path: FastPath<SymParametrizedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Parametrized' is not implemented yet");
}

export function printSymPrecede(
  path: FastPath<SymPrecedeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Precede' is not implemented yet");
}

export function printSymSequence(
  path: FastPath<SymSequenceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Sequence' is not implemented yet");
}

export function printSymStart(
  path: FastPath<SymStartNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Start' is not implemented yet");
}

export function printSymStartOfLine(
  path: FastPath<SymStartOfLineNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.StartOfLine' is not implemented yet");
}

export function printSymUnequal(
  path: FastPath<SymUnequalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Unequal' is not implemented yet");
}
