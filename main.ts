import Parser from "./frontend/parser.ts";
import Environment from "./runtime/environment.ts";
import { evaluate } from "./runtime/interpreter.ts";
import { MK_BOOL, MK_NULL, MK_NUMBER } from "./runtime/values.ts";

//repl();

run("./test.txt");

async function run(filename: string){
    const parser = new Parser();
    const env = new Environment();

    const input = await Deno.readTextFile(filename);
    const program = parser.produceAST(input);
    const result = evaluate(program, env);
    console.log(result);
}


function repl(){
    const parser = new Parser();
    const env = new Environment();

    console.log("\nRepl v0.1");
    
    while (true){
        const input = prompt("> ");
        // check for no user input or exit
        if (!input || input.includes("exit")){
            Deno.exit(1);
        }

        const program = parser.produceAST(input);

        const result = evaluate(program, env);
        console.log(result);

    }
}
