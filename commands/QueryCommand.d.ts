import * as yargs from "yargs";
/**
 * Executes an sql query on the given connection.
 */
export declare class QueryCommand implements yargs.CommandModule {
    command: string;
    describe: string;
    builder(args: yargs.Argv): yargs.Argv;
    handler(args: yargs.Arguments): Promise<void>;
}
