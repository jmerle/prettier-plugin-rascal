package com.jaspervanmerle.rascalparser

import com.github.salomonbrys.kotson.jsonObject
import com.google.gson.JsonObject
import org.rascalmpl.ast.AbstractAST
import org.rascalmpl.ast.Assignable
import org.rascalmpl.ast.Assignment
import org.rascalmpl.ast.Assoc
import org.rascalmpl.ast.Backslash
import org.rascalmpl.ast.BasicType
import org.rascalmpl.ast.Body
import org.rascalmpl.ast.BooleanLiteral
import org.rascalmpl.ast.Bound
import org.rascalmpl.ast.Case
import org.rascalmpl.ast.CaseInsensitiveStringConstant
import org.rascalmpl.ast.Catch
import org.rascalmpl.ast.Char
import org.rascalmpl.ast.Class
import org.rascalmpl.ast.Command
import org.rascalmpl.ast.Commands
import org.rascalmpl.ast.Comment
import org.rascalmpl.ast.CommonKeywordParameters
import org.rascalmpl.ast.Comprehension
import org.rascalmpl.ast.Concrete
import org.rascalmpl.ast.ConcreteHole
import org.rascalmpl.ast.ConcretePart
import org.rascalmpl.ast.DataTarget
import org.rascalmpl.ast.DataTypeSelector
import org.rascalmpl.ast.DateAndTime
import org.rascalmpl.ast.DatePart
import org.rascalmpl.ast.DateTimeLiteral
import org.rascalmpl.ast.DecimalIntegerLiteral
import org.rascalmpl.ast.Declaration
import org.rascalmpl.ast.Declarator
import org.rascalmpl.ast.EvalCommand
import org.rascalmpl.ast.Expression
import org.rascalmpl.ast.Field
import org.rascalmpl.ast.Formals
import org.rascalmpl.ast.FunctionBody
import org.rascalmpl.ast.FunctionDeclaration
import org.rascalmpl.ast.FunctionModifier
import org.rascalmpl.ast.FunctionModifiers
import org.rascalmpl.ast.FunctionType
import org.rascalmpl.ast.Header
import org.rascalmpl.ast.HexIntegerLiteral
import org.rascalmpl.ast.IASTVisitor
import org.rascalmpl.ast.Import
import org.rascalmpl.ast.ImportedModule
import org.rascalmpl.ast.IntegerLiteral
import org.rascalmpl.ast.JustDate
import org.rascalmpl.ast.JustTime
import org.rascalmpl.ast.KeywordArgument_Expression
import org.rascalmpl.ast.KeywordArguments_Expression
import org.rascalmpl.ast.KeywordFormal
import org.rascalmpl.ast.KeywordFormals
import org.rascalmpl.ast.Kind
import org.rascalmpl.ast.LAYOUT
import org.rascalmpl.ast.Label
import org.rascalmpl.ast.Literal
import org.rascalmpl.ast.LocalVariableDeclaration
import org.rascalmpl.ast.LocationLiteral
import org.rascalmpl.ast.Mapping_Expression
import org.rascalmpl.ast.MidPathChars
import org.rascalmpl.ast.MidProtocolChars
import org.rascalmpl.ast.MidStringChars
import org.rascalmpl.ast.Module
import org.rascalmpl.ast.ModuleActuals
import org.rascalmpl.ast.ModuleParameters
import org.rascalmpl.ast.Name
import org.rascalmpl.ast.NamedBackslash
import org.rascalmpl.ast.NamedRegExp
import org.rascalmpl.ast.Nonterminal
import org.rascalmpl.ast.NonterminalLabel
import org.rascalmpl.ast.OctalIntegerLiteral
import org.rascalmpl.ast.OptionalComma
import org.rascalmpl.ast.OptionalExpression
import org.rascalmpl.ast.Output
import org.rascalmpl.ast.Parameters
import org.rascalmpl.ast.PathChars
import org.rascalmpl.ast.PathPart
import org.rascalmpl.ast.PathTail
import org.rascalmpl.ast.PatternWithAction
import org.rascalmpl.ast.PostPathChars
import org.rascalmpl.ast.PostProtocolChars
import org.rascalmpl.ast.PostStringChars
import org.rascalmpl.ast.PrePathChars
import org.rascalmpl.ast.PreProtocolChars
import org.rascalmpl.ast.PreStringChars
import org.rascalmpl.ast.Prod
import org.rascalmpl.ast.ProdModifier
import org.rascalmpl.ast.ProtocolChars
import org.rascalmpl.ast.ProtocolPart
import org.rascalmpl.ast.ProtocolTail
import org.rascalmpl.ast.QualifiedName
import org.rascalmpl.ast.Range
import org.rascalmpl.ast.RationalLiteral
import org.rascalmpl.ast.RealLiteral
import org.rascalmpl.ast.RegExp
import org.rascalmpl.ast.RegExpLiteral
import org.rascalmpl.ast.RegExpModifier
import org.rascalmpl.ast.Renaming
import org.rascalmpl.ast.Renamings
import org.rascalmpl.ast.Replacement
import org.rascalmpl.ast.ShellCommand
import org.rascalmpl.ast.Signature
import org.rascalmpl.ast.Start
import org.rascalmpl.ast.Statement
import org.rascalmpl.ast.Strategy
import org.rascalmpl.ast.StringCharacter
import org.rascalmpl.ast.StringConstant
import org.rascalmpl.ast.StringLiteral
import org.rascalmpl.ast.StringMiddle
import org.rascalmpl.ast.StringTail
import org.rascalmpl.ast.StringTemplate
import org.rascalmpl.ast.StructuredType
import org.rascalmpl.ast.Sym
import org.rascalmpl.ast.SyntaxDefinition
import org.rascalmpl.ast.Tag
import org.rascalmpl.ast.TagString
import org.rascalmpl.ast.Tags
import org.rascalmpl.ast.Target
import org.rascalmpl.ast.TimePartNoTZ
import org.rascalmpl.ast.TimeZonePart
import org.rascalmpl.ast.Toplevel
import org.rascalmpl.ast.Type
import org.rascalmpl.ast.TypeArg
import org.rascalmpl.ast.TypeVar
import org.rascalmpl.ast.URLChars
import org.rascalmpl.ast.UnicodeEscape
import org.rascalmpl.ast.UserType
import org.rascalmpl.ast.Variable
import org.rascalmpl.ast.Variant
import org.rascalmpl.ast.Visibility
import org.rascalmpl.ast.Visit

object ASTConverter : IASTVisitor<JsonObject> {
  override fun visitExpressionEquivalence(x: Expression.Equivalence): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDateTimeLiteralTimeLiteral(x: DateTimeLiteral.TimeLiteral): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionStepRange(x: Expression.StepRange): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymColumn(x: Sym.Column): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitShellCommandQuit(x: ShellCommand.Quit): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitFunctionDeclarationAbstract(x: FunctionDeclaration.Abstract): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionRange(x: Expression.Range): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionSlice(x: Expression.Slice): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementGlobalDirective(x: Statement.GlobalDirective): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCommandExpression(x: Command.Expression): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLiteralDateTime(x: Literal.DateTime): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLocalVariableDeclarationDefault(x: LocalVariableDeclaration.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymIterStar(x: Sym.IterStar): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSyntaxDefinitionLanguage(x: SyntaxDefinition.Language): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDeclarationAlias(x: Declaration.Alias): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitEvalCommandStatement(x: EvalCommand.Statement): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDateTimeLiteralDateLiteral(x: DateTimeLiteral.DateLiteral): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionComposition(x: Expression.Composition): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBoundDefault(x: Bound.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDeclarationDataAbstract(x: Declaration.DataAbstract): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignableConstructor(x: Assignable.Constructor): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKindAll(x: Kind.All): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionQualifiedName(x: Expression.QualifiedName): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitVisibilityPrivate(x: Visibility.Private): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitShellCommandEdit(x: ShellCommand.Edit): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymEndOfLine(x: Sym.EndOfLine): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymUnequal(x: Sym.Unequal): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKeywordFormalsDefault(x: KeywordFormals.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitRegExpModifierLexical(x: RegExpModifier.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignmentProduct(x: Assignment.Product): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionGreaterThan(x: Expression.GreaterThan): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStrategyTopDownBreak(x: Strategy.TopDownBreak): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitShellCommandSetOption(x: ShellCommand.SetOption): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTypeArgDefault(x: TypeArg.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProtocolPartNonInterpolated(x: ProtocolPart.NonInterpolated): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCommandsCommandlist(x: Commands.Commandlist): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitFunctionModifierJava(x: FunctionModifier.Java): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitRangeCharacter(x: Range.Character): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitShellCommandUndeclare(x: ShellCommand.Undeclare): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLiteralRegExp(x: Literal.RegExp): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitImportedModuleActuals(x: ImportedModule.Actuals): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStructuredTypeDefault(x: StructuredType.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitOctalIntegerLiteralLexical(x: OctalIntegerLiteral.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitRegExpLiteralLexical(x: RegExpLiteral.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitNonterminalLabelLexical(x: NonterminalLabel.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionTransitiveClosure(x: Expression.TransitiveClosure): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKindView(x: Kind.View): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitRenamingsDefault(x: Renamings.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitIntegerLiteralDecimalIntegerLiteral(x: IntegerLiteral.DecimalIntegerLiteral): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStrategyTopDown(x: Strategy.TopDown): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionFieldProject(x: Expression.FieldProject): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitClassDifference(x: Class.Difference): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitUnicodeEscapeLexical(x: UnicodeEscape.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringTailPost(x: StringTail.Post): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeMap(x: BasicType.Map): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitIntegerLiteralOctalIntegerLiteral(x: IntegerLiteral.OctalIntegerLiteral): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLabelDefault(x: Label.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringMiddleTemplate(x: StringMiddle.Template): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringConstantLexical(x: StringConstant.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDeclarationVariable(x: Declaration.Variable): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionGreaterThanOrEq(x: Expression.GreaterThanOrEq): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTagEmpty(x: Tag.Empty): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitPostPathCharsLexical(x: PostPathChars.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignmentAddition(x: Assignment.Addition): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTypeUser(x: Type.User): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitMidPathCharsLexical(x: MidPathChars.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionSubscript(x: Expression.Subscript): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringTemplateIfThenElse(x: StringTemplate.IfThenElse): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionEnumerator(x: Expression.Enumerator): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeReal(x: BasicType.Real): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringCharacterLexical(x: StringCharacter.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignableSlice(x: Assignable.Slice): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeInt(x: BasicType.Int): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitShellCommandClear(x: ShellCommand.Clear): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionMatch(x: Expression.Match): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProtocolTailMid(x: ProtocolTail.Mid): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitModuleParametersDefault(x: ModuleParameters.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCommandDeclaration(x: Command.Declaration): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymLiteral(x: Sym.Literal): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStartAbsent(x: Start.Absent): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementIfThen(x: Statement.IfThen): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCommandStatement(x: Command.Statement): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymNotFollow(x: Sym.NotFollow): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitClassUnion(x: Class.Union): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementTry(x: Statement.Try): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKeywordArguments_ExpressionNone(x: KeywordArguments_Expression.None): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitModuleActualsDefault(x: ModuleActuals.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitRationalLiteralLexical(x: RationalLiteral.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionSplice(x: Expression.Splice): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProdAll(x: Prod.All): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionVoidClosure(x: Expression.VoidClosure): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitComprehensionList(x: Comprehension.List): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeNode(x: BasicType.Node): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeDateTime(x: BasicType.DateTime): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBoundEmpty(x: Bound.Empty): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCaseInsensitiveStringConstantLexical(x: CaseInsensitiveStringConstant.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitPathTailPost(x: PathTail.Post): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitFunctionDeclarationDefault(x: FunctionDeclaration.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStrategyInnermost(x: Strategy.Innermost): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDataTypeSelectorSelector(x: DataTypeSelector.Selector): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementExpression(x: Statement.Expression): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionAppendAfter(x: Expression.AppendAfter): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTypeVarBounded(x: TypeVar.Bounded): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitFunctionModifiersModifierlist(x: FunctionModifiers.Modifierlist): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitPatternWithActionArbitrary(x: PatternWithAction.Arbitrary): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionIfDefinedOtherwise(x: Expression.IfDefinedOtherwise): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKindTag(x: Kind.Tag): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignmentDivision(x: Assignment.Division): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymCharacterClass(x: Sym.CharacterClass): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCatchBinding(x: Catch.Binding): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionComprehension(x: Expression.Comprehension): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTagExpression(x: Tag.Expression): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTypeVariable(x: Type.Variable): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeValue(x: BasicType.Value): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLiteralInteger(x: Literal.Integer): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionDivision(x: Expression.Division): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymAlternative(x: Sym.Alternative): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringTailMidInterpolated(x: StringTail.MidInterpolated): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionRemainder(x: Expression.Remainder): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitShellCommandListDeclarations(x: ShellCommand.ListDeclarations): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringLiteralInterpolated(x: StringLiteral.Interpolated): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymLabeled(x: Sym.Labeled): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionNoMatch(x: Expression.NoMatch): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionNonEmptyBlock(x: Expression.NonEmptyBlock): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymSequence(x: Sym.Sequence): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssocLeft(x: Assoc.Left): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitComprehensionSet(x: Comprehension.Set): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionConcrete(x: Expression.Concrete): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssocNonAssociative(x: Assoc.NonAssociative): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionDescendant(x: Expression.Descendant): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitJustDateLexical(x: JustDate.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionNonEquals(x: Expression.NonEquals): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCommandImport(x: Command.Import): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymStartOfLine(x: Sym.StartOfLine): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKindFunction(x: Kind.Function): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignableSliceStep(x: Assignable.SliceStep): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLiteralString(x: Literal.String): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymCaseInsensitiveLiteral(x: Sym.CaseInsensitiveLiteral): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionInsertBefore(x: Expression.InsertBefore): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStrategyOutermost(x: Strategy.Outermost): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionLessThan(x: Expression.LessThan): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionOr(x: Expression.Or): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeString(x: BasicType.String): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTagStringLexical(x: TagString.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitPatternWithActionReplacing(x: PatternWithAction.Replacing): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSignatureWithThrows(x: Signature.WithThrows): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymParametrized(x: Sym.Parametrized): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSignatureNoThrows(x: Signature.NoThrows): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionIsDefined(x: Expression.IsDefined): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignmentSubtraction(x: Assignment.Subtraction): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDeclaratorDefault(x: Declarator.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCommandShell(x: Command.Shell): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementContinue(x: Statement.Continue): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitVisibilityPublic(x: Visibility.Public): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTagsDefault(x: Tags.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignableIfDefinedOrDefault(x: Assignable.IfDefinedOrDefault): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionIfThenElse(x: Expression.IfThenElse): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitFunctionDeclarationExpression(x: FunctionDeclaration.Expression): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCasePatternWithAction(x: Case.PatternWithAction): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitImportExtend(x: Import.Extend): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignmentAppend(x: Assignment.Append): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLiteralBoolean(x: Literal.Boolean): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStartPresent(x: Start.Present): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKindData(x: Kind.Data): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitToplevelGivenVisibility(x: Toplevel.GivenVisibility): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitRangeFromTo(x: Range.FromTo): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionTypedVariableBecomes(x: Expression.TypedVariableBecomes): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymEmpty(x: Sym.Empty): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionMap(x: Expression.Map): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitImportedModuleDefault(x: ImportedModule.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitConcreteLexical(x: Concrete.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymFollow(x: Sym.Follow): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionGetAnnotation(x: Expression.GetAnnotation): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProtocolTailPost(x: ProtocolTail.Post): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitFunctionTypeTypeArguments(x: FunctionType.TypeArguments): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeNum(x: BasicType.Num): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeRelation(x: BasicType.Relation): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeListRelation(x: BasicType.ListRelation): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeList(x: BasicType.List): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitPathPartNonInterpolated(x: PathPart.NonInterpolated): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitPathPartInterpolated(x: PathPart.Interpolated): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymNotPrecede(x: Sym.NotPrecede): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitClassSimpleCharclass(x: Class.SimpleCharclass): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymStart(x: Sym.Start): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitConcretePartLexical(x: ConcretePart.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeBag(x: BasicType.Bag): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionVisit(x: Expression.Visit): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTypeBracket(x: Type.Bracket): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeRational(x: BasicType.Rational): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitRenamingDefault(x: Renaming.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitVariableUnInitialized(x: Variable.UnInitialized): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementEmptyStatement(x: Statement.EmptyStatement): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitRealLiteralLexical(x: RealLiteral.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitNonterminalLexical(x: Nonterminal.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLiteralLocation(x: Literal.Location): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymOptional(x: Sym.Optional): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitFunctionModifierDefault(x: FunctionModifier.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionAddition(x: Expression.Addition): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementWhile(x: Statement.While): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringLiteralTemplate(x: StringLiteral.Template): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDatePartLexical(x: DatePart.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitJustTimeLexical(x: JustTime.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDataTargetEmpty(x: DataTarget.Empty): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionLessThanOrEq(x: Expression.LessThanOrEq): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionAll(x: Expression.All): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSyntaxDefinitionLexical(x: SyntaxDefinition.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssocRight(x: Assoc.Right): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementAssignment(x: Statement.Assignment): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionReducer(x: Expression.Reducer): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSyntaxDefinitionLayout(x: SyntaxDefinition.Layout): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeLoc(x: BasicType.Loc): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitConcreteHoleOne(x: ConcreteHole.One): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignableTuple(x: Assignable.Tuple): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementAppend(x: Statement.Append): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitPreProtocolCharsLexical(x: PreProtocolChars.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitImportedModuleRenamings(x: ImportedModule.Renamings): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementAssert(x: Statement.Assert): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitFormalsDefault(x: Formals.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitMapping_ExpressionDefault(x: Mapping_Expression.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDeclarationFunction(x: Declaration.Function): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionList(x: Expression.List): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitFieldName(x: Field.Name): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLocalVariableDeclarationDynamic(x: LocalVariableDeclaration.Dynamic): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeType(x: BasicType.Type): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymExcept(x: Sym.Except): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitParametersVarArgs(x: Parameters.VarArgs): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementFor(x: Statement.For): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTypeStructured(x: Type.Structured): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitFunctionBodyDefault(x: FunctionBody.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymIterStarSep(x: Sym.IterStarSep): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProdLabeled(x: Prod.Labeled): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementReturn(x: Statement.Return): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitClassBracket(x: Class.Bracket): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitVariantNAryConstructor(x: Variant.NAryConstructor): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementSolve(x: Statement.Solve): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSyntaxDefinitionKeyword(x: SyntaxDefinition.Keyword): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBodyToplevels(x: Body.Toplevels): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitClassIntersection(x: Class.Intersection): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitOptionalExpressionNoExpression(x: OptionalExpression.NoExpression): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeTuple(x: BasicType.Tuple): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitNamedBackslashLexical(x: NamedBackslash.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKindAnno(x: Kind.Anno): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitPrePathCharsLexical(x: PrePathChars.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProdModifierTag(x: ProdModifier.Tag): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringTemplateDoWhile(x: StringTemplate.DoWhile): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDateTimeLiteralDateAndTimeLiteral(x: DateTimeLiteral.DateAndTimeLiteral): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCharLexical(x: Char.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionSet(x: Expression.Set): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementBreak(x: Statement.Break): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProtocolPartInterpolated(x: ProtocolPart.Interpolated): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitShellCommandListModules(x: ShellCommand.ListModules): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitQualifiedNameDefault(x: QualifiedName.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitEvalCommandOutput(x: EvalCommand.Output): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignmentDefault(x: Assignment.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionFieldAccess(x: Expression.FieldAccess): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionIn(x: Expression.In): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionTuple(x: Expression.Tuple): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitPreStringCharsLexical(x: PreStringChars.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitShellCommandHelp(x: ShellCommand.Help): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCaseDefault(x: Case.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementVisit(x: Statement.Visit): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementInsert(x: Statement.Insert): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTypeBasic(x: Type.Basic): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitHeaderParameters(x: Header.Parameters): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionAsType(x: Expression.AsType): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBackslashLexical(x: Backslash.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTimePartNoTZLexical(x: TimePartNoTZ.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionIs(x: Expression.Is): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitShellCommandUnimport(x: ShellCommand.Unimport): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitReplacementUnconditional(x: Replacement.Unconditional): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTagDefault(x: Tag.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringMiddleMid(x: StringMiddle.Mid): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionVariableBecomes(x: Expression.VariableBecomes): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDecimalIntegerLiteralLexical(x: DecimalIntegerLiteral.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionTypedVariable(x: Expression.TypedVariable): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitURLCharsLexical(x: URLChars.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDateAndTimeLexical(x: DateAndTime.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementFail(x: Statement.Fail): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionModulo(x: Expression.Modulo): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitOutputLexical(x: Output.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionIt(x: Expression.It): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementSwitch(x: Statement.Switch): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitOptionalExpressionExpression(x: OptionalExpression.Expression): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionSplicePlus(x: Expression.SplicePlus): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignableFieldAccess(x: Assignable.FieldAccess): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignableVariable(x: Assignable.Variable): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionSliceStep(x: Expression.SliceStep): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKeywordArguments_ExpressionDefault(x: KeywordArguments_Expression.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProdUnlabeled(x: Prod.Unlabeled): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitMidProtocolCharsLexical(x: MidProtocolChars.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitClassComplement(x: Class.Complement): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitFieldIndex(x: Field.Index): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKindAlias(x: Kind.Alias): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLiteralReal(x: Literal.Real): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLocationLiteralDefault(x: LocationLiteral.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitNameLexical(x: Name.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymNonterminal(x: Sym.Nonterminal): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLAYOUTLexical(x: LAYOUT.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitFunctionDeclarationConditional(x: FunctionDeclaration.Conditional): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionNegation(x: Expression.Negation): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTypeArgNamed(x: TypeArg.Named): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymIter(x: Sym.Iter): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionAny(x: Expression.Any): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionFieldUpdate(x: Expression.FieldUpdate): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionProduct(x: Expression.Product): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStrategyBottomUpBreak(x: Strategy.BottomUpBreak): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKindVariable(x: Kind.Variable): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitPathTailMid(x: PathTail.Mid): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitShellCommandTest(x: ShellCommand.Test): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringMiddleInterpolated(x: StringMiddle.Interpolated): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitImportDefault(x: Import.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitPathCharsLexical(x: PathChars.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitOptionalCommaLexical(x: OptionalComma.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementFilter(x: Statement.Filter): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitModuleDefault(x: Module.Default): JsonObject {
    return createNode(x, "Module.Default", "header" to x.header, "body" to x.body)
  }

  override fun visitParametersDefault(x: Parameters.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignableBracket(x: Assignable.Bracket): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionCallOrTree(x: Expression.CallOrTree): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeSet(x: BasicType.Set): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitEvalCommandImport(x: EvalCommand.Import): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionEquals(x: Expression.Equals): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionHas(x: Expression.Has): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProdModifierBracket(x: ProdModifier.Bracket): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProdAssociativityGroup(x: Prod.AssociativityGroup): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringLiteralNonInterpolated(x: StringLiteral.NonInterpolated): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitEvalCommandDeclaration(x: EvalCommand.Declaration): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringTemplateIfThen(x: StringTemplate.IfThen): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTargetLabeled(x: Target.Labeled): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymPrecede(x: Sym.Precede): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionSubtraction(x: Expression.Subtraction): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitImportSyntax(x: Import.Syntax): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementThrow(x: Statement.Throw): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionLiteral(x: Expression.Literal): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionClosure(x: Expression.Closure): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitUserTypeName(x: UserType.Name): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionReifyType(x: Expression.ReifyType): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssocAssociative(x: Assoc.Associative): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitIntegerLiteralHexIntegerLiteral(x: IntegerLiteral.HexIntegerLiteral): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignableSubscript(x: Assignable.Subscript): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitVisitGivenStrategy(x: Visit.GivenStrategy): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTypeSelector(x: Type.Selector): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementFunctionDeclaration(x: Statement.FunctionDeclaration): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementIfThenElse(x: Statement.IfThenElse): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitVariableInitialized(x: Variable.Initialized): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionImplication(x: Expression.Implication): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitVisitDefaultStrategy(x: Visit.DefaultStrategy): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignmentIntersection(x: Assignment.Intersection): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeBool(x: BasicType.Bool): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionReifiedType(x: Expression.ReifiedType): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStrategyBottomUp(x: Strategy.BottomUp): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymIterSep(x: Sym.IterSep): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKindModule(x: Kind.Module): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionNotIn(x: Expression.NotIn): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCommonKeywordParametersPresent(x: CommonKeywordParameters.Present): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitPostStringCharsLexical(x: PostStringChars.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementTryFinally(x: Statement.TryFinally): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitFunctionModifierTest(x: FunctionModifier.Test): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementNonEmptyBlock(x: Statement.NonEmptyBlock): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTypeSymbol(x: Type.Symbol): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDeclarationAnnotation(x: Declaration.Annotation): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionIntersection(x: Expression.Intersection): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTypeVarFree(x: TypeVar.Free): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionAnd(x: Expression.And): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKeywordArgument_ExpressionDefault(x: KeywordArgument_Expression.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKeywordFormalDefault(x: KeywordFormal.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTargetEmpty(x: Target.Empty): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTypeFunction(x: Type.Function): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitMidStringCharsLexical(x: MidStringChars.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDataTargetLabeled(x: DataTarget.Labeled): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringTemplateWhile(x: StringTemplate.While): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBooleanLiteralLexical(x: BooleanLiteral.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionSetAnnotation(x: Expression.SetAnnotation): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLiteralRational(x: Literal.Rational): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignableAnnotation(x: Assignable.Annotation): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitComprehensionMap(x: Comprehension.Map): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringTemplateFor(x: StringTemplate.For): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStringTailMidTemplate(x: StringTail.MidTemplate): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitKeywordFormalsNone(x: KeywordFormals.None): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitShellCommandHistory(x: ShellCommand.History): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProdReference(x: Prod.Reference): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionAnti(x: Expression.Anti): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitReplacementConditional(x: Replacement.Conditional): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitPostProtocolCharsLexical(x: PostProtocolChars.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCatchDefault(x: Catch.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionNegative(x: Expression.Negative): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitHexIntegerLiteralLexical(x: HexIntegerLiteral.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitImportExternal(x: Import.External): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDeclarationData(x: Declaration.Data): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitVisibilityDefault(x: Visibility.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitBasicTypeVoid(x: BasicType.Void): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionBracket(x: Expression.Bracket): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitAssignmentIfDefined(x: Assignment.IfDefined): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProdFirst(x: Prod.First): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCommentLexical(x: Comment.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitCommonKeywordParametersAbsent(x: CommonKeywordParameters.Absent): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionMultiVariable(x: Expression.MultiVariable): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitUserTypeParametric(x: UserType.Parametric): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitImportedModuleActualsRenaming(x: ImportedModule.ActualsRenaming): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementDoWhile(x: Statement.DoWhile): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitRegExpLexical(x: RegExp.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProtocolCharsLexical(x: ProtocolChars.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionJoin(x: Expression.Join): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementAssertWithMessage(x: Statement.AssertWithMessage): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitHeaderDefault(x: Header.Default): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitNamedRegExpLexical(x: NamedRegExp.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitLabelEmpty(x: Label.Empty): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitTimeZonePartLexical(x: TimeZonePart.Lexical): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitSymParameter(x: Sym.Parameter): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitExpressionTransitiveReflexiveClosure(x: Expression.TransitiveReflexiveClosure): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitStatementVariableDeclaration(x: Statement.VariableDeclaration): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitDeclarationTag(x: Declaration.Tag): JsonObject {
    TODO("Not yet implemented")
  }

  override fun visitProdModifierAssociativity(x: ProdModifier.Associativity): JsonObject {
    TODO("Not yet implemented")
  }

  private fun createNode(x: AbstractAST, type: String, vararg contentValues: Pair<String, *>): JsonObject {
    val expandedContentValues = contentValues.map {
      if (it.second is AbstractAST) {
        it.first to (it.second as AbstractAST).accept(this)
      } else {
        it
      }
    }

    return jsonObject(
      "type" to type,
      "start" to x.location.offset,
      "end" to x.location.offset + x.location.length,
      "content" to jsonObject(expandedContentValues)
    )
  }
}
