import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printExpressionAddition(
  path: FastPath<ExpressionAdditionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Addition' is not implemented yet");
}

export function printExpressionAll(
  path: FastPath<ExpressionAllNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.All' is not implemented yet");
}

export function printExpressionAnd(
  path: FastPath<ExpressionAndNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.And' is not implemented yet");
}

export function printExpressionAnti(
  path: FastPath<ExpressionAntiNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Anti' is not implemented yet");
}

export function printExpressionAny(
  path: FastPath<ExpressionAnyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Any' is not implemented yet");
}

export function printExpressionAppendAfter(
  path: FastPath<ExpressionAppendAfterNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.AppendAfter' is not implemented yet");
}

export function printExpressionAsType(
  path: FastPath<ExpressionAsTypeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.AsType' is not implemented yet");
}

export function printExpressionBracket(
  path: FastPath<ExpressionBracketNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Bracket' is not implemented yet");
}

export function printExpressionCallOrTree(
  path: FastPath<ExpressionCallOrTreeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.CallOrTree' is not implemented yet");
}

export function printExpressionClosure(
  path: FastPath<ExpressionClosureNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Closure' is not implemented yet");
}

export function printExpressionComposition(
  path: FastPath<ExpressionCompositionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Composition' is not implemented yet");
}

export function printExpressionComprehension(
  path: FastPath<ExpressionComprehensionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Comprehension' is not implemented yet");
}

export function printExpressionConcrete(
  path: FastPath<ExpressionConcreteNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Concrete' is not implemented yet");
}

export function printExpressionDescendant(
  path: FastPath<ExpressionDescendantNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Descendant' is not implemented yet");
}

export function printExpressionDivision(
  path: FastPath<ExpressionDivisionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Division' is not implemented yet");
}

export function printExpressionEnumerator(
  path: FastPath<ExpressionEnumeratorNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Enumerator' is not implemented yet");
}

export function printExpressionEquals(
  path: FastPath<ExpressionEqualsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Equals' is not implemented yet");
}

export function printExpressionEquivalence(
  path: FastPath<ExpressionEquivalenceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Equivalence' is not implemented yet");
}

export function printExpressionFieldAccess(
  path: FastPath<ExpressionFieldAccessNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.FieldAccess' is not implemented yet");
}

export function printExpressionFieldProject(
  path: FastPath<ExpressionFieldProjectNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.FieldProject' is not implemented yet");
}

export function printExpressionFieldUpdate(
  path: FastPath<ExpressionFieldUpdateNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.FieldUpdate' is not implemented yet");
}

export function printExpressionGetAnnotation(
  path: FastPath<ExpressionGetAnnotationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.GetAnnotation' is not implemented yet");
}

export function printExpressionGreaterThan(
  path: FastPath<ExpressionGreaterThanNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.GreaterThan' is not implemented yet");
}

export function printExpressionGreaterThanOrEq(
  path: FastPath<ExpressionGreaterThanOrEqNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.GreaterThanOrEq' is not implemented yet");
}

export function printExpressionHas(
  path: FastPath<ExpressionHasNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Has' is not implemented yet");
}

export function printExpressionIfDefinedOtherwise(
  path: FastPath<ExpressionIfDefinedOtherwiseNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.IfDefinedOtherwise' is not implemented yet");
}

export function printExpressionIfThenElse(
  path: FastPath<ExpressionIfThenElseNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.IfThenElse' is not implemented yet");
}

export function printExpressionImplication(
  path: FastPath<ExpressionImplicationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Implication' is not implemented yet");
}

export function printExpressionIn(
  path: FastPath<ExpressionInNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.In' is not implemented yet");
}

export function printExpressionInsertBefore(
  path: FastPath<ExpressionInsertBeforeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.InsertBefore' is not implemented yet");
}

export function printExpressionIntersection(
  path: FastPath<ExpressionIntersectionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Intersection' is not implemented yet");
}

export function printExpressionIs(
  path: FastPath<ExpressionIsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Is' is not implemented yet");
}

export function printExpressionIsDefined(
  path: FastPath<ExpressionIsDefinedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.IsDefined' is not implemented yet");
}

export function printExpressionIt(
  path: FastPath<ExpressionItNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.It' is not implemented yet");
}

export function printExpressionJoin(
  path: FastPath<ExpressionJoinNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Join' is not implemented yet");
}

export function printExpressionLessThan(
  path: FastPath<ExpressionLessThanNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.LessThan' is not implemented yet");
}

export function printExpressionLessThanOrEq(
  path: FastPath<ExpressionLessThanOrEqNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.LessThanOrEq' is not implemented yet");
}

export function printExpressionList(
  path: FastPath<ExpressionListNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.List' is not implemented yet");
}

export function printExpressionLiteral(
  path: FastPath<ExpressionLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Literal' is not implemented yet");
}

export function printExpressionMap(
  path: FastPath<ExpressionMapNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Map' is not implemented yet");
}

export function printExpressionMatch(
  path: FastPath<ExpressionMatchNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Match' is not implemented yet");
}

export function printExpressionModulo(
  path: FastPath<ExpressionModuloNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Modulo' is not implemented yet");
}

export function printExpressionMultiVariable(
  path: FastPath<ExpressionMultiVariableNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.MultiVariable' is not implemented yet");
}

export function printExpressionNegation(
  path: FastPath<ExpressionNegationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Negation' is not implemented yet");
}

export function printExpressionNegative(
  path: FastPath<ExpressionNegativeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Negative' is not implemented yet");
}

export function printExpressionNoMatch(
  path: FastPath<ExpressionNoMatchNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.NoMatch' is not implemented yet");
}

export function printExpressionNonEmptyBlock(
  path: FastPath<ExpressionNonEmptyBlockNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.NonEmptyBlock' is not implemented yet");
}

export function printExpressionNonEquals(
  path: FastPath<ExpressionNonEqualsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.NonEquals' is not implemented yet");
}

export function printExpressionNotIn(
  path: FastPath<ExpressionNotInNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.NotIn' is not implemented yet");
}

export function printExpressionOr(
  path: FastPath<ExpressionOrNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Or' is not implemented yet");
}

export function printExpressionProduct(
  path: FastPath<ExpressionProductNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Product' is not implemented yet");
}

export function printExpressionQualifiedName(
  path: FastPath<ExpressionQualifiedNameNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.QualifiedName' is not implemented yet");
}

export function printExpressionRange(
  path: FastPath<ExpressionRangeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Range' is not implemented yet");
}

export function printExpressionReducer(
  path: FastPath<ExpressionReducerNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Reducer' is not implemented yet");
}

export function printExpressionReifiedType(
  path: FastPath<ExpressionReifiedTypeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.ReifiedType' is not implemented yet");
}

export function printExpressionReifyType(
  path: FastPath<ExpressionReifyTypeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.ReifyType' is not implemented yet");
}

export function printExpressionRemainder(
  path: FastPath<ExpressionRemainderNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Remainder' is not implemented yet");
}

export function printExpressionSet(
  path: FastPath<ExpressionSetNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Set' is not implemented yet");
}

export function printExpressionSetAnnotation(
  path: FastPath<ExpressionSetAnnotationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.SetAnnotation' is not implemented yet");
}

export function printExpressionSlice(
  path: FastPath<ExpressionSliceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Slice' is not implemented yet");
}

export function printExpressionSliceStep(
  path: FastPath<ExpressionSliceStepNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.SliceStep' is not implemented yet");
}

export function printExpressionSplice(
  path: FastPath<ExpressionSpliceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Splice' is not implemented yet");
}

export function printExpressionSplicePlus(
  path: FastPath<ExpressionSplicePlusNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.SplicePlus' is not implemented yet");
}

export function printExpressionStepRange(
  path: FastPath<ExpressionStepRangeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.StepRange' is not implemented yet");
}

export function printExpressionSubscript(
  path: FastPath<ExpressionSubscriptNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Subscript' is not implemented yet");
}

export function printExpressionSubtraction(
  path: FastPath<ExpressionSubtractionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Subtraction' is not implemented yet");
}

export function printExpressionTransitiveClosure(
  path: FastPath<ExpressionTransitiveClosureNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.TransitiveClosure' is not implemented yet");
}

export function printExpressionTransitiveReflexiveClosure(
  path: FastPath<ExpressionTransitiveReflexiveClosureNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.TransitiveReflexiveClosure' is not implemented yet");
}

export function printExpressionTuple(
  path: FastPath<ExpressionTupleNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Tuple' is not implemented yet");
}

export function printExpressionTypedVariable(
  path: FastPath<ExpressionTypedVariableNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.TypedVariable' is not implemented yet");
}

export function printExpressionTypedVariableBecomes(
  path: FastPath<ExpressionTypedVariableBecomesNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.TypedVariableBecomes' is not implemented yet");
}

export function printExpressionVariableBecomes(
  path: FastPath<ExpressionVariableBecomesNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.VariableBecomes' is not implemented yet");
}

export function printExpressionVisit(
  path: FastPath<ExpressionVisitNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Visit' is not implemented yet");
}

export function printExpressionVoidClosure(
  path: FastPath<ExpressionVoidClosureNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.VoidClosure' is not implemented yet");
}
