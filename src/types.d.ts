/* eslint-disable @typescript-eslint/camelcase,@typescript-eslint/class-name-casing */

interface BaseNode {
  _start: number;
  _end: number;
}

interface AssignableAnnotationNode extends BaseNode {
  _type: 'Assignable.Annotation';
  receiver: AssignableNode;
  annotation: NameNode;
}

interface AssignableBracketNode extends BaseNode {
  _type: 'Assignable.Bracket';
  arg: AssignableNode;
}

interface AssignableConstructorNode extends BaseNode {
  _type: 'Assignable.Constructor';
  name: NameNode;
  arguments: AssignableNode[];
}

interface AssignableFieldAccessNode extends BaseNode {
  _type: 'Assignable.FieldAccess';
  receiver: AssignableNode;
  field: NameNode;
}

interface AssignableIfDefinedOrDefaultNode extends BaseNode {
  _type: 'Assignable.IfDefinedOrDefault';
  receiver: AssignableNode;
  defaultExpression: ExpressionNode;
}

interface AssignableSliceNode extends BaseNode {
  _type: 'Assignable.Slice';
  receiver: AssignableNode;
  optFirst: OptionalExpressionNode;
  optLast: OptionalExpressionNode;
}

interface AssignableSliceStepNode extends BaseNode {
  _type: 'Assignable.SliceStep';
  receiver: AssignableNode;
  optFirst: OptionalExpressionNode;
  second: ExpressionNode;
  optLast: OptionalExpressionNode;
}

interface AssignableSubscriptNode extends BaseNode {
  _type: 'Assignable.Subscript';
  receiver: AssignableNode;
  subscript: ExpressionNode;
}

interface AssignableTupleNode extends BaseNode {
  _type: 'Assignable.Tuple';
  elements: AssignableNode[];
}

interface AssignableVariableNode extends BaseNode {
  _type: 'Assignable.Variable';
  qualifiedName: QualifiedNameNode;
}

type AssignableNode =
  | AssignableAnnotationNode
  | AssignableBracketNode
  | AssignableConstructorNode
  | AssignableFieldAccessNode
  | AssignableIfDefinedOrDefaultNode
  | AssignableSliceNode
  | AssignableSliceStepNode
  | AssignableSubscriptNode
  | AssignableTupleNode
  | AssignableVariableNode;

interface AssignmentAdditionNode extends BaseNode {
  _type: 'Assignment.Addition';
}

interface AssignmentAppendNode extends BaseNode {
  _type: 'Assignment.Append';
}

interface AssignmentDefaultNode extends BaseNode {
  _type: 'Assignment.Default';
}

interface AssignmentDivisionNode extends BaseNode {
  _type: 'Assignment.Division';
}

interface AssignmentIfDefinedNode extends BaseNode {
  _type: 'Assignment.IfDefined';
}

interface AssignmentIntersectionNode extends BaseNode {
  _type: 'Assignment.Intersection';
}

interface AssignmentProductNode extends BaseNode {
  _type: 'Assignment.Product';
}

interface AssignmentSubtractionNode extends BaseNode {
  _type: 'Assignment.Subtraction';
}

type AssignmentNode =
  | AssignmentAdditionNode
  | AssignmentAppendNode
  | AssignmentDefaultNode
  | AssignmentDivisionNode
  | AssignmentIfDefinedNode
  | AssignmentIntersectionNode
  | AssignmentProductNode
  | AssignmentSubtractionNode;

interface AssocAssociativeNode extends BaseNode {
  _type: 'Assoc.Associative';
}

interface AssocLeftNode extends BaseNode {
  _type: 'Assoc.Left';
}

interface AssocNonAssociativeNode extends BaseNode {
  _type: 'Assoc.NonAssociative';
}

interface AssocRightNode extends BaseNode {
  _type: 'Assoc.Right';
}

type AssocNode = AssocAssociativeNode | AssocLeftNode | AssocNonAssociativeNode | AssocRightNode;

interface BackslashLexicalNode extends BaseNode {
  _type: 'Backslash.Lexical';
  string: string;
}

type BackslashNode = BackslashLexicalNode;

interface BasicTypeBagNode extends BaseNode {
  _type: 'BasicType.Bag';
}

interface BasicTypeBoolNode extends BaseNode {
  _type: 'BasicType.Bool';
}

interface BasicTypeDateTimeNode extends BaseNode {
  _type: 'BasicType.DateTime';
}

interface BasicTypeIntNode extends BaseNode {
  _type: 'BasicType.Int';
}

interface BasicTypeListNode extends BaseNode {
  _type: 'BasicType.List';
}

interface BasicTypeListRelationNode extends BaseNode {
  _type: 'BasicType.ListRelation';
}

interface BasicTypeLocNode extends BaseNode {
  _type: 'BasicType.Loc';
}

interface BasicTypeMapNode extends BaseNode {
  _type: 'BasicType.Map';
}

interface BasicTypeNodeNode extends BaseNode {
  _type: 'BasicType.Node';
}

interface BasicTypeNumNode extends BaseNode {
  _type: 'BasicType.Num';
}

interface BasicTypeRationalNode extends BaseNode {
  _type: 'BasicType.Rational';
}

interface BasicTypeRealNode extends BaseNode {
  _type: 'BasicType.Real';
}

interface BasicTypeRelationNode extends BaseNode {
  _type: 'BasicType.Relation';
}

interface BasicTypeSetNode extends BaseNode {
  _type: 'BasicType.Set';
}

interface BasicTypeStringNode extends BaseNode {
  _type: 'BasicType.String';
}

interface BasicTypeTupleNode extends BaseNode {
  _type: 'BasicType.Tuple';
}

interface BasicTypeTypeNode extends BaseNode {
  _type: 'BasicType.Type';
}

interface BasicTypeValueNode extends BaseNode {
  _type: 'BasicType.Value';
}

interface BasicTypeVoidNode extends BaseNode {
  _type: 'BasicType.Void';
}

type BasicTypeNode =
  | BasicTypeBagNode
  | BasicTypeBoolNode
  | BasicTypeDateTimeNode
  | BasicTypeIntNode
  | BasicTypeListNode
  | BasicTypeListRelationNode
  | BasicTypeLocNode
  | BasicTypeMapNode
  | BasicTypeNodeNode
  | BasicTypeNumNode
  | BasicTypeRationalNode
  | BasicTypeRealNode
  | BasicTypeRelationNode
  | BasicTypeSetNode
  | BasicTypeStringNode
  | BasicTypeTupleNode
  | BasicTypeTypeNode
  | BasicTypeValueNode
  | BasicTypeVoidNode;

interface BodyToplevelsNode extends BaseNode {
  _type: 'Body.Toplevels';
  toplevels: ToplevelNode[];
}

type BodyNode = BodyToplevelsNode;

interface BooleanLiteralLexicalNode extends BaseNode {
  _type: 'BooleanLiteral.Lexical';
  string: string;
}

type BooleanLiteralNode = BooleanLiteralLexicalNode;

interface BoundDefaultNode extends BaseNode {
  _type: 'Bound.Default';
  expression: ExpressionNode;
}

interface BoundEmptyNode extends BaseNode {
  _type: 'Bound.Empty';
}

type BoundNode = BoundDefaultNode | BoundEmptyNode;

interface CaseDefaultNode extends BaseNode {
  _type: 'Case.Default';
  statement: StatementNode;
}

interface CasePatternWithActionNode extends BaseNode {
  _type: 'Case.PatternWithAction';
  patternWithAction: PatternWithActionNode;
}

type CaseNode = CaseDefaultNode | CasePatternWithActionNode;

interface CaseInsensitiveStringConstantLexicalNode extends BaseNode {
  _type: 'CaseInsensitiveStringConstant.Lexical';
  string: string;
}

type CaseInsensitiveStringConstantNode = CaseInsensitiveStringConstantLexicalNode;

interface CatchBindingNode extends BaseNode {
  _type: 'Catch.Binding';
  pattern: ExpressionNode;
  body: StatementNode;
}

interface CatchDefaultNode extends BaseNode {
  _type: 'Catch.Default';
  body: StatementNode;
}

type CatchNode = CatchBindingNode | CatchDefaultNode;

interface CharLexicalNode extends BaseNode {
  _type: 'Char.Lexical';
  string: string;
}

type CharNode = CharLexicalNode;

interface ClassBracketNode extends BaseNode {
  _type: 'Class.Bracket';
  charClass: ClassNode;
}

interface ClassComplementNode extends BaseNode {
  _type: 'Class.Complement';
  charClass: ClassNode;
}

interface ClassDifferenceNode extends BaseNode {
  _type: 'Class.Difference';
  lhs: ClassNode;
  rhs: ClassNode;
}

interface ClassIntersectionNode extends BaseNode {
  _type: 'Class.Intersection';
  lhs: ClassNode;
  rhs: ClassNode;
}

interface ClassSimpleCharclassNode extends BaseNode {
  _type: 'Class.SimpleCharclass';
  ranges: RangeNode[];
}

interface ClassUnionNode extends BaseNode {
  _type: 'Class.Union';
  lhs: ClassNode;
  rhs: ClassNode;
}

type ClassNode =
  | ClassBracketNode
  | ClassComplementNode
  | ClassDifferenceNode
  | ClassIntersectionNode
  | ClassSimpleCharclassNode
  | ClassUnionNode;

interface CommandDeclarationNode extends BaseNode {
  _type: 'Command.Declaration';
  declaration: DeclarationNode;
}

interface CommandExpressionNode extends BaseNode {
  _type: 'Command.Expression';
  expression: ExpressionNode;
}

interface CommandImportNode extends BaseNode {
  _type: 'Command.Import';
  imported: ImportNode;
}

interface CommandShellNode extends BaseNode {
  _type: 'Command.Shell';
  command: ShellCommandNode;
}

interface CommandStatementNode extends BaseNode {
  _type: 'Command.Statement';
  statement: StatementNode;
}

type CommandNode =
  | CommandDeclarationNode
  | CommandExpressionNode
  | CommandImportNode
  | CommandShellNode
  | CommandStatementNode;

interface CommandsCommandlistNode extends BaseNode {
  _type: 'Commands.Commandlist';
  commands: EvalCommandNode[];
}

type CommandsNode = CommandsCommandlistNode;

interface CommentLexicalNode extends BaseNode {
  _type: 'Comment.Lexical';
  string: string;
}

type CommentNode = CommentLexicalNode;

interface CommonKeywordParametersAbsentNode extends BaseNode {
  _type: 'CommonKeywordParameters.Absent';
}

interface CommonKeywordParametersPresentNode extends BaseNode {
  _type: 'CommonKeywordParameters.Present';
  keywordFormalList: KeywordFormalNode[];
}

type CommonKeywordParametersNode = CommonKeywordParametersAbsentNode | CommonKeywordParametersPresentNode;

interface ComprehensionListNode extends BaseNode {
  _type: 'Comprehension.List';
  results: ExpressionNode[];
  generators: ExpressionNode[];
}

interface ComprehensionMapNode extends BaseNode {
  _type: 'Comprehension.Map';
  from: ExpressionNode;
  to: ExpressionNode;
  generators: ExpressionNode[];
}

interface ComprehensionSetNode extends BaseNode {
  _type: 'Comprehension.Set';
  results: ExpressionNode[];
  generators: ExpressionNode[];
}

type ComprehensionNode = ComprehensionListNode | ComprehensionMapNode | ComprehensionSetNode;

interface ConcreteLexicalNode extends BaseNode {
  _type: 'Concrete.Lexical';
  string: string;
}

type ConcreteNode = ConcreteLexicalNode;

interface ConcreteHoleOneNode extends BaseNode {
  _type: 'ConcreteHole.One';
  symbol: SymNode;
  name: NameNode;
}

type ConcreteHoleNode = ConcreteHoleOneNode;

interface ConcretePartLexicalNode extends BaseNode {
  _type: 'ConcretePart.Lexical';
  string: string;
}

type ConcretePartNode = ConcretePartLexicalNode;

interface DataTargetEmptyNode extends BaseNode {
  _type: 'DataTarget.Empty';
}

interface DataTargetLabeledNode extends BaseNode {
  _type: 'DataTarget.Labeled';
  label: NameNode;
}

type DataTargetNode = DataTargetEmptyNode | DataTargetLabeledNode;

interface DataTypeSelectorSelectorNode extends BaseNode {
  _type: 'DataTypeSelector.Selector';
  sort: QualifiedNameNode;
  production: NameNode;
}

type DataTypeSelectorNode = DataTypeSelectorSelectorNode;

interface DateAndTimeLexicalNode extends BaseNode {
  _type: 'DateAndTime.Lexical';
  string: string;
}

type DateAndTimeNode = DateAndTimeLexicalNode;

interface DatePartLexicalNode extends BaseNode {
  _type: 'DatePart.Lexical';
  string: string;
}

type DatePartNode = DatePartLexicalNode;

interface DateTimeLiteralDateAndTimeLiteralNode extends BaseNode {
  _type: 'DateTimeLiteral.DateAndTimeLiteral';
  dateAndTime: DateAndTimeNode;
}

interface DateTimeLiteralDateLiteralNode extends BaseNode {
  _type: 'DateTimeLiteral.DateLiteral';
  date: JustDateNode;
}

interface DateTimeLiteralTimeLiteralNode extends BaseNode {
  _type: 'DateTimeLiteral.TimeLiteral';
  time: JustTimeNode;
}

type DateTimeLiteralNode =
  | DateTimeLiteralDateAndTimeLiteralNode
  | DateTimeLiteralDateLiteralNode
  | DateTimeLiteralTimeLiteralNode;

interface DecimalIntegerLiteralLexicalNode extends BaseNode {
  _type: 'DecimalIntegerLiteral.Lexical';
  string: string;
}

type DecimalIntegerLiteralNode = DecimalIntegerLiteralLexicalNode;

interface DeclarationAliasNode extends BaseNode {
  _type: 'Declaration.Alias';
  tags: TagsNode;
  visibility: VisibilityNode;
  user: UserTypeNode;
  base: TypeNode;
}

interface DeclarationAnnotationNode extends BaseNode {
  _type: 'Declaration.Annotation';
  tags: TagsNode;
  visibility: VisibilityNode;
  annoType: TypeNode;
  onType: TypeNode;
  name: NameNode;
}

interface DeclarationDataNode extends BaseNode {
  _type: 'Declaration.Data';
  tags: TagsNode;
  visibility: VisibilityNode;
  user: UserTypeNode;
  commonKeywordParameters: CommonKeywordParametersNode;
  variants: VariantNode[];
}

interface DeclarationDataAbstractNode extends BaseNode {
  _type: 'Declaration.DataAbstract';
  tags: TagsNode;
  visibility: VisibilityNode;
  user: UserTypeNode;
  commonKeywordParameters: CommonKeywordParametersNode;
}

interface DeclarationFunctionNode extends BaseNode {
  _type: 'Declaration.Function';
  functionDeclaration: FunctionDeclarationNode;
}

interface DeclarationTagNode extends BaseNode {
  _type: 'Declaration.Tag';
  tags: TagsNode;
  visibility: VisibilityNode;
  kind: KindNode;
  name: NameNode;
  types: TypeNode[];
}

interface DeclarationVariableNode extends BaseNode {
  _type: 'Declaration.Variable';
  tags: TagsNode;
  visibility: VisibilityNode;
  type: TypeNode;
  variables: VariableNode[];
}

type DeclarationNode =
  | DeclarationAliasNode
  | DeclarationAnnotationNode
  | DeclarationDataNode
  | DeclarationDataAbstractNode
  | DeclarationFunctionNode
  | DeclarationTagNode
  | DeclarationVariableNode;

interface DeclaratorDefaultNode extends BaseNode {
  _type: 'Declarator.Default';
  type: TypeNode;
  variables: VariableNode[];
}

type DeclaratorNode = DeclaratorDefaultNode;

interface EvalCommandDeclarationNode extends BaseNode {
  _type: 'EvalCommand.Declaration';
  declaration: DeclarationNode;
}

interface EvalCommandImportNode extends BaseNode {
  _type: 'EvalCommand.Import';
  imported: ImportNode;
}

interface EvalCommandOutputNode extends BaseNode {
  _type: 'EvalCommand.Output';
}

interface EvalCommandStatementNode extends BaseNode {
  _type: 'EvalCommand.Statement';
  statement: StatementNode;
}

type EvalCommandNode =
  | EvalCommandDeclarationNode
  | EvalCommandImportNode
  | EvalCommandOutputNode
  | EvalCommandStatementNode;

interface ExpressionAdditionNode extends BaseNode {
  _type: 'Expression.Addition';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionAllNode extends BaseNode {
  _type: 'Expression.All';
  generators: ExpressionNode[];
}

interface ExpressionAndNode extends BaseNode {
  _type: 'Expression.And';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionAntiNode extends BaseNode {
  _type: 'Expression.Anti';
  pattern: ExpressionNode;
}

interface ExpressionAnyNode extends BaseNode {
  _type: 'Expression.Any';
  generators: ExpressionNode[];
}

interface ExpressionAppendAfterNode extends BaseNode {
  _type: 'Expression.AppendAfter';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionAsTypeNode extends BaseNode {
  _type: 'Expression.AsType';
  type: TypeNode;
  argument: ExpressionNode;
}

interface ExpressionBracketNode extends BaseNode {
  _type: 'Expression.Bracket';
  expression: ExpressionNode;
}

interface ExpressionCallOrTreeNode extends BaseNode {
  _type: 'Expression.CallOrTree';
  expression: ExpressionNode;
  arguments: ExpressionNode[];
  keywordArguments: KeywordArguments_ExpressionNode;
}

interface ExpressionClosureNode extends BaseNode {
  _type: 'Expression.Closure';
  type: TypeNode;
  parameters: ParametersNode;
  statements: StatementNode[];
}

interface ExpressionCompositionNode extends BaseNode {
  _type: 'Expression.Composition';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionComprehensionNode extends BaseNode {
  _type: 'Expression.Comprehension';
  comprehension: ComprehensionNode;
}

interface ExpressionConcreteNode extends BaseNode {
  _type: 'Expression.Concrete';
  concrete: ConcreteNode;
}

interface ExpressionDescendantNode extends BaseNode {
  _type: 'Expression.Descendant';
  pattern: ExpressionNode;
}

interface ExpressionDivisionNode extends BaseNode {
  _type: 'Expression.Division';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionEnumeratorNode extends BaseNode {
  _type: 'Expression.Enumerator';
  pattern: ExpressionNode;
  expression: ExpressionNode;
}

interface ExpressionEqualsNode extends BaseNode {
  _type: 'Expression.Equals';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionEquivalenceNode extends BaseNode {
  _type: 'Expression.Equivalence';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionFieldAccessNode extends BaseNode {
  _type: 'Expression.FieldAccess';
  expression: ExpressionNode;
  field: NameNode;
}

interface ExpressionFieldProjectNode extends BaseNode {
  _type: 'Expression.FieldProject';
  expression: ExpressionNode;
  fields: FieldNode[];
}

interface ExpressionFieldUpdateNode extends BaseNode {
  _type: 'Expression.FieldUpdate';
  expression: ExpressionNode;
  key: NameNode;
  replacement: ExpressionNode;
}

interface ExpressionGetAnnotationNode extends BaseNode {
  _type: 'Expression.GetAnnotation';
  expression: ExpressionNode;
  name: NameNode;
}

interface ExpressionGreaterThanNode extends BaseNode {
  _type: 'Expression.GreaterThan';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionGreaterThanOrEqNode extends BaseNode {
  _type: 'Expression.GreaterThanOrEq';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionHasNode extends BaseNode {
  _type: 'Expression.Has';
  expression: ExpressionNode;
  name: NameNode;
}

interface ExpressionIfDefinedOtherwiseNode extends BaseNode {
  _type: 'Expression.IfDefinedOtherwise';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionIfThenElseNode extends BaseNode {
  _type: 'Expression.IfThenElse';
  condition: ExpressionNode;
  thenExp: ExpressionNode;
  elseExp: ExpressionNode;
}

interface ExpressionImplicationNode extends BaseNode {
  _type: 'Expression.Implication';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionInNode extends BaseNode {
  _type: 'Expression.In';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionInsertBeforeNode extends BaseNode {
  _type: 'Expression.InsertBefore';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionIntersectionNode extends BaseNode {
  _type: 'Expression.Intersection';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionIsNode extends BaseNode {
  _type: 'Expression.Is';
  expression: ExpressionNode;
  name: NameNode;
}

interface ExpressionIsDefinedNode extends BaseNode {
  _type: 'Expression.IsDefined';
  argument: ExpressionNode;
}

interface ExpressionItNode extends BaseNode {
  _type: 'Expression.It';
}

interface ExpressionJoinNode extends BaseNode {
  _type: 'Expression.Join';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionLessThanNode extends BaseNode {
  _type: 'Expression.LessThan';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionLessThanOrEqNode extends BaseNode {
  _type: 'Expression.LessThanOrEq';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionListNode extends BaseNode {
  _type: 'Expression.List';
  elements0: ExpressionNode[];
}

interface ExpressionLiteralNode extends BaseNode {
  _type: 'Expression.Literal';
  literal: LiteralNode;
}

interface ExpressionMapNode extends BaseNode {
  _type: 'Expression.Map';
  mappings: Mapping_ExpressionNode[];
}

interface ExpressionMatchNode extends BaseNode {
  _type: 'Expression.Match';
  pattern: ExpressionNode;
  expression: ExpressionNode;
}

interface ExpressionModuloNode extends BaseNode {
  _type: 'Expression.Modulo';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionMultiVariableNode extends BaseNode {
  _type: 'Expression.MultiVariable';
  qualifiedName: QualifiedNameNode;
}

interface ExpressionNegationNode extends BaseNode {
  _type: 'Expression.Negation';
  argument: ExpressionNode;
}

interface ExpressionNegativeNode extends BaseNode {
  _type: 'Expression.Negative';
  argument: ExpressionNode;
}

interface ExpressionNoMatchNode extends BaseNode {
  _type: 'Expression.NoMatch';
  pattern: ExpressionNode;
  expression: ExpressionNode;
}

interface ExpressionNonEmptyBlockNode extends BaseNode {
  _type: 'Expression.NonEmptyBlock';
  statements: StatementNode[];
}

interface ExpressionNonEqualsNode extends BaseNode {
  _type: 'Expression.NonEquals';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionNotInNode extends BaseNode {
  _type: 'Expression.NotIn';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionOrNode extends BaseNode {
  _type: 'Expression.Or';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionProductNode extends BaseNode {
  _type: 'Expression.Product';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionQualifiedNameNode extends BaseNode {
  _type: 'Expression.QualifiedName';
  qualifiedName: QualifiedNameNode;
}

interface ExpressionRangeNode extends BaseNode {
  _type: 'Expression.Range';
  first: ExpressionNode;
  last: ExpressionNode;
}

interface ExpressionReducerNode extends BaseNode {
  _type: 'Expression.Reducer';
  init: ExpressionNode;
  result: ExpressionNode;
  generators: ExpressionNode[];
}

interface ExpressionReifiedTypeNode extends BaseNode {
  _type: 'Expression.ReifiedType';
  symbol: ExpressionNode;
  definitions: ExpressionNode;
}

interface ExpressionReifyTypeNode extends BaseNode {
  _type: 'Expression.ReifyType';
  type: TypeNode;
}

interface ExpressionRemainderNode extends BaseNode {
  _type: 'Expression.Remainder';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionSetNode extends BaseNode {
  _type: 'Expression.Set';
  elements0: ExpressionNode[];
}

interface ExpressionSetAnnotationNode extends BaseNode {
  _type: 'Expression.SetAnnotation';
  expression: ExpressionNode;
  name: NameNode;
  value: ExpressionNode;
}

interface ExpressionSliceNode extends BaseNode {
  _type: 'Expression.Slice';
  expression: ExpressionNode;
  optFirst: OptionalExpressionNode;
  optLast: OptionalExpressionNode;
}

interface ExpressionSliceStepNode extends BaseNode {
  _type: 'Expression.SliceStep';
  expression: ExpressionNode;
  optFirst: OptionalExpressionNode;
  second: ExpressionNode;
  optLast: OptionalExpressionNode;
}

interface ExpressionSpliceNode extends BaseNode {
  _type: 'Expression.Splice';
  argument: ExpressionNode;
}

interface ExpressionSplicePlusNode extends BaseNode {
  _type: 'Expression.SplicePlus';
  argument: ExpressionNode;
}

interface ExpressionStepRangeNode extends BaseNode {
  _type: 'Expression.StepRange';
  first: ExpressionNode;
  second: ExpressionNode;
  last: ExpressionNode;
}

interface ExpressionSubscriptNode extends BaseNode {
  _type: 'Expression.Subscript';
  expression: ExpressionNode;
  subscripts: ExpressionNode[];
}

interface ExpressionSubtractionNode extends BaseNode {
  _type: 'Expression.Subtraction';
  lhs: ExpressionNode;
  rhs: ExpressionNode;
}

interface ExpressionTransitiveClosureNode extends BaseNode {
  _type: 'Expression.TransitiveClosure';
  argument: ExpressionNode;
}

interface ExpressionTransitiveReflexiveClosureNode extends BaseNode {
  _type: 'Expression.TransitiveReflexiveClosure';
  argument: ExpressionNode;
}

interface ExpressionTupleNode extends BaseNode {
  _type: 'Expression.Tuple';
  elements: ExpressionNode[];
}

interface ExpressionTypedVariableNode extends BaseNode {
  _type: 'Expression.TypedVariable';
  type: TypeNode;
  name: NameNode;
}

interface ExpressionTypedVariableBecomesNode extends BaseNode {
  _type: 'Expression.TypedVariableBecomes';
  type: TypeNode;
  name: NameNode;
  pattern: ExpressionNode;
}

interface ExpressionVariableBecomesNode extends BaseNode {
  _type: 'Expression.VariableBecomes';
  name: NameNode;
  pattern: ExpressionNode;
}

interface ExpressionVisitNode extends BaseNode {
  _type: 'Expression.Visit';
  label: LabelNode;
  visit: VisitNode;
}

interface ExpressionVoidClosureNode extends BaseNode {
  _type: 'Expression.VoidClosure';
  parameters: ParametersNode;
  statements0: StatementNode[];
}

type ExpressionNode =
  | ExpressionAdditionNode
  | ExpressionAllNode
  | ExpressionAndNode
  | ExpressionAntiNode
  | ExpressionAnyNode
  | ExpressionAppendAfterNode
  | ExpressionAsTypeNode
  | ExpressionBracketNode
  | ExpressionCallOrTreeNode
  | ExpressionClosureNode
  | ExpressionCompositionNode
  | ExpressionComprehensionNode
  | ExpressionConcreteNode
  | ExpressionDescendantNode
  | ExpressionDivisionNode
  | ExpressionEnumeratorNode
  | ExpressionEqualsNode
  | ExpressionEquivalenceNode
  | ExpressionFieldAccessNode
  | ExpressionFieldProjectNode
  | ExpressionFieldUpdateNode
  | ExpressionGetAnnotationNode
  | ExpressionGreaterThanNode
  | ExpressionGreaterThanOrEqNode
  | ExpressionHasNode
  | ExpressionIfDefinedOtherwiseNode
  | ExpressionIfThenElseNode
  | ExpressionImplicationNode
  | ExpressionInNode
  | ExpressionInsertBeforeNode
  | ExpressionIntersectionNode
  | ExpressionIsNode
  | ExpressionIsDefinedNode
  | ExpressionItNode
  | ExpressionJoinNode
  | ExpressionLessThanNode
  | ExpressionLessThanOrEqNode
  | ExpressionListNode
  | ExpressionLiteralNode
  | ExpressionMapNode
  | ExpressionMatchNode
  | ExpressionModuloNode
  | ExpressionMultiVariableNode
  | ExpressionNegationNode
  | ExpressionNegativeNode
  | ExpressionNoMatchNode
  | ExpressionNonEmptyBlockNode
  | ExpressionNonEqualsNode
  | ExpressionNotInNode
  | ExpressionOrNode
  | ExpressionProductNode
  | ExpressionQualifiedNameNode
  | ExpressionRangeNode
  | ExpressionReducerNode
  | ExpressionReifiedTypeNode
  | ExpressionReifyTypeNode
  | ExpressionRemainderNode
  | ExpressionSetNode
  | ExpressionSetAnnotationNode
  | ExpressionSliceNode
  | ExpressionSliceStepNode
  | ExpressionSpliceNode
  | ExpressionSplicePlusNode
  | ExpressionStepRangeNode
  | ExpressionSubscriptNode
  | ExpressionSubtractionNode
  | ExpressionTransitiveClosureNode
  | ExpressionTransitiveReflexiveClosureNode
  | ExpressionTupleNode
  | ExpressionTypedVariableNode
  | ExpressionTypedVariableBecomesNode
  | ExpressionVariableBecomesNode
  | ExpressionVisitNode
  | ExpressionVoidClosureNode;

interface FieldIndexNode extends BaseNode {
  _type: 'Field.Index';
  fieldIndex: IntegerLiteralNode;
}

interface FieldNameNode extends BaseNode {
  _type: 'Field.Name';
  fieldName: NameNode;
}

type FieldNode = FieldIndexNode | FieldNameNode;

interface FormalsDefaultNode extends BaseNode {
  _type: 'Formals.Default';
  formals: ExpressionNode[];
}

type FormalsNode = FormalsDefaultNode;

interface FunctionBodyDefaultNode extends BaseNode {
  _type: 'FunctionBody.Default';
  statements: StatementNode[];
}

type FunctionBodyNode = FunctionBodyDefaultNode;

interface FunctionDeclarationAbstractNode extends BaseNode {
  _type: 'FunctionDeclaration.Abstract';
  tags: TagsNode;
  visibility: VisibilityNode;
  signature: SignatureNode;
}

interface FunctionDeclarationConditionalNode extends BaseNode {
  _type: 'FunctionDeclaration.Conditional';
  tags: TagsNode;
  visibility: VisibilityNode;
  signature: SignatureNode;
  expression: ExpressionNode;
  conditions: ExpressionNode[];
}

interface FunctionDeclarationDefaultNode extends BaseNode {
  _type: 'FunctionDeclaration.Default';
  tags: TagsNode;
  visibility: VisibilityNode;
  signature: SignatureNode;
  body: FunctionBodyNode;
}

interface FunctionDeclarationExpressionNode extends BaseNode {
  _type: 'FunctionDeclaration.Expression';
  tags: TagsNode;
  visibility: VisibilityNode;
  signature: SignatureNode;
  expression: ExpressionNode;
}

type FunctionDeclarationNode =
  | FunctionDeclarationAbstractNode
  | FunctionDeclarationConditionalNode
  | FunctionDeclarationDefaultNode
  | FunctionDeclarationExpressionNode;

interface FunctionModifierDefaultNode extends BaseNode {
  _type: 'FunctionModifier.Default';
}

interface FunctionModifierJavaNode extends BaseNode {
  _type: 'FunctionModifier.Java';
}

interface FunctionModifierTestNode extends BaseNode {
  _type: 'FunctionModifier.Test';
}

type FunctionModifierNode = FunctionModifierDefaultNode | FunctionModifierJavaNode | FunctionModifierTestNode;

interface FunctionModifiersModifierlistNode extends BaseNode {
  _type: 'FunctionModifiers.Modifierlist';
  modifiers: FunctionModifierNode[];
}

type FunctionModifiersNode = FunctionModifiersModifierlistNode;

interface FunctionTypeTypeArgumentsNode extends BaseNode {
  _type: 'FunctionType.TypeArguments';
  type: TypeNode;
  arguments: TypeArgNode[];
}

type FunctionTypeNode = FunctionTypeTypeArgumentsNode;

interface HeaderDefaultNode extends BaseNode {
  _type: 'Header.Default';
  tags: TagsNode;
  name: QualifiedNameNode;
  imports: ImportNode[];
}

interface HeaderParametersNode extends BaseNode {
  _type: 'Header.Parameters';
  tags: TagsNode;
  name: QualifiedNameNode;
  params: ModuleParametersNode;
  imports: ImportNode[];
}

type HeaderNode = HeaderDefaultNode | HeaderParametersNode;

interface HexIntegerLiteralLexicalNode extends BaseNode {
  _type: 'HexIntegerLiteral.Lexical';
  string: string;
}

type HexIntegerLiteralNode = HexIntegerLiteralLexicalNode;

interface ImportDefaultNode extends BaseNode {
  _type: 'Import.Default';
  module: ImportedModuleNode;
}

interface ImportExtendNode extends BaseNode {
  _type: 'Import.Extend';
  module: ImportedModuleNode;
}

interface ImportExternalNode extends BaseNode {
  _type: 'Import.External';
  name: QualifiedNameNode;
  at: LocationLiteralNode;
}

interface ImportSyntaxNode extends BaseNode {
  _type: 'Import.Syntax';
  syntax: SyntaxDefinitionNode;
}

type ImportNode = ImportDefaultNode | ImportExtendNode | ImportExternalNode | ImportSyntaxNode;

interface ImportedModuleActualsNode extends BaseNode {
  _type: 'ImportedModule.Actuals';
  name: QualifiedNameNode;
  actuals: ModuleActualsNode;
}

interface ImportedModuleActualsRenamingNode extends BaseNode {
  _type: 'ImportedModule.ActualsRenaming';
  name: QualifiedNameNode;
  actuals: ModuleActualsNode;
  renamings: RenamingsNode;
}

interface ImportedModuleDefaultNode extends BaseNode {
  _type: 'ImportedModule.Default';
  name: QualifiedNameNode;
}

interface ImportedModuleRenamingsNode extends BaseNode {
  _type: 'ImportedModule.Renamings';
  name: QualifiedNameNode;
  renamings: RenamingsNode;
}

type ImportedModuleNode =
  | ImportedModuleActualsNode
  | ImportedModuleActualsRenamingNode
  | ImportedModuleDefaultNode
  | ImportedModuleRenamingsNode;

interface IntegerLiteralDecimalIntegerLiteralNode extends BaseNode {
  _type: 'IntegerLiteral.DecimalIntegerLiteral';
  decimal: DecimalIntegerLiteralNode;
}

interface IntegerLiteralHexIntegerLiteralNode extends BaseNode {
  _type: 'IntegerLiteral.HexIntegerLiteral';
  hex: HexIntegerLiteralNode;
}

interface IntegerLiteralOctalIntegerLiteralNode extends BaseNode {
  _type: 'IntegerLiteral.OctalIntegerLiteral';
  octal: OctalIntegerLiteralNode;
}

type IntegerLiteralNode =
  | IntegerLiteralDecimalIntegerLiteralNode
  | IntegerLiteralHexIntegerLiteralNode
  | IntegerLiteralOctalIntegerLiteralNode;

interface JustDateLexicalNode extends BaseNode {
  _type: 'JustDate.Lexical';
  string: string;
}

type JustDateNode = JustDateLexicalNode;

interface JustTimeLexicalNode extends BaseNode {
  _type: 'JustTime.Lexical';
  string: string;
}

type JustTimeNode = JustTimeLexicalNode;

interface KeywordArgument_ExpressionDefaultNode extends BaseNode {
  _type: 'KeywordArgument_Expression.Default';
  name: NameNode;
  expression: ExpressionNode;
}

type KeywordArgument_ExpressionNode = KeywordArgument_ExpressionDefaultNode;

interface KeywordArguments_ExpressionDefaultNode extends BaseNode {
  _type: 'KeywordArguments_Expression.Default';
  optionalComma: OptionalCommaNode;
  keywordArgumentList: KeywordArgument_ExpressionNode[];
}

interface KeywordArguments_ExpressionNoneNode extends BaseNode {
  _type: 'KeywordArguments_Expression.None';
}

type KeywordArguments_ExpressionNode = KeywordArguments_ExpressionDefaultNode | KeywordArguments_ExpressionNoneNode;

interface KeywordFormalDefaultNode extends BaseNode {
  _type: 'KeywordFormal.Default';
  type: TypeNode;
  name: NameNode;
  expression: ExpressionNode;
}

type KeywordFormalNode = KeywordFormalDefaultNode;

interface KeywordFormalsDefaultNode extends BaseNode {
  _type: 'KeywordFormals.Default';
  optionalComma: OptionalCommaNode;
  keywordFormalList: KeywordFormalNode[];
}

interface KeywordFormalsNoneNode extends BaseNode {
  _type: 'KeywordFormals.None';
}

type KeywordFormalsNode = KeywordFormalsDefaultNode | KeywordFormalsNoneNode;

interface KindAliasNode extends BaseNode {
  _type: 'Kind.Alias';
}

interface KindAllNode extends BaseNode {
  _type: 'Kind.All';
}

interface KindAnnoNode extends BaseNode {
  _type: 'Kind.Anno';
}

interface KindDataNode extends BaseNode {
  _type: 'Kind.Data';
}

interface KindFunctionNode extends BaseNode {
  _type: 'Kind.Function';
}

interface KindModuleNode extends BaseNode {
  _type: 'Kind.Module';
}

interface KindTagNode extends BaseNode {
  _type: 'Kind.Tag';
}

interface KindVariableNode extends BaseNode {
  _type: 'Kind.Variable';
}

interface KindViewNode extends BaseNode {
  _type: 'Kind.View';
}

type KindNode =
  | KindAliasNode
  | KindAllNode
  | KindAnnoNode
  | KindDataNode
  | KindFunctionNode
  | KindModuleNode
  | KindTagNode
  | KindVariableNode
  | KindViewNode;

interface LAYOUTLexicalNode extends BaseNode {
  _type: 'LAYOUT.Lexical';
  string: string;
}

type LAYOUTNode = LAYOUTLexicalNode;

interface LabelDefaultNode extends BaseNode {
  _type: 'Label.Default';
  name: NameNode;
}

interface LabelEmptyNode extends BaseNode {
  _type: 'Label.Empty';
}

type LabelNode = LabelDefaultNode | LabelEmptyNode;

interface LiteralBooleanNode extends BaseNode {
  _type: 'Literal.Boolean';
  booleanLiteral: BooleanLiteralNode;
}

interface LiteralDateTimeNode extends BaseNode {
  _type: 'Literal.DateTime';
  dateTimeLiteral: DateTimeLiteralNode;
}

interface LiteralIntegerNode extends BaseNode {
  _type: 'Literal.Integer';
  integerLiteral: IntegerLiteralNode;
}

interface LiteralLocationNode extends BaseNode {
  _type: 'Literal.Location';
  locationLiteral: LocationLiteralNode;
}

interface LiteralRationalNode extends BaseNode {
  _type: 'Literal.Rational';
  rationalLiteral: RationalLiteralNode;
}

interface LiteralRealNode extends BaseNode {
  _type: 'Literal.Real';
  realLiteral: RealLiteralNode;
}

interface LiteralRegExpNode extends BaseNode {
  _type: 'Literal.RegExp';
  regExpLiteral: RegExpLiteralNode;
}

interface LiteralStringNode extends BaseNode {
  _type: 'Literal.String';
  stringLiteral: StringLiteralNode;
}

type LiteralNode =
  | LiteralBooleanNode
  | LiteralDateTimeNode
  | LiteralIntegerNode
  | LiteralLocationNode
  | LiteralRationalNode
  | LiteralRealNode
  | LiteralRegExpNode
  | LiteralStringNode;

interface LocalVariableDeclarationDefaultNode extends BaseNode {
  _type: 'LocalVariableDeclaration.Default';
  declarator: DeclaratorNode;
}

interface LocalVariableDeclarationDynamicNode extends BaseNode {
  _type: 'LocalVariableDeclaration.Dynamic';
  declarator: DeclaratorNode;
}

type LocalVariableDeclarationNode = LocalVariableDeclarationDefaultNode | LocalVariableDeclarationDynamicNode;

interface LocationLiteralDefaultNode extends BaseNode {
  _type: 'LocationLiteral.Default';
  protocolPart: ProtocolPartNode;
  pathPart: PathPartNode;
}

type LocationLiteralNode = LocationLiteralDefaultNode;

interface Mapping_ExpressionDefaultNode extends BaseNode {
  _type: 'Mapping_Expression.Default';
  from: ExpressionNode;
  to: ExpressionNode;
}

type Mapping_ExpressionNode = Mapping_ExpressionDefaultNode;

interface MidPathCharsLexicalNode extends BaseNode {
  _type: 'MidPathChars.Lexical';
  string: string;
}

type MidPathCharsNode = MidPathCharsLexicalNode;

interface MidProtocolCharsLexicalNode extends BaseNode {
  _type: 'MidProtocolChars.Lexical';
  string: string;
}

type MidProtocolCharsNode = MidProtocolCharsLexicalNode;

interface MidStringCharsLexicalNode extends BaseNode {
  _type: 'MidStringChars.Lexical';
  string: string;
}

type MidStringCharsNode = MidStringCharsLexicalNode;

interface ModuleDefaultNode extends BaseNode {
  _type: 'Module.Default';
  header: HeaderNode;
  body: BodyNode;
}

type ModuleNode = ModuleDefaultNode;

interface ModuleActualsDefaultNode extends BaseNode {
  _type: 'ModuleActuals.Default';
  types: TypeNode[];
}

type ModuleActualsNode = ModuleActualsDefaultNode;

interface ModuleParametersDefaultNode extends BaseNode {
  _type: 'ModuleParameters.Default';
  parameters: TypeVarNode[];
}

type ModuleParametersNode = ModuleParametersDefaultNode;

interface NameLexicalNode extends BaseNode {
  _type: 'Name.Lexical';
  string: string;
}

type NameNode = NameLexicalNode;

interface NamedBackslashLexicalNode extends BaseNode {
  _type: 'NamedBackslash.Lexical';
  string: string;
}

type NamedBackslashNode = NamedBackslashLexicalNode;

interface NamedRegExpLexicalNode extends BaseNode {
  _type: 'NamedRegExp.Lexical';
  string: string;
}

type NamedRegExpNode = NamedRegExpLexicalNode;

interface NonterminalLexicalNode extends BaseNode {
  _type: 'Nonterminal.Lexical';
  string: string;
}

type NonterminalNode = NonterminalLexicalNode;

interface NonterminalLabelLexicalNode extends BaseNode {
  _type: 'NonterminalLabel.Lexical';
  string: string;
}

type NonterminalLabelNode = NonterminalLabelLexicalNode;

interface OctalIntegerLiteralLexicalNode extends BaseNode {
  _type: 'OctalIntegerLiteral.Lexical';
  string: string;
}

type OctalIntegerLiteralNode = OctalIntegerLiteralLexicalNode;

interface OptionalCommaLexicalNode extends BaseNode {
  _type: 'OptionalComma.Lexical';
  string: string;
}

type OptionalCommaNode = OptionalCommaLexicalNode;

interface OptionalExpressionExpressionNode extends BaseNode {
  _type: 'OptionalExpression.Expression';
  expression: ExpressionNode;
}

interface OptionalExpressionNoExpressionNode extends BaseNode {
  _type: 'OptionalExpression.NoExpression';
}

type OptionalExpressionNode = OptionalExpressionExpressionNode | OptionalExpressionNoExpressionNode;

interface OutputLexicalNode extends BaseNode {
  _type: 'Output.Lexical';
  string: string;
}

type OutputNode = OutputLexicalNode;

interface ParametersDefaultNode extends BaseNode {
  _type: 'Parameters.Default';
  formals: FormalsNode;
  keywordFormals: KeywordFormalsNode;
}

interface ParametersVarArgsNode extends BaseNode {
  _type: 'Parameters.VarArgs';
  formals: FormalsNode;
  keywordFormals: KeywordFormalsNode;
}

type ParametersNode = ParametersDefaultNode | ParametersVarArgsNode;

interface PathCharsLexicalNode extends BaseNode {
  _type: 'PathChars.Lexical';
  string: string;
}

type PathCharsNode = PathCharsLexicalNode;

interface PathPartInterpolatedNode extends BaseNode {
  _type: 'PathPart.Interpolated';
  pre: PrePathCharsNode;
  expression: ExpressionNode;
  tail: PathTailNode;
}

interface PathPartNonInterpolatedNode extends BaseNode {
  _type: 'PathPart.NonInterpolated';
  pathChars: PathCharsNode;
}

type PathPartNode = PathPartInterpolatedNode | PathPartNonInterpolatedNode;

interface PathTailMidNode extends BaseNode {
  _type: 'PathTail.Mid';
  mid: MidPathCharsNode;
  expression: ExpressionNode;
  tail: PathTailNode;
}

interface PathTailPostNode extends BaseNode {
  _type: 'PathTail.Post';
  post: PostPathCharsNode;
}

type PathTailNode = PathTailMidNode | PathTailPostNode;

interface PatternWithActionArbitraryNode extends BaseNode {
  _type: 'PatternWithAction.Arbitrary';
  pattern: ExpressionNode;
  statement: StatementNode;
}

interface PatternWithActionReplacingNode extends BaseNode {
  _type: 'PatternWithAction.Replacing';
  pattern: ExpressionNode;
  replacement: ReplacementNode;
}

type PatternWithActionNode = PatternWithActionArbitraryNode | PatternWithActionReplacingNode;

interface PostPathCharsLexicalNode extends BaseNode {
  _type: 'PostPathChars.Lexical';
  string: string;
}

type PostPathCharsNode = PostPathCharsLexicalNode;

interface PostProtocolCharsLexicalNode extends BaseNode {
  _type: 'PostProtocolChars.Lexical';
  string: string;
}

type PostProtocolCharsNode = PostProtocolCharsLexicalNode;

interface PostStringCharsLexicalNode extends BaseNode {
  _type: 'PostStringChars.Lexical';
  string: string;
}

type PostStringCharsNode = PostStringCharsLexicalNode;

interface PrePathCharsLexicalNode extends BaseNode {
  _type: 'PrePathChars.Lexical';
  string: string;
}

type PrePathCharsNode = PrePathCharsLexicalNode;

interface PreProtocolCharsLexicalNode extends BaseNode {
  _type: 'PreProtocolChars.Lexical';
  string: string;
}

type PreProtocolCharsNode = PreProtocolCharsLexicalNode;

interface PreStringCharsLexicalNode extends BaseNode {
  _type: 'PreStringChars.Lexical';
  string: string;
}

type PreStringCharsNode = PreStringCharsLexicalNode;

interface ProdAllNode extends BaseNode {
  _type: 'Prod.All';
  lhs: ProdNode;
  rhs: ProdNode;
}

interface ProdAssociativityGroupNode extends BaseNode {
  _type: 'Prod.AssociativityGroup';
  associativity: AssocNode;
  group: ProdNode;
}

interface ProdFirstNode extends BaseNode {
  _type: 'Prod.First';
  lhs: ProdNode;
  rhs: ProdNode;
}

interface ProdLabeledNode extends BaseNode {
  _type: 'Prod.Labeled';
  modifiers: ProdModifierNode[];
  name: NameNode;
  syms: SymNode[];
}

interface ProdReferenceNode extends BaseNode {
  _type: 'Prod.Reference';
  referenced: NameNode;
}

interface ProdUnlabeledNode extends BaseNode {
  _type: 'Prod.Unlabeled';
  modifiers: ProdModifierNode[];
  syms: SymNode[];
}

type ProdNode =
  | ProdAllNode
  | ProdAssociativityGroupNode
  | ProdFirstNode
  | ProdLabeledNode
  | ProdReferenceNode
  | ProdUnlabeledNode;

interface ProdModifierAssociativityNode extends BaseNode {
  _type: 'ProdModifier.Associativity';
  associativity: AssocNode;
}

interface ProdModifierBracketNode extends BaseNode {
  _type: 'ProdModifier.Bracket';
}

interface ProdModifierTagNode extends BaseNode {
  _type: 'ProdModifier.Tag';
  tag: TagNode;
}

type ProdModifierNode = ProdModifierAssociativityNode | ProdModifierBracketNode | ProdModifierTagNode;

interface ProtocolCharsLexicalNode extends BaseNode {
  _type: 'ProtocolChars.Lexical';
  string: string;
}

type ProtocolCharsNode = ProtocolCharsLexicalNode;

interface ProtocolPartInterpolatedNode extends BaseNode {
  _type: 'ProtocolPart.Interpolated';
  pre: PreProtocolCharsNode;
  expression: ExpressionNode;
  tail: ProtocolTailNode;
}

interface ProtocolPartNonInterpolatedNode extends BaseNode {
  _type: 'ProtocolPart.NonInterpolated';
  protocolChars: ProtocolCharsNode;
}

type ProtocolPartNode = ProtocolPartInterpolatedNode | ProtocolPartNonInterpolatedNode;

interface ProtocolTailMidNode extends BaseNode {
  _type: 'ProtocolTail.Mid';
  mid: MidProtocolCharsNode;
  expression: ExpressionNode;
  tail: ProtocolTailNode;
}

interface ProtocolTailPostNode extends BaseNode {
  _type: 'ProtocolTail.Post';
  post: PostProtocolCharsNode;
}

type ProtocolTailNode = ProtocolTailMidNode | ProtocolTailPostNode;

interface QualifiedNameDefaultNode extends BaseNode {
  _type: 'QualifiedName.Default';
  names: NameNode[];
}

type QualifiedNameNode = QualifiedNameDefaultNode;

interface RangeCharacterNode extends BaseNode {
  _type: 'Range.Character';
  character: CharNode;
}

interface RangeFromToNode extends BaseNode {
  _type: 'Range.FromTo';
  start: CharNode;
  end: CharNode;
}

type RangeNode = RangeCharacterNode | RangeFromToNode;

interface RationalLiteralLexicalNode extends BaseNode {
  _type: 'RationalLiteral.Lexical';
  string: string;
}

type RationalLiteralNode = RationalLiteralLexicalNode;

interface RealLiteralLexicalNode extends BaseNode {
  _type: 'RealLiteral.Lexical';
  string: string;
}

type RealLiteralNode = RealLiteralLexicalNode;

interface RegExpLexicalNode extends BaseNode {
  _type: 'RegExp.Lexical';
  string: string;
}

type RegExpNode = RegExpLexicalNode;

interface RegExpLiteralLexicalNode extends BaseNode {
  _type: 'RegExpLiteral.Lexical';
  string: string;
}

type RegExpLiteralNode = RegExpLiteralLexicalNode;

interface RegExpModifierLexicalNode extends BaseNode {
  _type: 'RegExpModifier.Lexical';
  string: string;
}

type RegExpModifierNode = RegExpModifierLexicalNode;

interface RenamingDefaultNode extends BaseNode {
  _type: 'Renaming.Default';
  from: NameNode;
  to: NameNode;
}

type RenamingNode = RenamingDefaultNode;

interface RenamingsDefaultNode extends BaseNode {
  _type: 'Renamings.Default';
  renamings: RenamingNode[];
}

type RenamingsNode = RenamingsDefaultNode;

interface ReplacementConditionalNode extends BaseNode {
  _type: 'Replacement.Conditional';
  replacementExpression: ExpressionNode;
  conditions: ExpressionNode[];
}

interface ReplacementUnconditionalNode extends BaseNode {
  _type: 'Replacement.Unconditional';
  replacementExpression: ExpressionNode;
}

type ReplacementNode = ReplacementConditionalNode | ReplacementUnconditionalNode;

interface ShellCommandClearNode extends BaseNode {
  _type: 'ShellCommand.Clear';
}

interface ShellCommandEditNode extends BaseNode {
  _type: 'ShellCommand.Edit';
  name: QualifiedNameNode;
}

interface ShellCommandHelpNode extends BaseNode {
  _type: 'ShellCommand.Help';
}

interface ShellCommandHistoryNode extends BaseNode {
  _type: 'ShellCommand.History';
}

interface ShellCommandListDeclarationsNode extends BaseNode {
  _type: 'ShellCommand.ListDeclarations';
}

interface ShellCommandListModulesNode extends BaseNode {
  _type: 'ShellCommand.ListModules';
}

interface ShellCommandQuitNode extends BaseNode {
  _type: 'ShellCommand.Quit';
}

interface ShellCommandSetOptionNode extends BaseNode {
  _type: 'ShellCommand.SetOption';
  name: QualifiedNameNode;
  expression: ExpressionNode;
}

interface ShellCommandTestNode extends BaseNode {
  _type: 'ShellCommand.Test';
}

interface ShellCommandUndeclareNode extends BaseNode {
  _type: 'ShellCommand.Undeclare';
  name: QualifiedNameNode;
}

interface ShellCommandUnimportNode extends BaseNode {
  _type: 'ShellCommand.Unimport';
  name: QualifiedNameNode;
}

type ShellCommandNode =
  | ShellCommandClearNode
  | ShellCommandEditNode
  | ShellCommandHelpNode
  | ShellCommandHistoryNode
  | ShellCommandListDeclarationsNode
  | ShellCommandListModulesNode
  | ShellCommandQuitNode
  | ShellCommandSetOptionNode
  | ShellCommandTestNode
  | ShellCommandUndeclareNode
  | ShellCommandUnimportNode;

interface SignatureNoThrowsNode extends BaseNode {
  _type: 'Signature.NoThrows';
  modifiers: FunctionModifiersNode;
  type: TypeNode;
  name: NameNode;
  parameters: ParametersNode;
}

interface SignatureWithThrowsNode extends BaseNode {
  _type: 'Signature.WithThrows';
  modifiers: FunctionModifiersNode;
  type: TypeNode;
  name: NameNode;
  parameters: ParametersNode;
  exceptions: TypeNode[];
}

type SignatureNode = SignatureNoThrowsNode | SignatureWithThrowsNode;

interface StartAbsentNode extends BaseNode {
  _type: 'Start.Absent';
}

interface StartPresentNode extends BaseNode {
  _type: 'Start.Present';
}

type StartNode = StartAbsentNode | StartPresentNode;

interface StatementAppendNode extends BaseNode {
  _type: 'Statement.Append';
  dataTarget: DataTargetNode;
  statement: StatementNode;
}

interface StatementAssertNode extends BaseNode {
  _type: 'Statement.Assert';
  expression: ExpressionNode;
}

interface StatementAssertWithMessageNode extends BaseNode {
  _type: 'Statement.AssertWithMessage';
  expression: ExpressionNode;
  message: ExpressionNode;
}

interface StatementAssignmentNode extends BaseNode {
  _type: 'Statement.Assignment';
  assignable: AssignableNode;
  operator: AssignmentNode;
  statement: StatementNode;
}

interface StatementBreakNode extends BaseNode {
  _type: 'Statement.Break';
  target: TargetNode;
}

interface StatementContinueNode extends BaseNode {
  _type: 'Statement.Continue';
  target: TargetNode;
}

interface StatementDoWhileNode extends BaseNode {
  _type: 'Statement.DoWhile';
  label: LabelNode;
  body: StatementNode;
  condition: ExpressionNode;
}

interface StatementEmptyStatementNode extends BaseNode {
  _type: 'Statement.EmptyStatement';
}

interface StatementExpressionNode extends BaseNode {
  _type: 'Statement.Expression';
  expression: ExpressionNode;
}

interface StatementFailNode extends BaseNode {
  _type: 'Statement.Fail';
  target: TargetNode;
}

interface StatementFilterNode extends BaseNode {
  _type: 'Statement.Filter';
}

interface StatementForNode extends BaseNode {
  _type: 'Statement.For';
  label: LabelNode;
  generators: ExpressionNode[];
  body: StatementNode;
}

interface StatementFunctionDeclarationNode extends BaseNode {
  _type: 'Statement.FunctionDeclaration';
  functionDeclaration: FunctionDeclarationNode;
}

interface StatementGlobalDirectiveNode extends BaseNode {
  _type: 'Statement.GlobalDirective';
  type: TypeNode;
  names: QualifiedNameNode[];
}

interface StatementIfThenNode extends BaseNode {
  _type: 'Statement.IfThen';
  label: LabelNode;
  conditions: ExpressionNode[];
  thenStatement: StatementNode;
}

interface StatementIfThenElseNode extends BaseNode {
  _type: 'Statement.IfThenElse';
  label: LabelNode;
  conditions: ExpressionNode[];
  thenStatement: StatementNode;
  elseStatement: StatementNode;
}

interface StatementInsertNode extends BaseNode {
  _type: 'Statement.Insert';
  dataTarget: DataTargetNode;
  statement: StatementNode;
}

interface StatementNonEmptyBlockNode extends BaseNode {
  _type: 'Statement.NonEmptyBlock';
  label: LabelNode;
  statements: StatementNode[];
}

interface StatementReturnNode extends BaseNode {
  _type: 'Statement.Return';
  statement: StatementNode;
}

interface StatementSolveNode extends BaseNode {
  _type: 'Statement.Solve';
  variables: QualifiedNameNode[];
  bound: BoundNode;
  body: StatementNode;
}

interface StatementSwitchNode extends BaseNode {
  _type: 'Statement.Switch';
  label: LabelNode;
  expression: ExpressionNode;
  cases: CaseNode[];
}

interface StatementThrowNode extends BaseNode {
  _type: 'Statement.Throw';
  statement: StatementNode;
}

interface StatementTryNode extends BaseNode {
  _type: 'Statement.Try';
  body: StatementNode;
  handlers: CatchNode[];
}

interface StatementTryFinallyNode extends BaseNode {
  _type: 'Statement.TryFinally';
  body: StatementNode;
  handlers: CatchNode[];
  finallyBody: StatementNode;
}

interface StatementVariableDeclarationNode extends BaseNode {
  _type: 'Statement.VariableDeclaration';
  declaration: LocalVariableDeclarationNode;
}

interface StatementVisitNode extends BaseNode {
  _type: 'Statement.Visit';
  label: LabelNode;
  visit: VisitNode;
}

interface StatementWhileNode extends BaseNode {
  _type: 'Statement.While';
  label: LabelNode;
  conditions: ExpressionNode[];
  body: StatementNode;
}

type StatementNode =
  | StatementAppendNode
  | StatementAssertNode
  | StatementAssertWithMessageNode
  | StatementAssignmentNode
  | StatementBreakNode
  | StatementContinueNode
  | StatementDoWhileNode
  | StatementEmptyStatementNode
  | StatementExpressionNode
  | StatementFailNode
  | StatementFilterNode
  | StatementForNode
  | StatementFunctionDeclarationNode
  | StatementGlobalDirectiveNode
  | StatementIfThenNode
  | StatementIfThenElseNode
  | StatementInsertNode
  | StatementNonEmptyBlockNode
  | StatementReturnNode
  | StatementSolveNode
  | StatementSwitchNode
  | StatementThrowNode
  | StatementTryNode
  | StatementTryFinallyNode
  | StatementVariableDeclarationNode
  | StatementVisitNode
  | StatementWhileNode;

interface StrategyBottomUpNode extends BaseNode {
  _type: 'Strategy.BottomUp';
}

interface StrategyBottomUpBreakNode extends BaseNode {
  _type: 'Strategy.BottomUpBreak';
}

interface StrategyInnermostNode extends BaseNode {
  _type: 'Strategy.Innermost';
}

interface StrategyOutermostNode extends BaseNode {
  _type: 'Strategy.Outermost';
}

interface StrategyTopDownNode extends BaseNode {
  _type: 'Strategy.TopDown';
}

interface StrategyTopDownBreakNode extends BaseNode {
  _type: 'Strategy.TopDownBreak';
}

type StrategyNode =
  | StrategyBottomUpNode
  | StrategyBottomUpBreakNode
  | StrategyInnermostNode
  | StrategyOutermostNode
  | StrategyTopDownNode
  | StrategyTopDownBreakNode;

interface StringCharacterLexicalNode extends BaseNode {
  _type: 'StringCharacter.Lexical';
  string: string;
}

type StringCharacterNode = StringCharacterLexicalNode;

interface StringConstantLexicalNode extends BaseNode {
  _type: 'StringConstant.Lexical';
  string: string;
}

type StringConstantNode = StringConstantLexicalNode;

interface StringLiteralInterpolatedNode extends BaseNode {
  _type: 'StringLiteral.Interpolated';
  pre: PreStringCharsNode;
  expression: ExpressionNode;
  tail: StringTailNode;
}

interface StringLiteralNonInterpolatedNode extends BaseNode {
  _type: 'StringLiteral.NonInterpolated';
  constant: StringConstantNode;
}

interface StringLiteralTemplateNode extends BaseNode {
  _type: 'StringLiteral.Template';
  pre: PreStringCharsNode;
  template: StringTemplateNode;
  tail: StringTailNode;
}

type StringLiteralNode = StringLiteralInterpolatedNode | StringLiteralNonInterpolatedNode | StringLiteralTemplateNode;

interface StringMiddleInterpolatedNode extends BaseNode {
  _type: 'StringMiddle.Interpolated';
  mid: MidStringCharsNode;
  expression: ExpressionNode;
  tail: StringMiddleNode;
}

interface StringMiddleMidNode extends BaseNode {
  _type: 'StringMiddle.Mid';
  mid: MidStringCharsNode;
}

interface StringMiddleTemplateNode extends BaseNode {
  _type: 'StringMiddle.Template';
  mid: MidStringCharsNode;
  template: StringTemplateNode;
  tail: StringMiddleNode;
}

type StringMiddleNode = StringMiddleInterpolatedNode | StringMiddleMidNode | StringMiddleTemplateNode;

interface StringTailMidInterpolatedNode extends BaseNode {
  _type: 'StringTail.MidInterpolated';
  mid: MidStringCharsNode;
  expression: ExpressionNode;
  tail: StringTailNode;
}

interface StringTailMidTemplateNode extends BaseNode {
  _type: 'StringTail.MidTemplate';
  mid: MidStringCharsNode;
  template: StringTemplateNode;
  tail: StringTailNode;
}

interface StringTailPostNode extends BaseNode {
  _type: 'StringTail.Post';
  post: PostStringCharsNode;
}

type StringTailNode = StringTailMidInterpolatedNode | StringTailMidTemplateNode | StringTailPostNode;

interface StringTemplateDoWhileNode extends BaseNode {
  _type: 'StringTemplate.DoWhile';
  preStats: StatementNode[];
  body: StringMiddleNode;
  postStats: StatementNode[];
  condition: ExpressionNode;
}

interface StringTemplateForNode extends BaseNode {
  _type: 'StringTemplate.For';
  generators: ExpressionNode[];
  preStats: StatementNode[];
  body: StringMiddleNode;
  postStats: StatementNode[];
}

interface StringTemplateIfThenNode extends BaseNode {
  _type: 'StringTemplate.IfThen';
  conditions: ExpressionNode[];
  preStats: StatementNode[];
  body: StringMiddleNode;
  postStats: StatementNode[];
}

interface StringTemplateIfThenElseNode extends BaseNode {
  _type: 'StringTemplate.IfThenElse';
  conditions: ExpressionNode[];
  preStatsThen: StatementNode[];
  thenString: StringMiddleNode;
  postStatsThen: StatementNode[];
  preStatsElse: StatementNode[];
  elseString: StringMiddleNode;
  postStatsElse: StatementNode[];
}

interface StringTemplateWhileNode extends BaseNode {
  _type: 'StringTemplate.While';
  condition: ExpressionNode;
  preStats: StatementNode[];
  body: StringMiddleNode;
  postStats: StatementNode[];
}

type StringTemplateNode =
  | StringTemplateDoWhileNode
  | StringTemplateForNode
  | StringTemplateIfThenNode
  | StringTemplateIfThenElseNode
  | StringTemplateWhileNode;

interface StructuredTypeDefaultNode extends BaseNode {
  _type: 'StructuredType.Default';
  basicType: BasicTypeNode;
  arguments: TypeArgNode[];
}

type StructuredTypeNode = StructuredTypeDefaultNode;

interface SymAlternativeNode extends BaseNode {
  _type: 'Sym.Alternative';
  first: SymNode;
  alternatives: SymNode[];
}

interface SymCaseInsensitiveLiteralNode extends BaseNode {
  _type: 'Sym.CaseInsensitiveLiteral';
  cistring: CaseInsensitiveStringConstantNode;
}

interface SymCharacterClassNode extends BaseNode {
  _type: 'Sym.CharacterClass';
  charClass: ClassNode;
}

interface SymColumnNode extends BaseNode {
  _type: 'Sym.Column';
  symbol: SymNode;
  column: IntegerLiteralNode;
}

interface SymEmptyNode extends BaseNode {
  _type: 'Sym.Empty';
}

interface SymEndOfLineNode extends BaseNode {
  _type: 'Sym.EndOfLine';
  symbol: SymNode;
}

interface SymExceptNode extends BaseNode {
  _type: 'Sym.Except';
  symbol: SymNode;
  label: NonterminalLabelNode;
}

interface SymFollowNode extends BaseNode {
  _type: 'Sym.Follow';
  symbol: SymNode;
  match: SymNode;
}

interface SymIterNode extends BaseNode {
  _type: 'Sym.Iter';
  symbol: SymNode;
}

interface SymIterSepNode extends BaseNode {
  _type: 'Sym.IterSep';
  symbol: SymNode;
  sep: SymNode;
}

interface SymIterStarNode extends BaseNode {
  _type: 'Sym.IterStar';
  symbol: SymNode;
}

interface SymIterStarSepNode extends BaseNode {
  _type: 'Sym.IterStarSep';
  symbol: SymNode;
  sep: SymNode;
}

interface SymLabeledNode extends BaseNode {
  _type: 'Sym.Labeled';
  symbol: SymNode;
  label: NonterminalLabelNode;
}

interface SymLiteralNode extends BaseNode {
  _type: 'Sym.Literal';
  string: string;
}

interface SymNonterminalNode extends BaseNode {
  _type: 'Sym.Nonterminal';
  nonterminal: NonterminalNode;
}

interface SymNotFollowNode extends BaseNode {
  _type: 'Sym.NotFollow';
  symbol: SymNode;
  match: SymNode;
}

interface SymNotPrecedeNode extends BaseNode {
  _type: 'Sym.NotPrecede';
  match: SymNode;
  symbol: SymNode;
}

interface SymOptionalNode extends BaseNode {
  _type: 'Sym.Optional';
  symbol: SymNode;
}

interface SymParameterNode extends BaseNode {
  _type: 'Sym.Parameter';
  nonterminal: NonterminalNode;
}

interface SymParametrizedNode extends BaseNode {
  _type: 'Sym.Parametrized';
  nonterminal: NonterminalNode;
  parameters: SymNode[];
}

interface SymPrecedeNode extends BaseNode {
  _type: 'Sym.Precede';
  match: SymNode;
  symbol: SymNode;
}

interface SymSequenceNode extends BaseNode {
  _type: 'Sym.Sequence';
  first: SymNode;
  sequence: SymNode[];
}

interface SymStartNode extends BaseNode {
  _type: 'Sym.Start';
  nonterminal: NonterminalNode;
}

interface SymStartOfLineNode extends BaseNode {
  _type: 'Sym.StartOfLine';
  symbol: SymNode;
}

interface SymUnequalNode extends BaseNode {
  _type: 'Sym.Unequal';
  symbol: SymNode;
  match: SymNode;
}

type SymNode =
  | SymAlternativeNode
  | SymCaseInsensitiveLiteralNode
  | SymCharacterClassNode
  | SymColumnNode
  | SymEmptyNode
  | SymEndOfLineNode
  | SymExceptNode
  | SymFollowNode
  | SymIterNode
  | SymIterSepNode
  | SymIterStarNode
  | SymIterStarSepNode
  | SymLabeledNode
  | SymLiteralNode
  | SymNonterminalNode
  | SymNotFollowNode
  | SymNotPrecedeNode
  | SymOptionalNode
  | SymParameterNode
  | SymParametrizedNode
  | SymPrecedeNode
  | SymSequenceNode
  | SymStartNode
  | SymStartOfLineNode
  | SymUnequalNode;

interface SyntaxDefinitionKeywordNode extends BaseNode {
  _type: 'SyntaxDefinition.Keyword';
  defined: SymNode;
  production: ProdNode;
}

interface SyntaxDefinitionLanguageNode extends BaseNode {
  _type: 'SyntaxDefinition.Language';
  start: StartNode;
  defined: SymNode;
  production: ProdNode;
}

interface SyntaxDefinitionLayoutNode extends BaseNode {
  _type: 'SyntaxDefinition.Layout';
  vis: VisibilityNode;
  defined: SymNode;
  production: ProdNode;
}

interface SyntaxDefinitionLexicalNode extends BaseNode {
  _type: 'SyntaxDefinition.Lexical';
  defined: SymNode;
  production: ProdNode;
}

type SyntaxDefinitionNode =
  | SyntaxDefinitionKeywordNode
  | SyntaxDefinitionLanguageNode
  | SyntaxDefinitionLayoutNode
  | SyntaxDefinitionLexicalNode;

interface TagDefaultNode extends BaseNode {
  _type: 'Tag.Default';
  name: NameNode;
  contents: TagStringNode;
}

interface TagEmptyNode extends BaseNode {
  _type: 'Tag.Empty';
  name: NameNode;
}

interface TagExpressionNode extends BaseNode {
  _type: 'Tag.Expression';
  name: NameNode;
  expression: ExpressionNode;
}

type TagNode = TagDefaultNode | TagEmptyNode | TagExpressionNode;

interface TagStringLexicalNode extends BaseNode {
  _type: 'TagString.Lexical';
  string: string;
}

type TagStringNode = TagStringLexicalNode;

interface TagsDefaultNode extends BaseNode {
  _type: 'Tags.Default';
  tags: TagNode[];
}

type TagsNode = TagsDefaultNode;

interface TargetEmptyNode extends BaseNode {
  _type: 'Target.Empty';
}

interface TargetLabeledNode extends BaseNode {
  _type: 'Target.Labeled';
  name: NameNode;
}

type TargetNode = TargetEmptyNode | TargetLabeledNode;

interface TimePartNoTZLexicalNode extends BaseNode {
  _type: 'TimePartNoTZ.Lexical';
  string: string;
}

type TimePartNoTZNode = TimePartNoTZLexicalNode;

interface TimeZonePartLexicalNode extends BaseNode {
  _type: 'TimeZonePart.Lexical';
  string: string;
}

type TimeZonePartNode = TimeZonePartLexicalNode;

interface ToplevelGivenVisibilityNode extends BaseNode {
  _type: 'Toplevel.GivenVisibility';
  declaration: DeclarationNode;
}

type ToplevelNode = ToplevelGivenVisibilityNode;

interface TypeBasicNode extends BaseNode {
  _type: 'Type.Basic';
  basic: BasicTypeNode;
}

interface TypeBracketNode extends BaseNode {
  _type: 'Type.Bracket';
  type: TypeNode;
}

interface TypeFunctionNode extends BaseNode {
  _type: 'Type.Function';
  function: FunctionTypeNode;
}

interface TypeSelectorNode extends BaseNode {
  _type: 'Type.Selector';
  selector: DataTypeSelectorNode;
}

interface TypeStructuredNode extends BaseNode {
  _type: 'Type.Structured';
  structured: StructuredTypeNode;
}

interface TypeSymbolNode extends BaseNode {
  _type: 'Type.Symbol';
  symbol: SymNode;
}

interface TypeUserNode extends BaseNode {
  _type: 'Type.User';
  user: UserTypeNode;
}

interface TypeVariableNode extends BaseNode {
  _type: 'Type.Variable';
  typeVar: TypeVarNode;
}

type TypeNode =
  | TypeBasicNode
  | TypeBracketNode
  | TypeFunctionNode
  | TypeSelectorNode
  | TypeStructuredNode
  | TypeSymbolNode
  | TypeUserNode
  | TypeVariableNode;

interface TypeArgDefaultNode extends BaseNode {
  _type: 'TypeArg.Default';
  type: TypeNode;
}

interface TypeArgNamedNode extends BaseNode {
  _type: 'TypeArg.Named';
  type: TypeNode;
  name: NameNode;
}

type TypeArgNode = TypeArgDefaultNode | TypeArgNamedNode;

interface TypeVarBoundedNode extends BaseNode {
  _type: 'TypeVar.Bounded';
  name: NameNode;
  bound: TypeNode;
}

interface TypeVarFreeNode extends BaseNode {
  _type: 'TypeVar.Free';
  name: NameNode;
}

type TypeVarNode = TypeVarBoundedNode | TypeVarFreeNode;

interface URLCharsLexicalNode extends BaseNode {
  _type: 'URLChars.Lexical';
  string: string;
}

type URLCharsNode = URLCharsLexicalNode;

interface UnicodeEscapeLexicalNode extends BaseNode {
  _type: 'UnicodeEscape.Lexical';
  string: string;
}

type UnicodeEscapeNode = UnicodeEscapeLexicalNode;

interface UserTypeNameNode extends BaseNode {
  _type: 'UserType.Name';
  name: QualifiedNameNode;
}

interface UserTypeParametricNode extends BaseNode {
  _type: 'UserType.Parametric';
  name: QualifiedNameNode;
  parameters: TypeNode[];
}

type UserTypeNode = UserTypeNameNode | UserTypeParametricNode;

interface VariableInitializedNode extends BaseNode {
  _type: 'Variable.Initialized';
  name: NameNode;
  initial: ExpressionNode;
}

interface VariableUnInitializedNode extends BaseNode {
  _type: 'Variable.UnInitialized';
  name: NameNode;
}

type VariableNode = VariableInitializedNode | VariableUnInitializedNode;

interface VariantNAryConstructorNode extends BaseNode {
  _type: 'Variant.NAryConstructor';
  name: NameNode;
  arguments: TypeArgNode[];
  keywordArguments: KeywordFormalsNode;
}

type VariantNode = VariantNAryConstructorNode;

interface VisibilityDefaultNode extends BaseNode {
  _type: 'Visibility.Default';
}

interface VisibilityPrivateNode extends BaseNode {
  _type: 'Visibility.Private';
}

interface VisibilityPublicNode extends BaseNode {
  _type: 'Visibility.Public';
}

type VisibilityNode = VisibilityDefaultNode | VisibilityPrivateNode | VisibilityPublicNode;

interface VisitDefaultStrategyNode extends BaseNode {
  _type: 'Visit.DefaultStrategy';
  subject: ExpressionNode;
  cases: CaseNode[];
}

interface VisitGivenStrategyNode extends BaseNode {
  _type: 'Visit.GivenStrategy';
  strategy: StrategyNode;
  subject: ExpressionNode;
  cases: CaseNode[];
}

type VisitNode = VisitDefaultStrategyNode | VisitGivenStrategyNode;

type ASTNode =
  | AssignableNode
  | AssignmentNode
  | AssocNode
  | BackslashNode
  | BasicTypeNode
  | BodyNode
  | BooleanLiteralNode
  | BoundNode
  | CaseNode
  | CaseInsensitiveStringConstantNode
  | CatchNode
  | CharNode
  | ClassNode
  | CommandNode
  | CommandsNode
  | CommentNode
  | CommonKeywordParametersNode
  | ComprehensionNode
  | ConcreteNode
  | ConcreteHoleNode
  | ConcretePartNode
  | DataTargetNode
  | DataTypeSelectorNode
  | DateAndTimeNode
  | DatePartNode
  | DateTimeLiteralNode
  | DecimalIntegerLiteralNode
  | DeclarationNode
  | DeclaratorNode
  | EvalCommandNode
  | ExpressionNode
  | FieldNode
  | FormalsNode
  | FunctionBodyNode
  | FunctionDeclarationNode
  | FunctionModifierNode
  | FunctionModifiersNode
  | FunctionTypeNode
  | HeaderNode
  | HexIntegerLiteralNode
  | ImportNode
  | ImportedModuleNode
  | IntegerLiteralNode
  | JustDateNode
  | JustTimeNode
  | KeywordArgument_ExpressionNode
  | KeywordArguments_ExpressionNode
  | KeywordFormalNode
  | KeywordFormalsNode
  | KindNode
  | LAYOUTNode
  | LabelNode
  | LiteralNode
  | LocalVariableDeclarationNode
  | LocationLiteralNode
  | Mapping_ExpressionNode
  | MidPathCharsNode
  | MidProtocolCharsNode
  | MidStringCharsNode
  | ModuleNode
  | ModuleActualsNode
  | ModuleParametersNode
  | NameNode
  | NamedBackslashNode
  | NamedRegExpNode
  | NonterminalNode
  | NonterminalLabelNode
  | OctalIntegerLiteralNode
  | OptionalCommaNode
  | OptionalExpressionNode
  | OutputNode
  | ParametersNode
  | PathCharsNode
  | PathPartNode
  | PathTailNode
  | PatternWithActionNode
  | PostPathCharsNode
  | PostProtocolCharsNode
  | PostStringCharsNode
  | PrePathCharsNode
  | PreProtocolCharsNode
  | PreStringCharsNode
  | ProdNode
  | ProdModifierNode
  | ProtocolCharsNode
  | ProtocolPartNode
  | ProtocolTailNode
  | QualifiedNameNode
  | RangeNode
  | RationalLiteralNode
  | RealLiteralNode
  | RegExpNode
  | RegExpLiteralNode
  | RegExpModifierNode
  | RenamingNode
  | RenamingsNode
  | ReplacementNode
  | ShellCommandNode
  | SignatureNode
  | StartNode
  | StatementNode
  | StrategyNode
  | StringCharacterNode
  | StringConstantNode
  | StringLiteralNode
  | StringMiddleNode
  | StringTailNode
  | StringTemplateNode
  | StructuredTypeNode
  | SymNode
  | SyntaxDefinitionNode
  | TagNode
  | TagStringNode
  | TagsNode
  | TargetNode
  | TimePartNoTZNode
  | TimeZonePartNode
  | ToplevelNode
  | TypeNode
  | TypeArgNode
  | TypeVarNode
  | URLCharsNode
  | UnicodeEscapeNode
  | UserTypeNode
  | VariableNode
  | VariantNode
  | VisibilityNode
  | VisitNode;
