import * as yargs from "yargs";
/**
 * Runs migration command.
 */
export declare class MigrationRunCommand implements yargs.CommandModule {
    command: string;
    describe: string;
    aliases: string;
    builder(args: yargs.Argv): yargs.Argv;
    handler(args: yargs.Arguments): Promise<void>;
}
