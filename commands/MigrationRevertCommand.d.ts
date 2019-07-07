import * as yargs from "yargs";
/**
 * Reverts last migration command.
 */
export declare class MigrationRevertCommand implements yargs.CommandModule {
    command: string;
    describe: string;
    aliases: string;
    builder(args: yargs.Argv): yargs.Argv;
    handler(args: yargs.Arguments): Promise<void>;
}
