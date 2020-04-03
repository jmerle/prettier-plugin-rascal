package com.jaspervanmerle.rascalparser

import com.github.salomonbrys.kotson.jsonObject
import com.github.salomonbrys.kotson.set
import com.github.salomonbrys.kotson.toJsonArray
import com.google.gson.JsonArray
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
  override fun visitAssignableAnnotation(x: Assignable.Annotation): JsonObject {
    return createAssignableNode(x, "Assignable.Annotation")
  }

  override fun visitAssignableBracket(x: Assignable.Bracket): JsonObject {
    return createAssignableNode(x, "Assignable.Bracket")
  }

  override fun visitAssignableConstructor(x: Assignable.Constructor): JsonObject {
    return createAssignableNode(x, "Assignable.Constructor")
  }

  override fun visitAssignableFieldAccess(x: Assignable.FieldAccess): JsonObject {
    return createAssignableNode(x, "Assignable.FieldAccess")
  }

  override fun visitAssignableIfDefinedOrDefault(x: Assignable.IfDefinedOrDefault): JsonObject {
    return createAssignableNode(x, "Assignable.IfDefinedOrDefault")
  }

  override fun visitAssignableSlice(x: Assignable.Slice): JsonObject {
    return createAssignableNode(x, "Assignable.Slice")
  }

  override fun visitAssignableSliceStep(x: Assignable.SliceStep): JsonObject {
    return createAssignableNode(x, "Assignable.SliceStep")
  }

  override fun visitAssignableSubscript(x: Assignable.Subscript): JsonObject {
    return createAssignableNode(x, "Assignable.Subscript")
  }

  override fun visitAssignableTuple(x: Assignable.Tuple): JsonObject {
    return createAssignableNode(x, "Assignable.Tuple")
  }

  override fun visitAssignableVariable(x: Assignable.Variable): JsonObject {
    return createAssignableNode(x, "Assignable.Variable")
  }

  override fun visitAssignmentAddition(x: Assignment.Addition): JsonObject {
    return createAssignmentNode(x, "Assignment.Addition")
  }

  override fun visitAssignmentAppend(x: Assignment.Append): JsonObject {
    return createAssignmentNode(x, "Assignment.Append")
  }

  override fun visitAssignmentDefault(x: Assignment.Default): JsonObject {
    return createAssignmentNode(x, "Assignment.Default")
  }

  override fun visitAssignmentDivision(x: Assignment.Division): JsonObject {
    return createAssignmentNode(x, "Assignment.Division")
  }

  override fun visitAssignmentIfDefined(x: Assignment.IfDefined): JsonObject {
    return createAssignmentNode(x, "Assignment.IfDefined")
  }

  override fun visitAssignmentIntersection(x: Assignment.Intersection): JsonObject {
    return createAssignmentNode(x, "Assignment.Intersection")
  }

  override fun visitAssignmentProduct(x: Assignment.Product): JsonObject {
    return createAssignmentNode(x, "Assignment.Product")
  }

  override fun visitAssignmentSubtraction(x: Assignment.Subtraction): JsonObject {
    return createAssignmentNode(x, "Assignment.Subtraction")
  }

  override fun visitAssocAssociative(x: Assoc.Associative): JsonObject {
    return createAssocNode(x, "Assoc.Associative")
  }

  override fun visitAssocLeft(x: Assoc.Left): JsonObject {
    return createAssocNode(x, "Assoc.Left")
  }

  override fun visitAssocNonAssociative(x: Assoc.NonAssociative): JsonObject {
    return createAssocNode(x, "Assoc.NonAssociative")
  }

  override fun visitAssocRight(x: Assoc.Right): JsonObject {
    return createAssocNode(x, "Assoc.Right")
  }

  override fun visitBackslashLexical(x: Backslash.Lexical): JsonObject {
    return createBackslashNode(x, "Backslash.Lexical")
  }

  override fun visitBasicTypeBag(x: BasicType.Bag): JsonObject {
    return createBasicTypeNode(x, "BasicType.Bag")
  }

  override fun visitBasicTypeBool(x: BasicType.Bool): JsonObject {
    return createBasicTypeNode(x, "BasicType.Bool")
  }

  override fun visitBasicTypeDateTime(x: BasicType.DateTime): JsonObject {
    return createBasicTypeNode(x, "BasicType.DateTime")
  }

  override fun visitBasicTypeInt(x: BasicType.Int): JsonObject {
    return createBasicTypeNode(x, "BasicType.Int")
  }

  override fun visitBasicTypeList(x: BasicType.List): JsonObject {
    return createBasicTypeNode(x, "BasicType.List")
  }

  override fun visitBasicTypeListRelation(x: BasicType.ListRelation): JsonObject {
    return createBasicTypeNode(x, "BasicType.ListRelation")
  }

  override fun visitBasicTypeLoc(x: BasicType.Loc): JsonObject {
    return createBasicTypeNode(x, "BasicType.Loc")
  }

  override fun visitBasicTypeMap(x: BasicType.Map): JsonObject {
    return createBasicTypeNode(x, "BasicType.Map")
  }

  override fun visitBasicTypeNode(x: BasicType.Node): JsonObject {
    return createBasicTypeNode(x, "BasicType.Node")
  }

  override fun visitBasicTypeNum(x: BasicType.Num): JsonObject {
    return createBasicTypeNode(x, "BasicType.Num")
  }

  override fun visitBasicTypeRational(x: BasicType.Rational): JsonObject {
    return createBasicTypeNode(x, "BasicType.Rational")
  }

  override fun visitBasicTypeReal(x: BasicType.Real): JsonObject {
    return createBasicTypeNode(x, "BasicType.Real")
  }

  override fun visitBasicTypeRelation(x: BasicType.Relation): JsonObject {
    return createBasicTypeNode(x, "BasicType.Relation")
  }

  override fun visitBasicTypeSet(x: BasicType.Set): JsonObject {
    return createBasicTypeNode(x, "BasicType.Set")
  }

  override fun visitBasicTypeString(x: BasicType.String): JsonObject {
    return createBasicTypeNode(x, "BasicType.String")
  }

  override fun visitBasicTypeTuple(x: BasicType.Tuple): JsonObject {
    return createBasicTypeNode(x, "BasicType.Tuple")
  }

  override fun visitBasicTypeType(x: BasicType.Type): JsonObject {
    return createBasicTypeNode(x, "BasicType.Type")
  }

  override fun visitBasicTypeValue(x: BasicType.Value): JsonObject {
    return createBasicTypeNode(x, "BasicType.Value")
  }

  override fun visitBasicTypeVoid(x: BasicType.Void): JsonObject {
    return createBasicTypeNode(x, "BasicType.Void")
  }

  override fun visitBodyToplevels(x: Body.Toplevels): JsonObject {
    return createBodyNode(x, "Body.Toplevels")
  }

  override fun visitBooleanLiteralLexical(x: BooleanLiteral.Lexical): JsonObject {
    return createBooleanLiteralNode(x, "BooleanLiteral.Lexical")
  }

  override fun visitBoundDefault(x: Bound.Default): JsonObject {
    return createBoundNode(x, "Bound.Default")
  }

  override fun visitBoundEmpty(x: Bound.Empty): JsonObject {
    return createBoundNode(x, "Bound.Empty")
  }

  override fun visitCaseDefault(x: Case.Default): JsonObject {
    return createCaseNode(x, "Case.Default")
  }

  override fun visitCasePatternWithAction(x: Case.PatternWithAction): JsonObject {
    return createCaseNode(x, "Case.PatternWithAction")
  }

  override fun visitCaseInsensitiveStringConstantLexical(x: CaseInsensitiveStringConstant.Lexical): JsonObject {
    return createCaseInsensitiveStringConstantNode(x, "CaseInsensitiveStringConstant.Lexical")
  }

  override fun visitCatchBinding(x: Catch.Binding): JsonObject {
    return createCatchNode(x, "Catch.Binding")
  }

  override fun visitCatchDefault(x: Catch.Default): JsonObject {
    return createCatchNode(x, "Catch.Default")
  }

  override fun visitCharLexical(x: Char.Lexical): JsonObject {
    return createCharNode(x, "Char.Lexical")
  }

  override fun visitClassBracket(x: Class.Bracket): JsonObject {
    return createClassNode(x, "Class.Bracket")
  }

  override fun visitClassComplement(x: Class.Complement): JsonObject {
    return createClassNode(x, "Class.Complement")
  }

  override fun visitClassDifference(x: Class.Difference): JsonObject {
    return createClassNode(x, "Class.Difference")
  }

  override fun visitClassIntersection(x: Class.Intersection): JsonObject {
    return createClassNode(x, "Class.Intersection")
  }

  override fun visitClassSimpleCharclass(x: Class.SimpleCharclass): JsonObject {
    return createClassNode(x, "Class.SimpleCharclass")
  }

  override fun visitClassUnion(x: Class.Union): JsonObject {
    return createClassNode(x, "Class.Union")
  }

  override fun visitCommandDeclaration(x: Command.Declaration): JsonObject {
    return createCommandNode(x, "Command.Declaration")
  }

  override fun visitCommandExpression(x: Command.Expression): JsonObject {
    return createCommandNode(x, "Command.Expression")
  }

  override fun visitCommandImport(x: Command.Import): JsonObject {
    return createCommandNode(x, "Command.Import")
  }

  override fun visitCommandShell(x: Command.Shell): JsonObject {
    return createCommandNode(x, "Command.Shell")
  }

  override fun visitCommandStatement(x: Command.Statement): JsonObject {
    return createCommandNode(x, "Command.Statement")
  }

  override fun visitCommandsCommandlist(x: Commands.Commandlist): JsonObject {
    return createCommandsNode(x, "Commands.Commandlist")
  }

  override fun visitCommentLexical(x: Comment.Lexical): JsonObject {
    return createCommentNode(x, "Comment.Lexical")
  }

  override fun visitCommonKeywordParametersAbsent(x: CommonKeywordParameters.Absent): JsonObject {
    return createCommonKeywordParametersNode(x, "CommonKeywordParameters.Absent")
  }

  override fun visitCommonKeywordParametersPresent(x: CommonKeywordParameters.Present): JsonObject {
    return createCommonKeywordParametersNode(x, "CommonKeywordParameters.Present")
  }

  override fun visitComprehensionList(x: Comprehension.List): JsonObject {
    return createComprehensionNode(x, "Comprehension.List")
  }

  override fun visitComprehensionMap(x: Comprehension.Map): JsonObject {
    return createComprehensionNode(x, "Comprehension.Map")
  }

  override fun visitComprehensionSet(x: Comprehension.Set): JsonObject {
    return createComprehensionNode(x, "Comprehension.Set")
  }

  override fun visitConcreteLexical(x: Concrete.Lexical): JsonObject {
    return createConcreteNode(x, "Concrete.Lexical")
  }

  override fun visitConcreteHoleOne(x: ConcreteHole.One): JsonObject {
    return createConcreteHoleNode(x, "ConcreteHole.One")
  }

  override fun visitConcretePartLexical(x: ConcretePart.Lexical): JsonObject {
    return createConcretePartNode(x, "ConcretePart.Lexical")
  }

  override fun visitDataTargetEmpty(x: DataTarget.Empty): JsonObject {
    return createDataTargetNode(x, "DataTarget.Empty")
  }

  override fun visitDataTargetLabeled(x: DataTarget.Labeled): JsonObject {
    return createDataTargetNode(x, "DataTarget.Labeled")
  }

  override fun visitDataTypeSelectorSelector(x: DataTypeSelector.Selector): JsonObject {
    return createDataTypeSelectorNode(x, "DataTypeSelector.Selector")
  }

  override fun visitDateAndTimeLexical(x: DateAndTime.Lexical): JsonObject {
    return createDateAndTimeNode(x, "DateAndTime.Lexical")
  }

  override fun visitDatePartLexical(x: DatePart.Lexical): JsonObject {
    return createDatePartNode(x, "DatePart.Lexical")
  }

  override fun visitDateTimeLiteralDateAndTimeLiteral(x: DateTimeLiteral.DateAndTimeLiteral): JsonObject {
    return createDateTimeLiteralNode(x, "DateTimeLiteral.DateAndTimeLiteral")
  }

  override fun visitDateTimeLiteralDateLiteral(x: DateTimeLiteral.DateLiteral): JsonObject {
    return createDateTimeLiteralNode(x, "DateTimeLiteral.DateLiteral")
  }

  override fun visitDateTimeLiteralTimeLiteral(x: DateTimeLiteral.TimeLiteral): JsonObject {
    return createDateTimeLiteralNode(x, "DateTimeLiteral.TimeLiteral")
  }

  override fun visitDecimalIntegerLiteralLexical(x: DecimalIntegerLiteral.Lexical): JsonObject {
    return createDecimalIntegerLiteralNode(x, "DecimalIntegerLiteral.Lexical")
  }

  override fun visitDeclarationAlias(x: Declaration.Alias): JsonObject {
    return createDeclarationNode(x, "Declaration.Alias")
  }

  override fun visitDeclarationAnnotation(x: Declaration.Annotation): JsonObject {
    return createDeclarationNode(x, "Declaration.Annotation")
  }

  override fun visitDeclarationData(x: Declaration.Data): JsonObject {
    return createDeclarationNode(x, "Declaration.Data")
  }

  override fun visitDeclarationDataAbstract(x: Declaration.DataAbstract): JsonObject {
    return createDeclarationNode(x, "Declaration.DataAbstract")
  }

  override fun visitDeclarationFunction(x: Declaration.Function): JsonObject {
    return createDeclarationNode(x, "Declaration.Function")
  }

  override fun visitDeclarationTag(x: Declaration.Tag): JsonObject {
    return createDeclarationNode(x, "Declaration.Tag")
  }

  override fun visitDeclarationVariable(x: Declaration.Variable): JsonObject {
    return createDeclarationNode(x, "Declaration.Variable")
  }

  override fun visitDeclaratorDefault(x: Declarator.Default): JsonObject {
    return createDeclaratorNode(x, "Declarator.Default")
  }

  override fun visitEvalCommandDeclaration(x: EvalCommand.Declaration): JsonObject {
    return createEvalCommandNode(x, "EvalCommand.Declaration")
  }

  override fun visitEvalCommandImport(x: EvalCommand.Import): JsonObject {
    return createEvalCommandNode(x, "EvalCommand.Import")
  }

  override fun visitEvalCommandOutput(x: EvalCommand.Output): JsonObject {
    return createEvalCommandNode(x, "EvalCommand.Output")
  }

  override fun visitEvalCommandStatement(x: EvalCommand.Statement): JsonObject {
    return createEvalCommandNode(x, "EvalCommand.Statement")
  }

  override fun visitExpressionAddition(x: Expression.Addition): JsonObject {
    return createExpressionNode(x, "Expression.Addition")
  }

  override fun visitExpressionAll(x: Expression.All): JsonObject {
    return createExpressionNode(x, "Expression.All")
  }

  override fun visitExpressionAnd(x: Expression.And): JsonObject {
    return createExpressionNode(x, "Expression.And")
  }

  override fun visitExpressionAnti(x: Expression.Anti): JsonObject {
    return createExpressionNode(x, "Expression.Anti")
  }

  override fun visitExpressionAny(x: Expression.Any): JsonObject {
    return createExpressionNode(x, "Expression.Any")
  }

  override fun visitExpressionAppendAfter(x: Expression.AppendAfter): JsonObject {
    return createExpressionNode(x, "Expression.AppendAfter")
  }

  override fun visitExpressionAsType(x: Expression.AsType): JsonObject {
    return createExpressionNode(x, "Expression.AsType")
  }

  override fun visitExpressionBracket(x: Expression.Bracket): JsonObject {
    return createExpressionNode(x, "Expression.Bracket")
  }

  override fun visitExpressionCallOrTree(x: Expression.CallOrTree): JsonObject {
    return createExpressionNode(x, "Expression.CallOrTree")
  }

  override fun visitExpressionClosure(x: Expression.Closure): JsonObject {
    return createExpressionNode(x, "Expression.Closure")
  }

  override fun visitExpressionComposition(x: Expression.Composition): JsonObject {
    return createExpressionNode(x, "Expression.Composition")
  }

  override fun visitExpressionComprehension(x: Expression.Comprehension): JsonObject {
    return createExpressionNode(x, "Expression.Comprehension")
  }

  override fun visitExpressionConcrete(x: Expression.Concrete): JsonObject {
    return createExpressionNode(x, "Expression.Concrete")
  }

  override fun visitExpressionDescendant(x: Expression.Descendant): JsonObject {
    return createExpressionNode(x, "Expression.Descendant")
  }

  override fun visitExpressionDivision(x: Expression.Division): JsonObject {
    return createExpressionNode(x, "Expression.Division")
  }

  override fun visitExpressionEnumerator(x: Expression.Enumerator): JsonObject {
    return createExpressionNode(x, "Expression.Enumerator")
  }

  override fun visitExpressionEquals(x: Expression.Equals): JsonObject {
    return createExpressionNode(x, "Expression.Equals")
  }

  override fun visitExpressionEquivalence(x: Expression.Equivalence): JsonObject {
    return createExpressionNode(x, "Expression.Equivalence")
  }

  override fun visitExpressionFieldAccess(x: Expression.FieldAccess): JsonObject {
    return createExpressionNode(x, "Expression.FieldAccess")
  }

  override fun visitExpressionFieldProject(x: Expression.FieldProject): JsonObject {
    return createExpressionNode(x, "Expression.FieldProject")
  }

  override fun visitExpressionFieldUpdate(x: Expression.FieldUpdate): JsonObject {
    return createExpressionNode(x, "Expression.FieldUpdate")
  }

  override fun visitExpressionGetAnnotation(x: Expression.GetAnnotation): JsonObject {
    return createExpressionNode(x, "Expression.GetAnnotation")
  }

  override fun visitExpressionGreaterThan(x: Expression.GreaterThan): JsonObject {
    return createExpressionNode(x, "Expression.GreaterThan")
  }

  override fun visitExpressionGreaterThanOrEq(x: Expression.GreaterThanOrEq): JsonObject {
    return createExpressionNode(x, "Expression.GreaterThanOrEq")
  }

  override fun visitExpressionHas(x: Expression.Has): JsonObject {
    return createExpressionNode(x, "Expression.Has")
  }

  override fun visitExpressionIfDefinedOtherwise(x: Expression.IfDefinedOtherwise): JsonObject {
    return createExpressionNode(x, "Expression.IfDefinedOtherwise")
  }

  override fun visitExpressionIfThenElse(x: Expression.IfThenElse): JsonObject {
    return createExpressionNode(x, "Expression.IfThenElse")
  }

  override fun visitExpressionImplication(x: Expression.Implication): JsonObject {
    return createExpressionNode(x, "Expression.Implication")
  }

  override fun visitExpressionIn(x: Expression.In): JsonObject {
    return createExpressionNode(x, "Expression.In")
  }

  override fun visitExpressionInsertBefore(x: Expression.InsertBefore): JsonObject {
    return createExpressionNode(x, "Expression.InsertBefore")
  }

  override fun visitExpressionIntersection(x: Expression.Intersection): JsonObject {
    return createExpressionNode(x, "Expression.Intersection")
  }

  override fun visitExpressionIs(x: Expression.Is): JsonObject {
    return createExpressionNode(x, "Expression.Is")
  }

  override fun visitExpressionIsDefined(x: Expression.IsDefined): JsonObject {
    return createExpressionNode(x, "Expression.IsDefined")
  }

  override fun visitExpressionIt(x: Expression.It): JsonObject {
    return createExpressionNode(x, "Expression.It")
  }

  override fun visitExpressionJoin(x: Expression.Join): JsonObject {
    return createExpressionNode(x, "Expression.Join")
  }

  override fun visitExpressionLessThan(x: Expression.LessThan): JsonObject {
    return createExpressionNode(x, "Expression.LessThan")
  }

  override fun visitExpressionLessThanOrEq(x: Expression.LessThanOrEq): JsonObject {
    return createExpressionNode(x, "Expression.LessThanOrEq")
  }

  override fun visitExpressionList(x: Expression.List): JsonObject {
    return createExpressionNode(x, "Expression.List")
  }

  override fun visitExpressionLiteral(x: Expression.Literal): JsonObject {
    return createExpressionNode(x, "Expression.Literal")
  }

  override fun visitExpressionMap(x: Expression.Map): JsonObject {
    return createExpressionNode(x, "Expression.Map")
  }

  override fun visitExpressionMatch(x: Expression.Match): JsonObject {
    return createExpressionNode(x, "Expression.Match")
  }

  override fun visitExpressionModulo(x: Expression.Modulo): JsonObject {
    return createExpressionNode(x, "Expression.Modulo")
  }

  override fun visitExpressionMultiVariable(x: Expression.MultiVariable): JsonObject {
    return createExpressionNode(x, "Expression.MultiVariable")
  }

  override fun visitExpressionNegation(x: Expression.Negation): JsonObject {
    return createExpressionNode(x, "Expression.Negation")
  }

  override fun visitExpressionNegative(x: Expression.Negative): JsonObject {
    return createExpressionNode(x, "Expression.Negative")
  }

  override fun visitExpressionNoMatch(x: Expression.NoMatch): JsonObject {
    return createExpressionNode(x, "Expression.NoMatch")
  }

  override fun visitExpressionNonEmptyBlock(x: Expression.NonEmptyBlock): JsonObject {
    return createExpressionNode(x, "Expression.NonEmptyBlock")
  }

  override fun visitExpressionNonEquals(x: Expression.NonEquals): JsonObject {
    return createExpressionNode(x, "Expression.NonEquals")
  }

  override fun visitExpressionNotIn(x: Expression.NotIn): JsonObject {
    return createExpressionNode(x, "Expression.NotIn")
  }

  override fun visitExpressionOr(x: Expression.Or): JsonObject {
    return createExpressionNode(x, "Expression.Or")
  }

  override fun visitExpressionProduct(x: Expression.Product): JsonObject {
    return createExpressionNode(x, "Expression.Product")
  }

  override fun visitExpressionQualifiedName(x: Expression.QualifiedName): JsonObject {
    return createExpressionNode(x, "Expression.QualifiedName")
  }

  override fun visitExpressionRange(x: Expression.Range): JsonObject {
    return createExpressionNode(x, "Expression.Range")
  }

  override fun visitExpressionReducer(x: Expression.Reducer): JsonObject {
    return createExpressionNode(x, "Expression.Reducer")
  }

  override fun visitExpressionReifiedType(x: Expression.ReifiedType): JsonObject {
    return createExpressionNode(x, "Expression.ReifiedType")
  }

  override fun visitExpressionReifyType(x: Expression.ReifyType): JsonObject {
    return createExpressionNode(x, "Expression.ReifyType")
  }

  override fun visitExpressionRemainder(x: Expression.Remainder): JsonObject {
    return createExpressionNode(x, "Expression.Remainder")
  }

  override fun visitExpressionSet(x: Expression.Set): JsonObject {
    return createExpressionNode(x, "Expression.Set")
  }

  override fun visitExpressionSetAnnotation(x: Expression.SetAnnotation): JsonObject {
    return createExpressionNode(x, "Expression.SetAnnotation")
  }

  override fun visitExpressionSlice(x: Expression.Slice): JsonObject {
    return createExpressionNode(x, "Expression.Slice")
  }

  override fun visitExpressionSliceStep(x: Expression.SliceStep): JsonObject {
    return createExpressionNode(x, "Expression.SliceStep")
  }

  override fun visitExpressionSplice(x: Expression.Splice): JsonObject {
    return createExpressionNode(x, "Expression.Splice")
  }

  override fun visitExpressionSplicePlus(x: Expression.SplicePlus): JsonObject {
    return createExpressionNode(x, "Expression.SplicePlus")
  }

  override fun visitExpressionStepRange(x: Expression.StepRange): JsonObject {
    return createExpressionNode(x, "Expression.StepRange")
  }

  override fun visitExpressionSubscript(x: Expression.Subscript): JsonObject {
    return createExpressionNode(x, "Expression.Subscript")
  }

  override fun visitExpressionSubtraction(x: Expression.Subtraction): JsonObject {
    return createExpressionNode(x, "Expression.Subtraction")
  }

  override fun visitExpressionTransitiveClosure(x: Expression.TransitiveClosure): JsonObject {
    return createExpressionNode(x, "Expression.TransitiveClosure")
  }

  override fun visitExpressionTransitiveReflexiveClosure(x: Expression.TransitiveReflexiveClosure): JsonObject {
    return createExpressionNode(x, "Expression.TransitiveReflexiveClosure")
  }

  override fun visitExpressionTuple(x: Expression.Tuple): JsonObject {
    return createExpressionNode(x, "Expression.Tuple")
  }

  override fun visitExpressionTypedVariable(x: Expression.TypedVariable): JsonObject {
    return createExpressionNode(x, "Expression.TypedVariable")
  }

  override fun visitExpressionTypedVariableBecomes(x: Expression.TypedVariableBecomes): JsonObject {
    return createExpressionNode(x, "Expression.TypedVariableBecomes")
  }

  override fun visitExpressionVariableBecomes(x: Expression.VariableBecomes): JsonObject {
    return createExpressionNode(x, "Expression.VariableBecomes")
  }

  override fun visitExpressionVisit(x: Expression.Visit): JsonObject {
    return createExpressionNode(x, "Expression.Visit")
  }

  override fun visitExpressionVoidClosure(x: Expression.VoidClosure): JsonObject {
    return createExpressionNode(x, "Expression.VoidClosure")
  }

  override fun visitFieldIndex(x: Field.Index): JsonObject {
    return createFieldNode(x, "Field.Index")
  }

  override fun visitFieldName(x: Field.Name): JsonObject {
    return createFieldNode(x, "Field.Name")
  }

  override fun visitFormalsDefault(x: Formals.Default): JsonObject {
    return createFormalsNode(x, "Formals.Default")
  }

  override fun visitFunctionBodyDefault(x: FunctionBody.Default): JsonObject {
    return createFunctionBodyNode(x, "FunctionBody.Default")
  }

  override fun visitFunctionDeclarationAbstract(x: FunctionDeclaration.Abstract): JsonObject {
    return createFunctionDeclarationNode(x, "FunctionDeclaration.Abstract")
  }

  override fun visitFunctionDeclarationConditional(x: FunctionDeclaration.Conditional): JsonObject {
    return createFunctionDeclarationNode(x, "FunctionDeclaration.Conditional")
  }

  override fun visitFunctionDeclarationDefault(x: FunctionDeclaration.Default): JsonObject {
    return createFunctionDeclarationNode(x, "FunctionDeclaration.Default")
  }

  override fun visitFunctionDeclarationExpression(x: FunctionDeclaration.Expression): JsonObject {
    return createFunctionDeclarationNode(x, "FunctionDeclaration.Expression")
  }

  override fun visitFunctionModifierDefault(x: FunctionModifier.Default): JsonObject {
    return createFunctionModifierNode(x, "FunctionModifier.Default")
  }

  override fun visitFunctionModifierJava(x: FunctionModifier.Java): JsonObject {
    return createFunctionModifierNode(x, "FunctionModifier.Java")
  }

  override fun visitFunctionModifierTest(x: FunctionModifier.Test): JsonObject {
    return createFunctionModifierNode(x, "FunctionModifier.Test")
  }

  override fun visitFunctionModifiersModifierlist(x: FunctionModifiers.Modifierlist): JsonObject {
    return createFunctionModifiersNode(x, "FunctionModifiers.Modifierlist")
  }

  override fun visitFunctionTypeTypeArguments(x: FunctionType.TypeArguments): JsonObject {
    return createFunctionTypeNode(x, "FunctionType.TypeArguments")
  }

  override fun visitHeaderDefault(x: Header.Default): JsonObject {
    return createHeaderNode(x, "Header.Default")
  }

  override fun visitHeaderParameters(x: Header.Parameters): JsonObject {
    return createHeaderNode(x, "Header.Parameters")
  }

  override fun visitHexIntegerLiteralLexical(x: HexIntegerLiteral.Lexical): JsonObject {
    return createHexIntegerLiteralNode(x, "HexIntegerLiteral.Lexical")
  }

  override fun visitImportDefault(x: Import.Default): JsonObject {
    return createImportNode(x, "Import.Default")
  }

  override fun visitImportExtend(x: Import.Extend): JsonObject {
    return createImportNode(x, "Import.Extend")
  }

  override fun visitImportExternal(x: Import.External): JsonObject {
    return createImportNode(x, "Import.External")
  }

  override fun visitImportSyntax(x: Import.Syntax): JsonObject {
    return createImportNode(x, "Import.Syntax")
  }

  override fun visitImportedModuleActuals(x: ImportedModule.Actuals): JsonObject {
    return createImportedModuleNode(x, "ImportedModule.Actuals")
  }

  override fun visitImportedModuleActualsRenaming(x: ImportedModule.ActualsRenaming): JsonObject {
    return createImportedModuleNode(x, "ImportedModule.ActualsRenaming")
  }

  override fun visitImportedModuleDefault(x: ImportedModule.Default): JsonObject {
    return createImportedModuleNode(x, "ImportedModule.Default")
  }

  override fun visitImportedModuleRenamings(x: ImportedModule.Renamings): JsonObject {
    return createImportedModuleNode(x, "ImportedModule.Renamings")
  }

  override fun visitIntegerLiteralDecimalIntegerLiteral(x: IntegerLiteral.DecimalIntegerLiteral): JsonObject {
    return createIntegerLiteralNode(x, "IntegerLiteral.DecimalIntegerLiteral")
  }

  override fun visitIntegerLiteralHexIntegerLiteral(x: IntegerLiteral.HexIntegerLiteral): JsonObject {
    return createIntegerLiteralNode(x, "IntegerLiteral.HexIntegerLiteral")
  }

  override fun visitIntegerLiteralOctalIntegerLiteral(x: IntegerLiteral.OctalIntegerLiteral): JsonObject {
    return createIntegerLiteralNode(x, "IntegerLiteral.OctalIntegerLiteral")
  }

  override fun visitJustDateLexical(x: JustDate.Lexical): JsonObject {
    return createJustDateNode(x, "JustDate.Lexical")
  }

  override fun visitJustTimeLexical(x: JustTime.Lexical): JsonObject {
    return createJustTimeNode(x, "JustTime.Lexical")
  }

  override fun visitKeywordArgument_ExpressionDefault(x: KeywordArgument_Expression.Default): JsonObject {
    return createKeywordArgument_ExpressionNode(x, "KeywordArgument_Expression.Default")
  }

  override fun visitKeywordArguments_ExpressionDefault(x: KeywordArguments_Expression.Default): JsonObject {
    return createKeywordArguments_ExpressionNode(x, "KeywordArguments_Expression.Default")
  }

  override fun visitKeywordArguments_ExpressionNone(x: KeywordArguments_Expression.None): JsonObject {
    return createKeywordArguments_ExpressionNode(x, "KeywordArguments_Expression.None")
  }

  override fun visitKeywordFormalDefault(x: KeywordFormal.Default): JsonObject {
    return createKeywordFormalNode(x, "KeywordFormal.Default")
  }

  override fun visitKeywordFormalsDefault(x: KeywordFormals.Default): JsonObject {
    return createKeywordFormalsNode(x, "KeywordFormals.Default")
  }

  override fun visitKeywordFormalsNone(x: KeywordFormals.None): JsonObject {
    return createKeywordFormalsNode(x, "KeywordFormals.None")
  }

  override fun visitKindAlias(x: Kind.Alias): JsonObject {
    return createKindNode(x, "Kind.Alias")
  }

  override fun visitKindAll(x: Kind.All): JsonObject {
    return createKindNode(x, "Kind.All")
  }

  override fun visitKindAnno(x: Kind.Anno): JsonObject {
    return createKindNode(x, "Kind.Anno")
  }

  override fun visitKindData(x: Kind.Data): JsonObject {
    return createKindNode(x, "Kind.Data")
  }

  override fun visitKindFunction(x: Kind.Function): JsonObject {
    return createKindNode(x, "Kind.Function")
  }

  override fun visitKindModule(x: Kind.Module): JsonObject {
    return createKindNode(x, "Kind.Module")
  }

  override fun visitKindTag(x: Kind.Tag): JsonObject {
    return createKindNode(x, "Kind.Tag")
  }

  override fun visitKindVariable(x: Kind.Variable): JsonObject {
    return createKindNode(x, "Kind.Variable")
  }

  override fun visitKindView(x: Kind.View): JsonObject {
    return createKindNode(x, "Kind.View")
  }

  override fun visitLabelDefault(x: Label.Default): JsonObject {
    return createLabelNode(x, "Label.Default")
  }

  override fun visitLabelEmpty(x: Label.Empty): JsonObject {
    return createLabelNode(x, "Label.Empty")
  }

  override fun visitLAYOUTLexical(x: LAYOUT.Lexical): JsonObject {
    return createLAYOUTNode(x, "LAYOUT.Lexical")
  }

  override fun visitLiteralBoolean(x: Literal.Boolean): JsonObject {
    return createLiteralNode(x, "Literal.Boolean")
  }

  override fun visitLiteralDateTime(x: Literal.DateTime): JsonObject {
    return createLiteralNode(x, "Literal.DateTime")
  }

  override fun visitLiteralInteger(x: Literal.Integer): JsonObject {
    return createLiteralNode(x, "Literal.Integer")
  }

  override fun visitLiteralLocation(x: Literal.Location): JsonObject {
    return createLiteralNode(x, "Literal.Location")
  }

  override fun visitLiteralRational(x: Literal.Rational): JsonObject {
    return createLiteralNode(x, "Literal.Rational")
  }

  override fun visitLiteralReal(x: Literal.Real): JsonObject {
    return createLiteralNode(x, "Literal.Real")
  }

  override fun visitLiteralRegExp(x: Literal.RegExp): JsonObject {
    return createLiteralNode(x, "Literal.RegExp")
  }

  override fun visitLiteralString(x: Literal.String): JsonObject {
    return createLiteralNode(x, "Literal.String")
  }

  override fun visitLocalVariableDeclarationDefault(x: LocalVariableDeclaration.Default): JsonObject {
    return createLocalVariableDeclarationNode(x, "LocalVariableDeclaration.Default")
  }

  override fun visitLocalVariableDeclarationDynamic(x: LocalVariableDeclaration.Dynamic): JsonObject {
    return createLocalVariableDeclarationNode(x, "LocalVariableDeclaration.Dynamic")
  }

  override fun visitLocationLiteralDefault(x: LocationLiteral.Default): JsonObject {
    return createLocationLiteralNode(x, "LocationLiteral.Default")
  }

  override fun visitMapping_ExpressionDefault(x: Mapping_Expression.Default): JsonObject {
    return createMapping_ExpressionNode(x, "Mapping_Expression.Default")
  }

  override fun visitMidPathCharsLexical(x: MidPathChars.Lexical): JsonObject {
    return createMidPathCharsNode(x, "MidPathChars.Lexical")
  }

  override fun visitMidProtocolCharsLexical(x: MidProtocolChars.Lexical): JsonObject {
    return createMidProtocolCharsNode(x, "MidProtocolChars.Lexical")
  }

  override fun visitMidStringCharsLexical(x: MidStringChars.Lexical): JsonObject {
    return createMidStringCharsNode(x, "MidStringChars.Lexical")
  }

  override fun visitModuleDefault(x: Module.Default): JsonObject {
    return createModuleNode(x, "Module.Default")
  }

  override fun visitModuleActualsDefault(x: ModuleActuals.Default): JsonObject {
    return createModuleActualsNode(x, "ModuleActuals.Default")
  }

  override fun visitModuleParametersDefault(x: ModuleParameters.Default): JsonObject {
    return createModuleParametersNode(x, "ModuleParameters.Default")
  }

  override fun visitNameLexical(x: Name.Lexical): JsonObject {
    return createNameNode(x, "Name.Lexical")
  }

  override fun visitNamedBackslashLexical(x: NamedBackslash.Lexical): JsonObject {
    return createNamedBackslashNode(x, "NamedBackslash.Lexical")
  }

  override fun visitNamedRegExpLexical(x: NamedRegExp.Lexical): JsonObject {
    return createNamedRegExpNode(x, "NamedRegExp.Lexical")
  }

  override fun visitNonterminalLexical(x: Nonterminal.Lexical): JsonObject {
    return createNonterminalNode(x, "Nonterminal.Lexical")
  }

  override fun visitNonterminalLabelLexical(x: NonterminalLabel.Lexical): JsonObject {
    return createNonterminalLabelNode(x, "NonterminalLabel.Lexical")
  }

  override fun visitOctalIntegerLiteralLexical(x: OctalIntegerLiteral.Lexical): JsonObject {
    return createOctalIntegerLiteralNode(x, "OctalIntegerLiteral.Lexical")
  }

  override fun visitOptionalCommaLexical(x: OptionalComma.Lexical): JsonObject {
    return createOptionalCommaNode(x, "OptionalComma.Lexical")
  }

  override fun visitOptionalExpressionExpression(x: OptionalExpression.Expression): JsonObject {
    return createOptionalExpressionNode(x, "OptionalExpression.Expression")
  }

  override fun visitOptionalExpressionNoExpression(x: OptionalExpression.NoExpression): JsonObject {
    return createOptionalExpressionNode(x, "OptionalExpression.NoExpression")
  }

  override fun visitOutputLexical(x: Output.Lexical): JsonObject {
    return createOutputNode(x, "Output.Lexical")
  }

  override fun visitParametersDefault(x: Parameters.Default): JsonObject {
    return createParametersNode(x, "Parameters.Default")
  }

  override fun visitParametersVarArgs(x: Parameters.VarArgs): JsonObject {
    return createParametersNode(x, "Parameters.VarArgs")
  }

  override fun visitPathCharsLexical(x: PathChars.Lexical): JsonObject {
    return createPathCharsNode(x, "PathChars.Lexical")
  }

  override fun visitPathPartInterpolated(x: PathPart.Interpolated): JsonObject {
    return createPathPartNode(x, "PathPart.Interpolated")
  }

  override fun visitPathPartNonInterpolated(x: PathPart.NonInterpolated): JsonObject {
    return createPathPartNode(x, "PathPart.NonInterpolated")
  }

  override fun visitPathTailMid(x: PathTail.Mid): JsonObject {
    return createPathTailNode(x, "PathTail.Mid")
  }

  override fun visitPathTailPost(x: PathTail.Post): JsonObject {
    return createPathTailNode(x, "PathTail.Post")
  }

  override fun visitPatternWithActionArbitrary(x: PatternWithAction.Arbitrary): JsonObject {
    return createPatternWithActionNode(x, "PatternWithAction.Arbitrary")
  }

  override fun visitPatternWithActionReplacing(x: PatternWithAction.Replacing): JsonObject {
    return createPatternWithActionNode(x, "PatternWithAction.Replacing")
  }

  override fun visitPostPathCharsLexical(x: PostPathChars.Lexical): JsonObject {
    return createPostPathCharsNode(x, "PostPathChars.Lexical")
  }

  override fun visitPostProtocolCharsLexical(x: PostProtocolChars.Lexical): JsonObject {
    return createPostProtocolCharsNode(x, "PostProtocolChars.Lexical")
  }

  override fun visitPostStringCharsLexical(x: PostStringChars.Lexical): JsonObject {
    return createPostStringCharsNode(x, "PostStringChars.Lexical")
  }

  override fun visitPrePathCharsLexical(x: PrePathChars.Lexical): JsonObject {
    return createPrePathCharsNode(x, "PrePathChars.Lexical")
  }

  override fun visitPreProtocolCharsLexical(x: PreProtocolChars.Lexical): JsonObject {
    return createPreProtocolCharsNode(x, "PreProtocolChars.Lexical")
  }

  override fun visitPreStringCharsLexical(x: PreStringChars.Lexical): JsonObject {
    return createPreStringCharsNode(x, "PreStringChars.Lexical")
  }

  override fun visitProdAll(x: Prod.All): JsonObject {
    return createProdNode(x, "Prod.All")
  }

  override fun visitProdAssociativityGroup(x: Prod.AssociativityGroup): JsonObject {
    return createProdNode(x, "Prod.AssociativityGroup")
  }

  override fun visitProdFirst(x: Prod.First): JsonObject {
    return createProdNode(x, "Prod.First")
  }

  override fun visitProdLabeled(x: Prod.Labeled): JsonObject {
    return createProdNode(x, "Prod.Labeled")
  }

  override fun visitProdReference(x: Prod.Reference): JsonObject {
    return createProdNode(x, "Prod.Reference")
  }

  override fun visitProdUnlabeled(x: Prod.Unlabeled): JsonObject {
    return createProdNode(x, "Prod.Unlabeled")
  }

  override fun visitProdModifierAssociativity(x: ProdModifier.Associativity): JsonObject {
    return createProdModifierNode(x, "ProdModifier.Associativity")
  }

  override fun visitProdModifierBracket(x: ProdModifier.Bracket): JsonObject {
    return createProdModifierNode(x, "ProdModifier.Bracket")
  }

  override fun visitProdModifierTag(x: ProdModifier.Tag): JsonObject {
    return createProdModifierNode(x, "ProdModifier.Tag")
  }

  override fun visitProtocolCharsLexical(x: ProtocolChars.Lexical): JsonObject {
    return createProtocolCharsNode(x, "ProtocolChars.Lexical")
  }

  override fun visitProtocolPartInterpolated(x: ProtocolPart.Interpolated): JsonObject {
    return createProtocolPartNode(x, "ProtocolPart.Interpolated")
  }

  override fun visitProtocolPartNonInterpolated(x: ProtocolPart.NonInterpolated): JsonObject {
    return createProtocolPartNode(x, "ProtocolPart.NonInterpolated")
  }

  override fun visitProtocolTailMid(x: ProtocolTail.Mid): JsonObject {
    return createProtocolTailNode(x, "ProtocolTail.Mid")
  }

  override fun visitProtocolTailPost(x: ProtocolTail.Post): JsonObject {
    return createProtocolTailNode(x, "ProtocolTail.Post")
  }

  override fun visitQualifiedNameDefault(x: QualifiedName.Default): JsonObject {
    return createQualifiedNameNode(x, "QualifiedName.Default")
  }

  override fun visitRangeCharacter(x: Range.Character): JsonObject {
    return createRangeNode(x, "Range.Character")
  }

  override fun visitRangeFromTo(x: Range.FromTo): JsonObject {
    return createRangeNode(x, "Range.FromTo")
  }

  override fun visitRationalLiteralLexical(x: RationalLiteral.Lexical): JsonObject {
    return createRationalLiteralNode(x, "RationalLiteral.Lexical")
  }

  override fun visitRealLiteralLexical(x: RealLiteral.Lexical): JsonObject {
    return createRealLiteralNode(x, "RealLiteral.Lexical")
  }

  override fun visitRegExpLexical(x: RegExp.Lexical): JsonObject {
    return createRegExpNode(x, "RegExp.Lexical")
  }

  override fun visitRegExpLiteralLexical(x: RegExpLiteral.Lexical): JsonObject {
    return createRegExpLiteralNode(x, "RegExpLiteral.Lexical")
  }

  override fun visitRegExpModifierLexical(x: RegExpModifier.Lexical): JsonObject {
    return createRegExpModifierNode(x, "RegExpModifier.Lexical")
  }

  override fun visitRenamingDefault(x: Renaming.Default): JsonObject {
    return createRenamingNode(x, "Renaming.Default")
  }

  override fun visitRenamingsDefault(x: Renamings.Default): JsonObject {
    return createRenamingsNode(x, "Renamings.Default")
  }

  override fun visitReplacementConditional(x: Replacement.Conditional): JsonObject {
    return createReplacementNode(x, "Replacement.Conditional")
  }

  override fun visitReplacementUnconditional(x: Replacement.Unconditional): JsonObject {
    return createReplacementNode(x, "Replacement.Unconditional")
  }

  override fun visitShellCommandClear(x: ShellCommand.Clear): JsonObject {
    return createShellCommandNode(x, "ShellCommand.Clear")
  }

  override fun visitShellCommandEdit(x: ShellCommand.Edit): JsonObject {
    return createShellCommandNode(x, "ShellCommand.Edit")
  }

  override fun visitShellCommandHelp(x: ShellCommand.Help): JsonObject {
    return createShellCommandNode(x, "ShellCommand.Help")
  }

  override fun visitShellCommandHistory(x: ShellCommand.History): JsonObject {
    return createShellCommandNode(x, "ShellCommand.History")
  }

  override fun visitShellCommandListDeclarations(x: ShellCommand.ListDeclarations): JsonObject {
    return createShellCommandNode(x, "ShellCommand.ListDeclarations")
  }

  override fun visitShellCommandListModules(x: ShellCommand.ListModules): JsonObject {
    return createShellCommandNode(x, "ShellCommand.ListModules")
  }

  override fun visitShellCommandQuit(x: ShellCommand.Quit): JsonObject {
    return createShellCommandNode(x, "ShellCommand.Quit")
  }

  override fun visitShellCommandSetOption(x: ShellCommand.SetOption): JsonObject {
    return createShellCommandNode(x, "ShellCommand.SetOption")
  }

  override fun visitShellCommandTest(x: ShellCommand.Test): JsonObject {
    return createShellCommandNode(x, "ShellCommand.Test")
  }

  override fun visitShellCommandUndeclare(x: ShellCommand.Undeclare): JsonObject {
    return createShellCommandNode(x, "ShellCommand.Undeclare")
  }

  override fun visitShellCommandUnimport(x: ShellCommand.Unimport): JsonObject {
    return createShellCommandNode(x, "ShellCommand.Unimport")
  }

  override fun visitSignatureNoThrows(x: Signature.NoThrows): JsonObject {
    return createSignatureNode(x, "Signature.NoThrows")
  }

  override fun visitSignatureWithThrows(x: Signature.WithThrows): JsonObject {
    return createSignatureNode(x, "Signature.WithThrows")
  }

  override fun visitStartAbsent(x: Start.Absent): JsonObject {
    return createStartNode(x, "Start.Absent")
  }

  override fun visitStartPresent(x: Start.Present): JsonObject {
    return createStartNode(x, "Start.Present")
  }

  override fun visitStatementAppend(x: Statement.Append): JsonObject {
    return createStatementNode(x, "Statement.Append")
  }

  override fun visitStatementAssert(x: Statement.Assert): JsonObject {
    return createStatementNode(x, "Statement.Assert")
  }

  override fun visitStatementAssertWithMessage(x: Statement.AssertWithMessage): JsonObject {
    return createStatementNode(x, "Statement.AssertWithMessage")
  }

  override fun visitStatementAssignment(x: Statement.Assignment): JsonObject {
    return createStatementNode(x, "Statement.Assignment")
  }

  override fun visitStatementBreak(x: Statement.Break): JsonObject {
    return createStatementNode(x, "Statement.Break")
  }

  override fun visitStatementContinue(x: Statement.Continue): JsonObject {
    return createStatementNode(x, "Statement.Continue")
  }

  override fun visitStatementDoWhile(x: Statement.DoWhile): JsonObject {
    return createStatementNode(x, "Statement.DoWhile")
  }

  override fun visitStatementEmptyStatement(x: Statement.EmptyStatement): JsonObject {
    return createStatementNode(x, "Statement.EmptyStatement")
  }

  override fun visitStatementExpression(x: Statement.Expression): JsonObject {
    return createStatementNode(x, "Statement.Expression")
  }

  override fun visitStatementFail(x: Statement.Fail): JsonObject {
    return createStatementNode(x, "Statement.Fail")
  }

  override fun visitStatementFilter(x: Statement.Filter): JsonObject {
    return createStatementNode(x, "Statement.Filter")
  }

  override fun visitStatementFor(x: Statement.For): JsonObject {
    return createStatementNode(x, "Statement.For")
  }

  override fun visitStatementFunctionDeclaration(x: Statement.FunctionDeclaration): JsonObject {
    return createStatementNode(x, "Statement.FunctionDeclaration")
  }

  override fun visitStatementGlobalDirective(x: Statement.GlobalDirective): JsonObject {
    return createStatementNode(x, "Statement.GlobalDirective")
  }

  override fun visitStatementIfThen(x: Statement.IfThen): JsonObject {
    return createStatementNode(x, "Statement.IfThen")
  }

  override fun visitStatementIfThenElse(x: Statement.IfThenElse): JsonObject {
    return createStatementNode(x, "Statement.IfThenElse")
  }

  override fun visitStatementInsert(x: Statement.Insert): JsonObject {
    return createStatementNode(x, "Statement.Insert")
  }

  override fun visitStatementNonEmptyBlock(x: Statement.NonEmptyBlock): JsonObject {
    return createStatementNode(x, "Statement.NonEmptyBlock")
  }

  override fun visitStatementReturn(x: Statement.Return): JsonObject {
    return createStatementNode(x, "Statement.Return")
  }

  override fun visitStatementSolve(x: Statement.Solve): JsonObject {
    return createStatementNode(x, "Statement.Solve")
  }

  override fun visitStatementSwitch(x: Statement.Switch): JsonObject {
    return createStatementNode(x, "Statement.Switch")
  }

  override fun visitStatementThrow(x: Statement.Throw): JsonObject {
    return createStatementNode(x, "Statement.Throw")
  }

  override fun visitStatementTry(x: Statement.Try): JsonObject {
    return createStatementNode(x, "Statement.Try")
  }

  override fun visitStatementTryFinally(x: Statement.TryFinally): JsonObject {
    return createStatementNode(x, "Statement.TryFinally")
  }

  override fun visitStatementVariableDeclaration(x: Statement.VariableDeclaration): JsonObject {
    return createStatementNode(x, "Statement.VariableDeclaration")
  }

  override fun visitStatementVisit(x: Statement.Visit): JsonObject {
    return createStatementNode(x, "Statement.Visit")
  }

  override fun visitStatementWhile(x: Statement.While): JsonObject {
    return createStatementNode(x, "Statement.While")
  }

  override fun visitStrategyBottomUp(x: Strategy.BottomUp): JsonObject {
    return createStrategyNode(x, "Strategy.BottomUp")
  }

  override fun visitStrategyBottomUpBreak(x: Strategy.BottomUpBreak): JsonObject {
    return createStrategyNode(x, "Strategy.BottomUpBreak")
  }

  override fun visitStrategyInnermost(x: Strategy.Innermost): JsonObject {
    return createStrategyNode(x, "Strategy.Innermost")
  }

  override fun visitStrategyOutermost(x: Strategy.Outermost): JsonObject {
    return createStrategyNode(x, "Strategy.Outermost")
  }

  override fun visitStrategyTopDown(x: Strategy.TopDown): JsonObject {
    return createStrategyNode(x, "Strategy.TopDown")
  }

  override fun visitStrategyTopDownBreak(x: Strategy.TopDownBreak): JsonObject {
    return createStrategyNode(x, "Strategy.TopDownBreak")
  }

  override fun visitStringCharacterLexical(x: StringCharacter.Lexical): JsonObject {
    return createStringCharacterNode(x, "StringCharacter.Lexical")
  }

  override fun visitStringConstantLexical(x: StringConstant.Lexical): JsonObject {
    return createStringConstantNode(x, "StringConstant.Lexical")
  }

  override fun visitStringLiteralInterpolated(x: StringLiteral.Interpolated): JsonObject {
    return createStringLiteralNode(x, "StringLiteral.Interpolated")
  }

  override fun visitStringLiteralNonInterpolated(x: StringLiteral.NonInterpolated): JsonObject {
    return createStringLiteralNode(x, "StringLiteral.NonInterpolated")
  }

  override fun visitStringLiteralTemplate(x: StringLiteral.Template): JsonObject {
    return createStringLiteralNode(x, "StringLiteral.Template")
  }

  override fun visitStringMiddleInterpolated(x: StringMiddle.Interpolated): JsonObject {
    return createStringMiddleNode(x, "StringMiddle.Interpolated")
  }

  override fun visitStringMiddleMid(x: StringMiddle.Mid): JsonObject {
    return createStringMiddleNode(x, "StringMiddle.Mid")
  }

  override fun visitStringMiddleTemplate(x: StringMiddle.Template): JsonObject {
    return createStringMiddleNode(x, "StringMiddle.Template")
  }

  override fun visitStringTailMidInterpolated(x: StringTail.MidInterpolated): JsonObject {
    return createStringTailNode(x, "StringTail.MidInterpolated")
  }

  override fun visitStringTailMidTemplate(x: StringTail.MidTemplate): JsonObject {
    return createStringTailNode(x, "StringTail.MidTemplate")
  }

  override fun visitStringTailPost(x: StringTail.Post): JsonObject {
    return createStringTailNode(x, "StringTail.Post")
  }

  override fun visitStringTemplateDoWhile(x: StringTemplate.DoWhile): JsonObject {
    return createStringTemplateNode(x, "StringTemplate.DoWhile")
  }

  override fun visitStringTemplateFor(x: StringTemplate.For): JsonObject {
    return createStringTemplateNode(x, "StringTemplate.For")
  }

  override fun visitStringTemplateIfThen(x: StringTemplate.IfThen): JsonObject {
    return createStringTemplateNode(x, "StringTemplate.IfThen")
  }

  override fun visitStringTemplateIfThenElse(x: StringTemplate.IfThenElse): JsonObject {
    return createStringTemplateNode(x, "StringTemplate.IfThenElse")
  }

  override fun visitStringTemplateWhile(x: StringTemplate.While): JsonObject {
    return createStringTemplateNode(x, "StringTemplate.While")
  }

  override fun visitStructuredTypeDefault(x: StructuredType.Default): JsonObject {
    return createStructuredTypeNode(x, "StructuredType.Default")
  }

  override fun visitSymAlternative(x: Sym.Alternative): JsonObject {
    return createSymNode(x, "Sym.Alternative")
  }

  override fun visitSymCaseInsensitiveLiteral(x: Sym.CaseInsensitiveLiteral): JsonObject {
    return createSymNode(x, "Sym.CaseInsensitiveLiteral")
  }

  override fun visitSymCharacterClass(x: Sym.CharacterClass): JsonObject {
    return createSymNode(x, "Sym.CharacterClass")
  }

  override fun visitSymColumn(x: Sym.Column): JsonObject {
    return createSymNode(x, "Sym.Column")
  }

  override fun visitSymEmpty(x: Sym.Empty): JsonObject {
    return createSymNode(x, "Sym.Empty")
  }

  override fun visitSymEndOfLine(x: Sym.EndOfLine): JsonObject {
    return createSymNode(x, "Sym.EndOfLine")
  }

  override fun visitSymExcept(x: Sym.Except): JsonObject {
    return createSymNode(x, "Sym.Except")
  }

  override fun visitSymFollow(x: Sym.Follow): JsonObject {
    return createSymNode(x, "Sym.Follow")
  }

  override fun visitSymIter(x: Sym.Iter): JsonObject {
    return createSymNode(x, "Sym.Iter")
  }

  override fun visitSymIterSep(x: Sym.IterSep): JsonObject {
    return createSymNode(x, "Sym.IterSep")
  }

  override fun visitSymIterStar(x: Sym.IterStar): JsonObject {
    return createSymNode(x, "Sym.IterStar")
  }

  override fun visitSymIterStarSep(x: Sym.IterStarSep): JsonObject {
    return createSymNode(x, "Sym.IterStarSep")
  }

  override fun visitSymLabeled(x: Sym.Labeled): JsonObject {
    return createSymNode(x, "Sym.Labeled")
  }

  override fun visitSymLiteral(x: Sym.Literal): JsonObject {
    return createSymNode(x, "Sym.Literal")
  }

  override fun visitSymNonterminal(x: Sym.Nonterminal): JsonObject {
    return createSymNode(x, "Sym.Nonterminal")
  }

  override fun visitSymNotFollow(x: Sym.NotFollow): JsonObject {
    return createSymNode(x, "Sym.NotFollow")
  }

  override fun visitSymNotPrecede(x: Sym.NotPrecede): JsonObject {
    return createSymNode(x, "Sym.NotPrecede")
  }

  override fun visitSymOptional(x: Sym.Optional): JsonObject {
    return createSymNode(x, "Sym.Optional")
  }

  override fun visitSymParameter(x: Sym.Parameter): JsonObject {
    return createSymNode(x, "Sym.Parameter")
  }

  override fun visitSymParametrized(x: Sym.Parametrized): JsonObject {
    return createSymNode(x, "Sym.Parametrized")
  }

  override fun visitSymPrecede(x: Sym.Precede): JsonObject {
    return createSymNode(x, "Sym.Precede")
  }

  override fun visitSymSequence(x: Sym.Sequence): JsonObject {
    return createSymNode(x, "Sym.Sequence")
  }

  override fun visitSymStart(x: Sym.Start): JsonObject {
    return createSymNode(x, "Sym.Start")
  }

  override fun visitSymStartOfLine(x: Sym.StartOfLine): JsonObject {
    return createSymNode(x, "Sym.StartOfLine")
  }

  override fun visitSymUnequal(x: Sym.Unequal): JsonObject {
    return createSymNode(x, "Sym.Unequal")
  }

  override fun visitSyntaxDefinitionKeyword(x: SyntaxDefinition.Keyword): JsonObject {
    return createSyntaxDefinitionNode(x, "SyntaxDefinition.Keyword")
  }

  override fun visitSyntaxDefinitionLanguage(x: SyntaxDefinition.Language): JsonObject {
    return createSyntaxDefinitionNode(x, "SyntaxDefinition.Language")
  }

  override fun visitSyntaxDefinitionLayout(x: SyntaxDefinition.Layout): JsonObject {
    return createSyntaxDefinitionNode(x, "SyntaxDefinition.Layout")
  }

  override fun visitSyntaxDefinitionLexical(x: SyntaxDefinition.Lexical): JsonObject {
    return createSyntaxDefinitionNode(x, "SyntaxDefinition.Lexical")
  }

  override fun visitTagDefault(x: Tag.Default): JsonObject {
    return createTagNode(x, "Tag.Default")
  }

  override fun visitTagEmpty(x: Tag.Empty): JsonObject {
    return createTagNode(x, "Tag.Empty")
  }

  override fun visitTagExpression(x: Tag.Expression): JsonObject {
    return createTagNode(x, "Tag.Expression")
  }

  override fun visitTagsDefault(x: Tags.Default): JsonObject {
    return createTagsNode(x, "Tags.Default")
  }

  override fun visitTagStringLexical(x: TagString.Lexical): JsonObject {
    return createTagStringNode(x, "TagString.Lexical")
  }

  override fun visitTargetEmpty(x: Target.Empty): JsonObject {
    return createTargetNode(x, "Target.Empty")
  }

  override fun visitTargetLabeled(x: Target.Labeled): JsonObject {
    return createTargetNode(x, "Target.Labeled")
  }

  override fun visitTimePartNoTZLexical(x: TimePartNoTZ.Lexical): JsonObject {
    return createTimePartNoTZNode(x, "TimePartNoTZ.Lexical")
  }

  override fun visitTimeZonePartLexical(x: TimeZonePart.Lexical): JsonObject {
    return createTimeZonePartNode(x, "TimeZonePart.Lexical")
  }

  override fun visitToplevelGivenVisibility(x: Toplevel.GivenVisibility): JsonObject {
    return createToplevelNode(x, "Toplevel.GivenVisibility")
  }

  override fun visitTypeBasic(x: Type.Basic): JsonObject {
    return createTypeNode(x, "Type.Basic")
  }

  override fun visitTypeBracket(x: Type.Bracket): JsonObject {
    return createTypeNode(x, "Type.Bracket")
  }

  override fun visitTypeFunction(x: Type.Function): JsonObject {
    return createTypeNode(x, "Type.Function")
  }

  override fun visitTypeSelector(x: Type.Selector): JsonObject {
    return createTypeNode(x, "Type.Selector")
  }

  override fun visitTypeStructured(x: Type.Structured): JsonObject {
    return createTypeNode(x, "Type.Structured")
  }

  override fun visitTypeSymbol(x: Type.Symbol): JsonObject {
    return createTypeNode(x, "Type.Symbol")
  }

  override fun visitTypeUser(x: Type.User): JsonObject {
    return createTypeNode(x, "Type.User")
  }

  override fun visitTypeVariable(x: Type.Variable): JsonObject {
    return createTypeNode(x, "Type.Variable")
  }

  override fun visitTypeArgDefault(x: TypeArg.Default): JsonObject {
    return createTypeArgNode(x, "TypeArg.Default")
  }

  override fun visitTypeArgNamed(x: TypeArg.Named): JsonObject {
    return createTypeArgNode(x, "TypeArg.Named")
  }

  override fun visitTypeVarBounded(x: TypeVar.Bounded): JsonObject {
    return createTypeVarNode(x, "TypeVar.Bounded")
  }

  override fun visitTypeVarFree(x: TypeVar.Free): JsonObject {
    return createTypeVarNode(x, "TypeVar.Free")
  }

  override fun visitUnicodeEscapeLexical(x: UnicodeEscape.Lexical): JsonObject {
    return createUnicodeEscapeNode(x, "UnicodeEscape.Lexical")
  }

  override fun visitURLCharsLexical(x: URLChars.Lexical): JsonObject {
    return createURLCharsNode(x, "URLChars.Lexical")
  }

  override fun visitUserTypeName(x: UserType.Name): JsonObject {
    return createUserTypeNode(x, "UserType.Name")
  }

  override fun visitUserTypeParametric(x: UserType.Parametric): JsonObject {
    return createUserTypeNode(x, "UserType.Parametric")
  }

  override fun visitVariableInitialized(x: Variable.Initialized): JsonObject {
    return createVariableNode(x, "Variable.Initialized")
  }

  override fun visitVariableUnInitialized(x: Variable.UnInitialized): JsonObject {
    return createVariableNode(x, "Variable.UnInitialized")
  }

  override fun visitVariantNAryConstructor(x: Variant.NAryConstructor): JsonObject {
    return createVariantNode(x, "Variant.NAryConstructor")
  }

  override fun visitVisibilityDefault(x: Visibility.Default): JsonObject {
    return createVisibilityNode(x, "Visibility.Default")
  }

  override fun visitVisibilityPrivate(x: Visibility.Private): JsonObject {
    return createVisibilityNode(x, "Visibility.Private")
  }

  override fun visitVisibilityPublic(x: Visibility.Public): JsonObject {
    return createVisibilityNode(x, "Visibility.Public")
  }

  override fun visitVisitDefaultStrategy(x: Visit.DefaultStrategy): JsonObject {
    return createVisitNode(x, "Visit.DefaultStrategy")
  }

  override fun visitVisitGivenStrategy(x: Visit.GivenStrategy): JsonObject {
    return createVisitNode(x, "Visit.GivenStrategy")
  }

  private fun createAssignableNode(x: Assignable, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasArguments()) content["arguments"] = x.arguments.accept(this)
    if (x.hasElements()) content["elements"] = x.elements.accept(this)
    if (x.hasArg()) content["arg"] = x.arg.accept(this)
    if (x.hasReceiver()) content["receiver"] = x.receiver.accept(this)
    if (x.hasDefaultExpression()) content["defaultExpression"] = x.defaultExpression.accept(this)
    if (x.hasSecond()) content["second"] = x.second.accept(this)
    if (x.hasSubscript()) content["subscript"] = x.subscript.accept(this)
    if (x.hasAnnotation()) content["annotation"] = x.annotation.accept(this)
    if (x.hasField()) content["field"] = x.field.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)
    if (x.hasOptFirst()) content["optFirst"] = x.optFirst.accept(this)
    if (x.hasOptLast()) content["optLast"] = x.optLast.accept(this)
    if (x.hasQualifiedName()) content["qualifiedName"] = x.qualifiedName.accept(this)

    return createNode(x, type, content)
  }

  private fun createAssignmentNode(x: Assignment, type: String): JsonObject {
    return createNode(x, type, jsonObject())
  }

  private fun createAssocNode(x: Assoc, type: String): JsonObject {
    return createNode(x, type, jsonObject())
  }

  private fun createBackslashNode(x: Backslash, type: String): JsonObject {
    val content = jsonObject()

    if (x is Backslash.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createBasicTypeNode(x: BasicType, type: String): JsonObject {
    return createNode(x, type, jsonObject())
  }

  private fun createBodyNode(x: Body, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasToplevels()) content["toplevels"] = x.toplevels.accept(this)

    return createNode(x, type, content)
  }

  private fun createBooleanLiteralNode(x: BooleanLiteral, type: String): JsonObject {
    val content = jsonObject()

    if (x is BooleanLiteral.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createBoundNode(x: Bound, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExpression()) content["expression"] = x.expression.accept(this)

    return createNode(x, type, content)
  }

  private fun createCaseNode(x: Case, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasPatternWithAction()) content["patternWithAction"] = x.patternWithAction.accept(this)
    if (x.hasStatement()) content["statement"] = x.statement.accept(this)

    return createNode(x, type, content)
  }

  private fun createCaseInsensitiveStringConstantNode(x: CaseInsensitiveStringConstant, type: String): JsonObject {
    val content = jsonObject()

    if (x is CaseInsensitiveStringConstant.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createCatchNode(x: Catch, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasPattern()) content["pattern"] = x.pattern.accept(this)
    if (x.hasBody()) content["body"] = x.body.accept(this)

    return createNode(x, type, content)
  }

  private fun createCharNode(x: Char, type: String): JsonObject {
    val content = jsonObject()

    if (x is Char.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createClassNode(x: Class, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasRanges()) content["ranges"] = x.ranges.accept(this)
    if (x.hasCharClass()) content["charClass"] = x.charClass.accept(this)
    if (x.hasLhs()) content["lhs"] = x.lhs.accept(this)
    if (x.hasRhs()) content["rhs"] = x.rhs.accept(this)

    return createNode(x, type, content)
  }

  private fun createCommandNode(x: Command, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasDeclaration()) content["declaration"] = x.declaration.accept(this)
    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasImported()) content["imported"] = x.imported.accept(this)
    if (x.hasCommand()) content["command"] = x.command.accept(this)
    if (x.hasStatement()) content["statement"] = x.statement.accept(this)

    return createNode(x, type, content)
  }

  private fun createCommandsNode(x: Commands, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasCommands()) content["commands"] = x.commands.accept(this)

    return createNode(x, type, content)
  }

  private fun createCommentNode(x: Comment, type: String): JsonObject {
    val content = jsonObject()

    if (x is Comment.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createCommonKeywordParametersNode(x: CommonKeywordParameters, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasKeywordFormalList()) content["keywordFormalList"] = x.keywordFormalList.accept(this)

    return createNode(x, type, content)
  }

  private fun createComprehensionNode(x: Comprehension, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasGenerators()) content["generators"] = x.generators.accept(this)
    if (x.hasResults()) content["results"] = x.results.accept(this)
    if (x.hasFrom()) content["from"] = x.from.accept(this)
    if (x.hasTo()) content["to"] = x.to.accept(this)

    return createNode(x, type, content)
  }

  private fun createConcreteNode(x: Concrete, type: String): JsonObject {
    val content = jsonObject()

    if (x is Concrete.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createConcreteHoleNode(x: ConcreteHole, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasName()) content["name"] = x.name.accept(this)
    if (x.hasSymbol()) content["symbol"] = x.symbol.accept(this)

    return createNode(x, type, content)
  }

  private fun createConcretePartNode(x: ConcretePart, type: String): JsonObject {
    val content = jsonObject()

    if (x is ConcretePart.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createDataTargetNode(x: DataTarget, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasLabel()) content["label"] = x.label.accept(this)

    return createNode(x, type, content)
  }

  private fun createDataTypeSelectorNode(x: DataTypeSelector, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasProduction()) content["production"] = x.production.accept(this)
    if (x.hasSort()) content["sort"] = x.sort.accept(this)

    return createNode(x, type, content)
  }

  private fun createDateAndTimeNode(x: DateAndTime, type: String): JsonObject {
    val content = jsonObject()

    if (x is DateAndTime.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createDatePartNode(x: DatePart, type: String): JsonObject {
    val content = jsonObject()

    if (x is DatePart.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createDateTimeLiteralNode(x: DateTimeLiteral, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasDateAndTime()) content["dateAndTime"] = x.dateAndTime.accept(this)
    if (x.hasDate()) content["date"] = x.date.accept(this)
    if (x.hasTime()) content["time"] = x.time.accept(this)

    return createNode(x, type, content)
  }

  private fun createDecimalIntegerLiteralNode(x: DecimalIntegerLiteral, type: String): JsonObject {
    val content = jsonObject()

    if (x is DecimalIntegerLiteral.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createDeclarationNode(x: Declaration, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasTypes()) content["types"] = x.types.accept(this)
    if (x.hasVariables()) content["variables"] = x.variables.accept(this)
    if (x.hasVariants()) content["variants"] = x.variants.accept(this)
    if (x.hasCommonKeywordParameters()) content["commonKeywordParameters"] = x.commonKeywordParameters.accept(this)
    if (x.hasFunctionDeclaration()) content["functionDeclaration"] = x.functionDeclaration.accept(this)
    if (x.hasKind()) content["kind"] = x.kind.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)
    if (x.hasTags()) content["tags"] = x.tags.accept(this)
    if (x.hasAnnoType()) content["annoType"] = x.annoType.accept(this)
    if (x.hasBase()) content["base"] = x.base.accept(this)
    if (x.hasOnType()) content["onType"] = x.onType.accept(this)
    if (x.hasType()) content["type"] = x.type.accept(this)
    if (x.hasUser()) content["user"] = x.user.accept(this)
    if (x.hasVisibility()) content["visibility"] = x.visibility.accept(this)

    return createNode(x, type, content)
  }

  private fun createDeclaratorNode(x: Declarator, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasVariables()) content["variables"] = x.variables.accept(this)
    if (x.hasType()) content["type"] = x.type.accept(this)

    return createNode(x, type, content)
  }

  private fun createEvalCommandNode(x: EvalCommand, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasDeclaration()) content["declaration"] = x.declaration.accept(this)
    if (x.hasImported()) content["imported"] = x.imported.accept(this)
    if (x.hasStatement()) content["statement"] = x.statement.accept(this)

    return createNode(x, type, content)
  }

  private fun createExpressionNode(x: Expression, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasArguments()) content["arguments"] = x.arguments.accept(this)
    if (x.hasElements()) content["elements"] = x.elements.accept(this)
    if (x.hasElements0()) content["elements0"] = x.elements0.accept(this)
    if (x.hasGenerators()) content["generators"] = x.generators.accept(this)
    if (x.hasSubscripts()) content["subscripts"] = x.subscripts.accept(this)
    if (x.hasFields()) content["fields"] = x.fields.accept(this)
    if (x.hasMappings()) content["mappings"] = x.mappings.accept(this)
    if (x.hasStatements()) content["statements"] = x.statements.accept(this)
    if (x.hasStatements0()) content["statements0"] = x.statements0.accept(this)
    if (x.hasComprehension()) content["comprehension"] = x.comprehension.accept(this)
    if (x.hasConcrete()) content["concrete"] = x.concrete.accept(this)
    if (x.hasArgument()) content["argument"] = x.argument.accept(this)
    if (x.hasCondition()) content["condition"] = x.condition.accept(this)
    if (x.hasDefinitions()) content["definitions"] = x.definitions.accept(this)
    if (x.hasElseExp()) content["elseExp"] = x.elseExp.accept(this)
    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasFirst()) content["first"] = x.first.accept(this)
    if (x.hasInit()) content["init"] = x.init.accept(this)
    if (x.hasLast()) content["last"] = x.last.accept(this)
    if (x.hasLhs()) content["lhs"] = x.lhs.accept(this)
    if (x.hasPattern()) content["pattern"] = x.pattern.accept(this)
    if (x.hasReplacement()) content["replacement"] = x.replacement.accept(this)
    if (x.hasResult()) content["result"] = x.result.accept(this)
    if (x.hasRhs()) content["rhs"] = x.rhs.accept(this)
    if (x.hasSecond()) content["second"] = x.second.accept(this)
    if (x.hasSymbol()) content["symbol"] = x.symbol.accept(this)
    if (x.hasThenExp()) content["thenExp"] = x.thenExp.accept(this)
    if (x.hasValue()) content["value"] = x.value.accept(this)
    if (x.hasKeywordArguments()) content["keywordArguments"] = x.keywordArguments.accept(this)
    if (x.hasLabel()) content["label"] = x.label.accept(this)
    if (x.hasLiteral()) content["literal"] = x.literal.accept(this)
    if (x.hasFields()) content["field"] = x.field.accept(this)
    if (x.hasKey()) content["key"] = x.key.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)
    if (x.hasOptFirst()) content["optFirst"] = x.optFirst.accept(this)
    if (x.hasOptLast()) content["optLast"] = x.optLast.accept(this)
    if (x.hasParameters()) content["parameters"] = x.parameters.accept(this)
    if (x.hasQualifiedName()) content["qualifiedName"] = x.qualifiedName.accept(this)
    if (x.hasType()) content["type"] = x.type.accept(this)
    if (x.hasVisit()) content["visit"] = x.visit.accept(this)

    return createNode(x, type, content)
  }

  private fun createFieldNode(x: Field, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasFieldIndex()) content["fieldIndex"] = x.fieldIndex.accept(this)
    if (x.hasFieldName()) content["fieldName"] = x.fieldName.accept(this)

    return createNode(x, type, content)
  }

  private fun createFormalsNode(x: Formals, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasFormals()) content["formals"] = x.formals.accept(this)

    return createNode(x, type, content)
  }

  private fun createFunctionBodyNode(x: FunctionBody, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasStatements()) content["statements"] = x.statements.accept(this)

    return createNode(x, type, content)
  }

  private fun createFunctionDeclarationNode(x: FunctionDeclaration, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasConditions()) content["conditions"] = x.conditions.accept(this)
    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasBody()) content["body"] = x.body.accept(this)
    if (x.hasSignature()) content["signature"] = x.signature.accept(this)
    if (x.hasTags()) content["tags"] = x.tags.accept(this)
    if (x.hasVisibility()) content["visibility"] = x.visibility.accept(this)

    return createNode(x, type, content)
  }

  private fun createFunctionModifierNode(x: FunctionModifier, type: String): JsonObject {
    return createNode(x, type, jsonObject())
  }

  private fun createFunctionModifiersNode(x: FunctionModifiers, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasModifiers()) content["modifiers"] = x.modifiers.accept(this)

    return createNode(x, type, content)
  }

  private fun createFunctionTypeNode(x: FunctionType, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasArguments()) content["arguments"] = x.arguments.accept(this)
    if (x.hasType()) content["type"] = x.type.accept(this)

    return createNode(x, type, content)
  }

  private fun createHeaderNode(x: Header, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasImports()) content["imports"] = x.imports.accept(this)
    if (x.hasParams()) content["params"] = x.params.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)
    if (x.hasTags()) content["tags"] = x.tags.accept(this)

    return createNode(x, type, content)
  }

  private fun createHexIntegerLiteralNode(x: HexIntegerLiteral, type: String): JsonObject {
    val content = jsonObject()

    if (x is HexIntegerLiteral.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createImportNode(x: Import, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasModule()) content["module"] = x.module.accept(this)
    if (x.hasAt()) content["at"] = x.at.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)
    if (x.hasSyntax()) content["syntax"] = x.syntax.accept(this)

    return createNode(x, type, content)
  }

  private fun createImportedModuleNode(x: ImportedModule, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasActuals()) content["actuals"] = x.actuals.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)
    if (x.hasRenamings()) content["renamings"] = x.renamings.accept(this)

    return createNode(x, type, content)
  }

  private fun createIntegerLiteralNode(x: IntegerLiteral, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasDecimal()) content["decimal"] = x.decimal.accept(this)
    if (x.hasHex()) content["hex"] = x.hex.accept(this)
    if (x.hasOctal()) content["octal"] = x.octal.accept(this)

    return createNode(x, type, content)
  }

  private fun createJustDateNode(x: JustDate, type: String): JsonObject {
    val content = jsonObject()

    if (x is JustDate.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createJustTimeNode(x: JustTime, type: String): JsonObject {
    val content = jsonObject()

    if (x is JustTime.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createKeywordArgument_ExpressionNode(x: KeywordArgument_Expression, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)

    return createNode(x, type, content)
  }

  private fun createKeywordArguments_ExpressionNode(x: KeywordArguments_Expression, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasKeywordArgumentList()) content["keywordArgumentList"] = x.keywordArgumentList.accept(this)
    if (x.hasOptionalComma()) content["optionalComma"] = x.optionalComma.accept(this)

    return createNode(x, type, content)
  }

  private fun createKeywordFormalNode(x: KeywordFormal, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)
    if (x.hasType()) content["type"] = x.type.accept(this)

    return createNode(x, type, content)
  }

  private fun createKeywordFormalsNode(x: KeywordFormals, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasKeywordFormalList()) content["keywordFormalList"] = x.keywordFormalList.accept(this)
    if (x.hasOptionalComma()) content["optionalComma"] = x.optionalComma.accept(this)

    return createNode(x, type, content)
  }

  private fun createKindNode(x: Kind, type: String): JsonObject {
    return createNode(x, type, jsonObject())
  }

  private fun createLabelNode(x: Label, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasName()) content["name"] = x.name.accept(this)

    return createNode(x, type, content)
  }

  private fun createLAYOUTNode(x: LAYOUT, type: String): JsonObject {
    val content = jsonObject()

    if (x is LAYOUT.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createLiteralNode(x: Literal, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasBooleanLiteral()) content["booleanLiteral"] = x.booleanLiteral.accept(this)
    if (x.hasDateTimeLiteral()) content["dateTimeLiteral"] = x.dateTimeLiteral.accept(this)
    if (x.hasIntegerLiteral()) content["integerLiteral"] = x.integerLiteral.accept(this)
    if (x.hasLocationLiteral()) content["locationLiteral"] = x.locationLiteral.accept(this)
    if (x.hasRationalLiteral()) content["rationalLiteral"] = x.rationalLiteral.accept(this)
    if (x.hasRealLiteral()) content["realLiteral"] = x.realLiteral.accept(this)
    if (x.hasRegExpLiteral()) content["regExpLiteral"] = x.regExpLiteral.accept(this)
    if (x.hasStringLiteral()) content["stringLiteral"] = x.stringLiteral.accept(this)

    return createNode(x, type, content)
  }

  private fun createLocalVariableDeclarationNode(x: LocalVariableDeclaration, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasDeclarator()) content["declarator"] = x.declarator.accept(this)

    return createNode(x, type, content)
  }

  private fun createLocationLiteralNode(x: LocationLiteral, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasPathPart()) content["pathPart"] = x.pathPart.accept(this)
    if (x.hasProtocolPart()) content["protocolPart"] = x.protocolPart.accept(this)

    return createNode(x, type, content)
  }

  private fun createMapping_ExpressionNode(x: Mapping_Expression, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasFrom()) content["from"] = x.from.accept(this)
    if (x.hasTo()) content["to"] = x.to.accept(this)

    return createNode(x, type, content)
  }

  private fun createMidPathCharsNode(x: MidPathChars, type: String): JsonObject {
    val content = jsonObject()

    if (x is MidPathChars.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createMidProtocolCharsNode(x: MidProtocolChars, type: String): JsonObject {
    val content = jsonObject()

    if (x is MidProtocolChars.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createMidStringCharsNode(x: MidStringChars, type: String): JsonObject {
    val content = jsonObject()

    if (x is MidStringChars.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createModuleNode(x: Module, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasBody()) content["body"] = x.body.accept(this)
    if (x.hasHeader()) content["header"] = x.header.accept(this)

    return createNode(x, type, content)
  }

  private fun createModuleActualsNode(x: ModuleActuals, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasTypes()) content["types"] = x.types.accept(this)

    return createNode(x, type, content)
  }

  private fun createModuleParametersNode(x: ModuleParameters, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasParameters()) content["parameters"] = x.parameters.accept(this)

    return createNode(x, type, content)
  }

  private fun createNameNode(x: Name, type: String): JsonObject {
    val content = jsonObject()

    if (x is Name.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createNamedBackslashNode(x: NamedBackslash, type: String): JsonObject {
    val content = jsonObject()

    if (x is NamedBackslash.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createNamedRegExpNode(x: NamedRegExp, type: String): JsonObject {
    val content = jsonObject()

    if (x is NamedRegExp.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createNonterminalNode(x: Nonterminal, type: String): JsonObject {
    val content = jsonObject()

    if (x is Nonterminal.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createNonterminalLabelNode(x: NonterminalLabel, type: String): JsonObject {
    val content = jsonObject()

    if (x is NonterminalLabel.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createOctalIntegerLiteralNode(x: OctalIntegerLiteral, type: String): JsonObject {
    val content = jsonObject()

    if (x is OctalIntegerLiteral.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createOptionalCommaNode(x: OptionalComma, type: String): JsonObject {
    val content = jsonObject()

    if (x is OptionalComma.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createOptionalExpressionNode(x: OptionalExpression, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExpression()) content["expression"] = x.expression.accept(this)

    return createNode(x, type, content)
  }

  private fun createOutputNode(x: Output, type: String): JsonObject {
    val content = jsonObject()

    if (x is Output.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createParametersNode(x: Parameters, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasFormals()) content["formals"] = x.formals.accept(this)
    if (x.hasKeywordFormals()) content["keywordFormals"] = x.keywordFormals.accept(this)

    return createNode(x, type, content)
  }

  private fun createPathCharsNode(x: PathChars, type: String): JsonObject {
    val content = jsonObject()

    if (x is PathChars.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createPathPartNode(x: PathPart, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasPathChars()) content["pathChars"] = x.pathChars.accept(this)
    if (x.hasTail()) content["tail"] = x.tail.accept(this)
    if (x.hasPre()) content["pre"] = x.pre.accept(this)

    return createNode(x, type, content)
  }

  private fun createPathTailNode(x: PathTail, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasMid()) content["mid"] = x.mid.accept(this)
    if (x.hasTail()) content["tail"] = x.tail.accept(this)
    if (x.hasPost()) content["post"] = x.post.accept(this)

    return createNode(x, type, content)
  }

  private fun createPatternWithActionNode(x: PatternWithAction, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasPattern()) content["pattern"] = x.pattern.accept(this)
    if (x.hasReplacement()) content["replacement"] = x.replacement.accept(this)
    if (x.hasStatement()) content["statement"] = x.statement.accept(this)

    return createNode(x, type, content)
  }

  private fun createPostPathCharsNode(x: PostPathChars, type: String): JsonObject {
    val content = jsonObject()

    if (x is PostPathChars.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createPostProtocolCharsNode(x: PostProtocolChars, type: String): JsonObject {
    val content = jsonObject()

    if (x is PostProtocolChars.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createPostStringCharsNode(x: PostStringChars, type: String): JsonObject {
    val content = jsonObject()

    if (x is PostStringChars.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createPrePathCharsNode(x: PrePathChars, type: String): JsonObject {
    val content = jsonObject()

    if (x is PrePathChars.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createPreProtocolCharsNode(x: PreProtocolChars, type: String): JsonObject {
    val content = jsonObject()

    if (x is PreProtocolChars.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createPreStringCharsNode(x: PreStringChars, type: String): JsonObject {
    val content = jsonObject()

    if (x is PreStringChars.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createProdNode(x: Prod, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasModifiers()) content["modifiers"] = x.modifiers.accept(this)
    if (x.hasSyms()) content["syms"] = x.syms.accept(this)
    if (x.hasAssociativity()) content["associativity"] = x.associativity.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)
    if (x.hasReferenced()) content["referenced"] = x.referenced.accept(this)
    if (x.hasGroup()) content["group"] = x.group.accept(this)
    if (x.hasLhs()) content["lhs"] = x.lhs.accept(this)
    if (x.hasRhs()) content["rhs"] = x.rhs.accept(this)

    return createNode(x, type, content)
  }

  private fun createProdModifierNode(x: ProdModifier, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasAssociativity()) content["associativity"] = x.associativity.accept(this)
    if (x.hasTag()) content["tag"] = x.tag.accept(this)

    return createNode(x, type, content)
  }

  private fun createProtocolCharsNode(x: ProtocolChars, type: String): JsonObject {
    val content = jsonObject()

    if (x is ProtocolChars.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createProtocolPartNode(x: ProtocolPart, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasPre()) content["pre"] = x.pre.accept(this)
    if (x.hasProtocolChars()) content["protocolChars"] = x.protocolChars.accept(this)
    if (x.hasTail()) content["tail"] = x.tail.accept(this)

    return createNode(x, type, content)
  }

  private fun createProtocolTailNode(x: ProtocolTail, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasMid()) content["mid"] = x.mid.accept(this)
    if (x.hasPost()) content["post"] = x.post.accept(this)
    if (x.hasTail()) content["tail"] = x.tail.accept(this)

    return createNode(x, type, content)
  }

  private fun createQualifiedNameNode(x: QualifiedName, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasNames()) content["names"] = x.names.accept(this)

    return createNode(x, type, content)
  }

  private fun createRangeNode(x: Range, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasCharacter()) content["character"] = x.character.accept(this)
    if (x.hasEnd()) content["end"] = x.end.accept(this)
    if (x.hasStart()) content["start"] = x.start.accept(this)

    return createNode(x, type, content)
  }

  private fun createRationalLiteralNode(x: RationalLiteral, type: String): JsonObject {
    val content = jsonObject()

    if (x is RationalLiteral.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createRealLiteralNode(x: RealLiteral, type: String): JsonObject {
    val content = jsonObject()

    if (x is RealLiteral.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createRegExpNode(x: RegExp, type: String): JsonObject {
    val content = jsonObject()

    if (x is RegExp.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createRegExpLiteralNode(x: RegExpLiteral, type: String): JsonObject {
    val content = jsonObject()

    if (x is RegExpLiteral.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createRegExpModifierNode(x: RegExpModifier, type: String): JsonObject {
    val content = jsonObject()

    if (x is RegExpModifier.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createRenamingNode(x: Renaming, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasFrom()) content["from"] = x.from.accept(this)
    if (x.hasTo()) content["to"] = x.to.accept(this)

    return createNode(x, type, content)
  }

  private fun createRenamingsNode(x: Renamings, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasRenamings()) content["renamings"] = x.renamings.accept(this)

    return createNode(x, type, content)
  }

  private fun createReplacementNode(x: Replacement, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasConditions()) content["conditions"] = x.conditions.accept(this)
    if (x.hasReplacementExpression()) content["replacementExpression"] = x.replacementExpression.accept(this)

    return createNode(x, type, content)
  }

  private fun createShellCommandNode(x: ShellCommand, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)

    return createNode(x, type, content)
  }

  private fun createSignatureNode(x: Signature, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExceptions()) content["exceptions"] = x.exceptions.accept(this)
    if (x.hasModifiers()) content["modifiers"] = x.modifiers.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)
    if (x.hasParameters()) content["parameters"] = x.parameters.accept(this)
    if (x.hasType()) content["type"] = x.type.accept(this)

    return createNode(x, type, content)
  }

  private fun createStartNode(x: Start, type: String): JsonObject {
    return createNode(x, type, jsonObject())
  }

  private fun createStatementNode(x: Statement, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasCases()) content["cases"] = x.cases.accept(this)
    if (x.hasHandlers()) content["handlers"] = x.handlers.accept(this)
    if (x.hasConditions()) content["conditions"] = x.conditions.accept(this)
    if (x.hasGenerators()) content["generators"] = x.generators.accept(this)
    if (x.hasNames()) content["names"] = x.names.accept(this)
    if (x.hasVariables()) content["variables"] = x.variables.accept(this)
    if (x.hasStatements()) content["statements"] = x.statements.accept(this)
    if (x.hasAssignable()) content["assignable"] = x.assignable.accept(this)
    if (x.hasOperator()) content["operator"] = x.operator.accept(this)
    if (x.hasBound()) content["bound"] = x.bound.accept(this)
    if (x.hasDataTarget()) content["dataTarget"] = x.dataTarget.accept(this)
    if (x.hasCondition()) content["condition"] = x.condition.accept(this)
    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasMessage()) content["message"] = x.message.accept(this)
    if (x.hasFunctionDeclaration()) content["functionDeclaration"] = x.functionDeclaration.accept(this)
    if (x.hasLabel()) content["label"] = x.label.accept(this)
    if (x.hasDeclaration()) content["declaration"] = x.declaration.accept(this)
    if (x.hasBody()) content["body"] = x.body.accept(this)
    if (x.hasElseStatement()) content["elseStatement"] = x.elseStatement.accept(this)
    if (x.hasFinallyBody()) content["finallyBody"] = x.finallyBody.accept(this)
    if (x.hasStatement()) content["statement"] = x.statement.accept(this)
    if (x.hasThenStatement()) content["thenStatement"] = x.thenStatement.accept(this)
    if (x.hasTarget()) content["target"] = x.target.accept(this)
    if (x.hasType()) content["type"] = x.type.accept(this)
    if (x.hasVisit()) content["visit"] = x.visit.accept(this)

    return createNode(x, type, content)
  }

  private fun createStrategyNode(x: Strategy, type: String): JsonObject {
    return createNode(x, type, jsonObject())
  }

  private fun createStringCharacterNode(x: StringCharacter, type: String): JsonObject {
    val content = jsonObject()

    if (x is StringCharacter.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createStringConstantNode(x: StringConstant, type: String): JsonObject {
    val content = jsonObject()

    if (x is StringConstant.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createStringLiteralNode(x: StringLiteral, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasPre()) content["pre"] = x.pre.accept(this)
    if (x.hasConstant()) content["constant"] = x.constant.accept(this)
    if (x.hasTail()) content["tail"] = x.tail.accept(this)
    if (x.hasTemplate()) content["template"] = x.template.accept(this)

    return createNode(x, type, content)
  }

  private fun createStringMiddleNode(x: StringMiddle, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasMid()) content["mid"] = x.mid.accept(this)
    if (x.hasTail()) content["tail"] = x.tail.accept(this)
    if (x.hasTemplate()) content["template"] = x.template.accept(this)

    return createNode(x, type, content)
  }

  private fun createStringTailNode(x: StringTail, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasMid()) content["mid"] = x.mid.accept(this)
    if (x.hasPost()) content["post"] = x.post.accept(this)
    if (x.hasTail()) content["tail"] = x.tail.accept(this)
    if (x.hasTemplate()) content["template"] = x.template.accept(this)

    return createNode(x, type, content)
  }

  private fun createStringTemplateNode(x: StringTemplate, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasConditions()) content["conditions"] = x.conditions.accept(this)
    if (x.hasGenerators()) content["generators"] = x.generators.accept(this)
    if (x.hasPostStats()) content["postStats"] = x.postStats.accept(this)
    if (x.hasPostStatsElse()) content["postStatsElse"] = x.postStatsElse.accept(this)
    if (x.hasPostStatsThen()) content["postStatsThen"] = x.postStatsThen.accept(this)
    if (x.hasPreStats()) content["preStats"] = x.preStats.accept(this)
    if (x.hasPreStatsElse()) content["preStatsElse"] = x.preStatsElse.accept(this)
    if (x.hasPreStatsThen()) content["preStatsThen"] = x.preStatsThen.accept(this)
    if (x.hasCondition()) content["condition"] = x.condition.accept(this)
    if (x.hasBody()) content["body"] = x.body.accept(this)
    if (x.hasElseString()) content["elseString"] = x.elseString.accept(this)
    if (x.hasThenString()) content["thenString"] = x.thenString.accept(this)

    return createNode(x, type, content)
  }

  private fun createStructuredTypeNode(x: StructuredType, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasArguments()) content["arguments"] = x.arguments.accept(this)
    if (x.hasBasicType()) content["basicType"] = x.basicType.accept(this)

    return createNode(x, type, content)
  }

  private fun createSymNode(x: Sym, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasAlternatives()) content["alternatives"] = x.alternatives.accept(this)
    if (x.hasParameters()) content["parameters"] = x.parameters.accept(this)
    if (x.hasSequence()) content["sequence"] = x.sequence.accept(this)
    if (x.hasCistring()) content["cistring"] = x.cistring.accept(this)
    if (x.hasCharClass()) content["charClass"] = x.charClass.accept(this)
    if (x.hasColumn()) content["column"] = x.column.accept(this)
    if (x.hasNonterminal()) content["nonterminal"] = x.nonterminal.accept(this)
    if (x.hasLabel()) content["label"] = x.label.accept(this)
    if (x.hasString()) content["string"] = x.string.accept(this)
    if (x.hasFirst()) content["first"] = x.first.accept(this)
    if (x.hasMatch()) content["match"] = x.match.accept(this)
    if (x.hasSep()) content["sep"] = x.sep.accept(this)
    if (x.hasSymbol()) content["symbol"] = x.symbol.accept(this)

    return createNode(x, type, content)
  }

  private fun createSyntaxDefinitionNode(x: SyntaxDefinition, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasProduction()) content["production"] = x.production.accept(this)
    if (x.hasStart()) content["start"] = x.start.accept(this)
    if (x.hasDefined()) content["defined"] = x.defined.accept(this)
    if (x.hasVis()) content["vis"] = x.vis.accept(this)

    return createNode(x, type, content)
  }

  private fun createTagNode(x: Tag, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasExpression()) content["expression"] = x.expression.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)
    if (x.hasContents()) content["contents"] = x.contents.accept(this)

    return createNode(x, type, content)
  }

  private fun createTagsNode(x: Tags, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasTags()) content["tags"] = x.tags.accept(this)

    return createNode(x, type, content)
  }

  private fun createTagStringNode(x: TagString, type: String): JsonObject {
    val content = jsonObject()

    if (x is TagString.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createTargetNode(x: Target, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasName()) content["name"] = x.name.accept(this)

    return createNode(x, type, content)
  }

  private fun createTimePartNoTZNode(x: TimePartNoTZ, type: String): JsonObject {
    val content = jsonObject()

    if (x is TimePartNoTZ.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createTimeZonePartNode(x: TimeZonePart, type: String): JsonObject {
    val content = jsonObject()

    if (x is TimeZonePart.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createToplevelNode(x: Toplevel, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasDeclaration()) content["declaration"] = x.declaration.accept(this)

    return createNode(x, type, content)
  }

  private fun createTypeNode(x: Type, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasBasic()) content["basic"] = x.basic.accept(this)
    if (x.hasSelector()) content["selector"] = x.selector.accept(this)
    if (x.hasFunction()) content["function"] = x.function.accept(this)
    if (x.hasStructured()) content["structured"] = x.structured.accept(this)
    if (x.hasSymbol()) content["symbol"] = x.symbol.accept(this)
    if (x.hasType()) content["type"] = x.type.accept(this)
    if (x.hasTypeVar()) content["typeVar"] = x.typeVar.accept(this)
    if (x.hasUser()) content["user"] = x.user.accept(this)

    return createNode(x, type, content)
  }

  private fun createTypeArgNode(x: TypeArg, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasName()) content["name"] = x.name.accept(this)
    if (x.hasType()) content["type"] = x.type.accept(this)

    return createNode(x, type, content)
  }

  private fun createTypeVarNode(x: TypeVar, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasName()) content["name"] = x.name.accept(this)
    if (x.hasBound()) content["bound"] = x.bound.accept(this)

    return createNode(x, type, content)
  }

  private fun createUnicodeEscapeNode(x: UnicodeEscape, type: String): JsonObject {
    val content = jsonObject()

    if (x is UnicodeEscape.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createURLCharsNode(x: URLChars, type: String): JsonObject {
    val content = jsonObject()

    if (x is URLChars.Lexical) content["string"] = x.string

    return createNode(x, type, content)
  }

  private fun createUserTypeNode(x: UserType, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasParameters()) content["parameters"] = x.parameters.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)

    return createNode(x, type, content)
  }

  private fun createVariableNode(x: Variable, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasInitial()) content["initial"] = x.initial.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)

    return createNode(x, type, content)
  }

  private fun createVariantNode(x: Variant, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasArguments()) content["arguments"] = x.arguments.accept(this)
    if (x.hasKeywordArguments()) content["keywordArguments"] = x.keywordArguments.accept(this)
    if (x.hasName()) content["name"] = x.name.accept(this)

    return createNode(x, type, content)
  }

  private fun createVisibilityNode(x: Visibility, type: String): JsonObject {
    return createNode(x, type, jsonObject())
  }

  private fun createVisitNode(x: Visit, type: String): JsonObject {
    val content = jsonObject()

    if (x.hasCases()) content["cases"] = x.cases.accept(this)
    if (x.hasSubject()) content["subject"] = x.subject.accept(this)
    if (x.hasStrategy()) content["strategy"] = x.strategy.accept(this)

    return createNode(x, type, content)
  }

  private fun createNode(x: AbstractAST, type: String, content: JsonObject): JsonObject {
    content["_type"] = type
    content["_start"] = x.location.offset
    content["_end"] = x.location.offset + x.location.length
    return content
  }

  private fun List<AbstractAST>.accept(visitor: IASTVisitor<*>): JsonArray {
    return this.map { it.accept(visitor) }.toJsonArray()
  }
}
