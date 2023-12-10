export type NodeType = 
    | "Program" 
    | "NumericLiteral" 
    | "Identifier" 
    | "VarDeclaration"
    | "BinaryExpr";

export interface Stmt{
    kind: NodeType;
}

export interface Program extends Stmt{
    kind: "Program";
    body: Stmt[];
}

export interface VarDeclaration extends Stmt{
    kind: "VarDeclaration";
    constant: boolean,
    identifier: string,
    value?: Expr;
}

// deno-lint-ignore no-empty-interface
export interface Expr extends Stmt{}

export interface BinaryExpr extends Expr{
    kind: "BinaryExpr";
    left: Expr;
    right: Expr;
    operator: string;
}

export interface Identifier extends Expr{
    kind: "Identifier";
    symbol: string;
}

export interface NumericLiteral extends Expr{
    kind: "NumericLiteral";
    value: number;
}

//export interface NullLiteral extends Expr{
   // kind: "NullLiteral";
   // value: "null";
//}


