import yargs, { command, showHelp } from "yargs";

export class StopCommand {
    // cem<O extends { [key: string]: yargs.Options; }>(
  //   command: string | readonly string[],
  //   description: string,
  //    builder?: O | undefined,
  //    handler?: ((args: yargs.Arguments<yargs.InferredOptionTypes<O>>) => void) | undefined,
  //    middlewares?: yargs.MiddlewareFunction<{}>[] | undefined,
  //    deprecated?: string | boolean | undefined): yargs.Argv<{}>

  cmd: yargs.Argv;

  constructor() {
        this.cmd = command(
      "stop <prefix>",
            "Prints: <prefix> full name",
      {
        prefix: {
          desc: 'prefix bilgisi burada',
          choices: ['delete', 'modify']
        },
        fullname: {
          alias: 'f',
          type: 'string',
          describe: 'Full name',
          demand: true
        }
      },
      (argv: any) => {
        const { fullname } = argv;
        console.log('stoppppp : ', fullname);
      }
    );
  }
}
