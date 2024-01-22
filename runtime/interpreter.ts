import { MK_NULL, NumberVal, RuntimeVal } from "./values.ts";
import {NumericLiteral, Stmt, BinaryExpr, Program, Identifier, VarDeclaration, AssignmentExpr} from "../frontend/ast.ts";
import  Environment  from "./environment.ts";
import { eval_assignment, eval_binary_expr, eval_identifier } from "./eval/expressions.ts";
import { eval_program, eval_var_declaration } from "./eval/statements.ts";

export function evaluate(astNode: Stmt, env: Environment): RuntimeVal{
    switch (astNode.kind){
        case "NumericLiteral":
            return {
                value: ((astNode as NumericLiteral).value), 
                type: "number"
            } as NumberVal;
        case "Identifier":
            return eval_identifier(astNode as Identifier, env);
        case "AssignmentExpr":
            return eval_assignment(astNode as AssignmentExpr, env);
        case "BinaryExpr":
            return eval_binary_expr(astNode as BinaryExpr, env);
        case "Program":
            return eval_program(astNode as Program, env);
        case "VarDeclaration":
            return eval_var_declaration(astNode as VarDeclaration, env);
        default:
            console.error("this AST node has not yet been set up for interpretation", astNode,);
            Deno.exit(0);   
    }


}
